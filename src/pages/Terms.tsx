
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card>
          <CardContent className="prose max-w-none p-8">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing and using LearnHub, you accept and agree to be bound by the terms and 
                  provision of this agreement. If you do not agree to abide by the above, please do 
                  not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily access LearnHub for personal, non-commercial 
                  transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for commercial purposes or public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Course Access and Content</h2>
                <p className="text-gray-700 mb-4">
                  When you enroll in a course, you receive:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Lifetime access to course materials</li>
                  <li>Access to community discussions</li>
                  <li>Certificate of completion upon finishing the course</li>
                  <li>Updates and improvements to course content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment and Refunds</h2>
                <p className="text-gray-700 mb-4">
                  All course payments are processed securely. We offer:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>30-day money-back guarantee for all courses</li>
                  <li>Secure payment processing through trusted providers</li>
                  <li>Multiple payment options including cards and digital wallets</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Conduct</h2>
                <p className="text-gray-700 mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Share your account credentials with others</li>
                  <li>Upload malicious content or spam</li>
                  <li>Interfere with the platform's functionality</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Harass or abuse other users or instructors</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-700">
                  All course content, including videos, text, images, and materials, are protected by 
                  copyright and other intellectual property laws. You may not redistribute, reproduce, 
                  or create derivative works from our content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700">
                  LearnHub shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, including without limitation, loss of profits, data, use, 
                  goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">Email: legal@learnhub.com</p>
                  <p className="text-gray-700">Phone: +91 6304378349</p>
                  <p className="text-gray-700">WhatsApp: +91 6304378349</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these terms at any time. We will notify users of 
                  significant changes via email or platform notifications.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
