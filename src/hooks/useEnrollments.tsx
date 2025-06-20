
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

export function useEnrollments() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const enrollmentsQuery = useQuery({
    queryKey: ['enrollments', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from('enrollments')
        .select(`
          *,
          courses (
            id,
            title,
            description,
            price_inr,
            thumbnail_url,
            categories (name, icon)
          )
        `)
        .eq('student_id', user.id);

      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  const enrollmentRequestsQuery = useQuery({
    queryKey: ['enrollment_requests', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from('enrollment_requests')
        .select(`
          *,
          courses (
            id,
            title,
            price_inr
          ),
          payments (
            id,
            status,
            payment_method,
            transaction_id
          )
        `)
        .eq('user_id', user.id);

      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  const createEnrollmentRequest = useMutation({
    mutationFn: async ({ courseId, amount }: { courseId: string; amount: number }) => {
      if (!user) throw new Error('User not authenticated');

      // First create payment record
      const { data: payment, error: paymentError } = await supabase
        .from('payments')
        .insert({
          user_id: user.id,
          course_id: courseId,
          amount: amount,
          currency: 'INR',
          status: 'pending'
        })
        .select()
        .single();

      if (paymentError) throw paymentError;

      // Then create enrollment request
      const { data: enrollmentRequest, error: enrollmentError } = await supabase
        .from('enrollment_requests')
        .insert({
          user_id: user.id,
          course_id: courseId,
          payment_id: payment.id,
          status: 'payment_pending'
        })
        .select()
        .single();

      if (enrollmentError) throw enrollmentError;

      return { payment, enrollmentRequest };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enrollment_requests'] });
      toast.success('Enrollment request created! Please complete the payment.');
    },
    onError: (error) => {
      toast.error('Failed to create enrollment request: ' + error.message);
    },
  });

  const updatePaymentStatus = useMutation({
    mutationFn: async ({ paymentId, transactionId, method }: { 
      paymentId: string; 
      transactionId: string; 
      method: string;
    }) => {
      const { error } = await supabase
        .from('payments')
        .update({
          status: 'completed',
          transaction_id: transactionId,
          payment_method: method,
          updated_at: new Date().toISOString()
        })
        .eq('id', paymentId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enrollment_requests'] });
      queryClient.invalidateQueries({ queryKey: ['enrollments'] });
      toast.success('Payment confirmed! You will be enrolled shortly.');
    },
    onError: (error) => {
      toast.error('Failed to update payment: ' + error.message);
    },
  });

  return {
    enrollments: enrollmentsQuery.data || [],
    enrollmentRequests: enrollmentRequestsQuery.data || [],
    isLoading: enrollmentsQuery.isLoading || enrollmentRequestsQuery.isLoading,
    createEnrollmentRequest,
    updatePaymentStatus,
  };
}
