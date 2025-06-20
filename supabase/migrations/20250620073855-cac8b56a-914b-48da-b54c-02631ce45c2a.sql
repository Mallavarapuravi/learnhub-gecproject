
-- Create payments table to track payment information
CREATE TABLE public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'INR',
  payment_method TEXT, -- 'googlepay', 'phonepe', etc.
  payment_phone TEXT DEFAULT '6304378349',
  transaction_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Update courses table to include price in INR
ALTER TABLE public.courses 
ALTER COLUMN price TYPE DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS price_inr DECIMAL(10,2);

-- Update existing courses with INR prices (convert from USD to INR approximately)
UPDATE public.courses SET price_inr = price * 83 WHERE price IS NOT NULL;

-- Create enrollment_requests table for pending enrollments
CREATE TABLE public.enrollment_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  payment_id UUID REFERENCES public.payments(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'payment_pending' CHECK (status IN ('payment_pending', 'enrolled', 'rejected')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, course_id)
);

-- Enable RLS on new tables
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollment_requests ENABLE ROW LEVEL SECURITY;

-- RLS Policies for payments
CREATE POLICY "Users can view their own payments" ON public.payments
  FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can create their own payments" ON public.payments
  FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can update their own payments" ON public.payments
  FOR UPDATE USING (user_id = auth.uid());

-- RLS Policies for enrollment_requests
CREATE POLICY "Users can view their own enrollment requests" ON public.enrollment_requests
  FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can create their own enrollment requests" ON public.enrollment_requests
  FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can update their own enrollment requests" ON public.enrollment_requests
  FOR UPDATE USING (user_id = auth.uid());

-- Update existing enrollments table policies to be more restrictive
DROP POLICY IF EXISTS "Students can view own enrollments" ON public.enrollments;
DROP POLICY IF EXISTS "Students can enroll in courses" ON public.enrollments;
DROP POLICY IF EXISTS "Students can update own enrollment progress" ON public.enrollments;

CREATE POLICY "Students can view own enrollments" ON public.enrollments
  FOR SELECT USING (student_id = auth.uid());
CREATE POLICY "Admin can manage enrollments" ON public.enrollments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );
