
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, CreditCard, CheckCircle } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  amount: number;
  onPaymentComplete: (transactionId: string, method: string) => void;
}

export function PaymentModal({ isOpen, onClose, courseTitle, amount, onPaymentComplete }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [transactionId, setTransactionId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentMethod || !transactionId) return;

    setIsSubmitting(true);
    try {
      await onPaymentComplete(transactionId, paymentMethod);
      onClose();
      setTransactionId('');
      setPaymentMethod('');
    } catch (error) {
      console.error('Payment submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">{courseTitle}</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-4">
                  ₹{amount.toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-800">Payment Instructions</span>
              </div>
              <div className="text-sm text-blue-700 space-y-2">
                <p>1. Open your preferred payment app (GooglePay/PhonePe)</p>
                <p>2. Send ₹{amount.toLocaleString()} to: <strong>6304378349</strong></p>
                <p>3. Copy the transaction ID from your app</p>
                <p>4. Enter the details below to confirm payment</p>
              </div>
            </CardContent>
          </Card>

          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="payment-method">Payment Method</Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="googlepay">Google Pay</SelectItem>
                  <SelectItem value="phonepe">PhonePe</SelectItem>
                  <SelectItem value="paytm">Paytm</SelectItem>
                  <SelectItem value="other">Other UPI</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="transaction-id">Transaction ID</Label>
              <Input
                id="transaction-id"
                type="text"
                placeholder="Enter transaction ID from your payment app"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                required
                className="font-mono text-sm"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={!paymentMethod || !transactionId || isSubmitting}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700"
              >
                {isSubmitting ? (
                  <>Confirming...</>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Confirm Payment
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
