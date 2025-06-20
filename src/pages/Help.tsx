
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Phone, Mail, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Help = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `*LearnHub Feedback*%0A%0A*Name:* ${feedback.name}%0A*Email:* ${feedback.email}%0A*Message:* ${feedback.message}`;
    const whatsappUrl = `https://wa.me/916304378349?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecting to WhatsApp to send your feedback!");
    
    setFeedback({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  };

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "To enroll in a course, browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. You'll need to create an account and complete the payment process."
    },
    {
      question: "Can I access courses offline?",
      answer: "Currently, all courses require an internet connection to access. We're working on offline capabilities for the future."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and PayPal. All payments are processed securely through our payment partners."
    },
    {
      question: "How long do I have access to a course?",
      answer: "Once you enroll in a course, you have lifetime access to all course materials, including any future updates."
    },
    {
      question: "Do you offer certificates?",
      answer: "Yes! Upon successful completion of a course, you'll receive a certificate of completion that you can share on your professional profiles."
    },
    {
      question: "Can I get a refund?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your course, you can request a full refund within 30 days of purchase."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <MessageCircle className="h-8 w-8 mx-auto text-green-600 mb-2" />
              <CardTitle>WhatsApp Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Get instant help via WhatsApp</p>
              <Button 
                onClick={() => window.open('https://wa.me/916304378349', '_blank')}
                className="bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat Now
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Phone className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <CardTitle>Phone Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
              <Button 
                onClick={() => window.open('tel:+916304378349', '_blank')}
                variant="outline"
              >
                <Phone className="h-4 w-4 mr-2" />
                +91 6304378349
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Mail className="h-8 w-8 mx-auto text-purple-600 mb-2" />
              <CardTitle>Email Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Send us a detailed message</p>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                support@learnhub.com
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Quick answers to the most common questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Feedback Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send Feedback</CardTitle>
            <CardDescription>
              We'd love to hear from you! Your feedback will be sent directly to our WhatsApp.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={feedback.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={feedback.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={feedback.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your experience, suggestions, or any issues you're facing..."
                  rows={5}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Feedback via WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Help;
