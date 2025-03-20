import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <section className="min-h-screen bg-base-100 flex items-center justify-center p-8">
      <div className="container bg-white shadow-lg rounded-lg p-8 max-w-4xl overflow-y-auto" style={{ maxHeight: '80vh' }}>
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Terms and Conditions</h1>

        <div className="space-y-6">
          
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">1. Introduction</h2>
            <p className="text-gray-600 mt-2">
              Welcome to <strong>Ashraful.in</strong>. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using the website.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">2. User Agreement</h2>
            <p className="text-gray-600 mt-2">
              By using this website, you confirm that you are at least 18 years old or have parental consent. You agree not to use the website for any illegal or unauthorized purposes.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">3. Intellectual Property</h2>
            <p className="text-gray-600 mt-2">
              All content on this website, including text, images, graphics, and videos, is the property of <strong>Your Name</strong>. You may not reproduce, distribute, or use any content without written permission.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">4. Privacy Policy</h2>
            <p className="text-gray-600 mt-2">
              Your privacy is important to us. Please refer to our <a href="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</a> for detailed information on how we collect, use, and protect your data.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">5. Limitation of Liability</h2>
            <p className="text-gray-600 mt-2">
              We are not liable for any damages resulting from the use of this website. This includes, but is not limited to, direct, indirect, incidental, or consequential damages.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">6. Changes to Terms</h2>
            <p className="text-gray-600 mt-2">
              We reserve the right to update or modify these terms at any time without prior notice. It is your responsibility to review them periodically.
            </p>
          </div>

          {/* Acceptance */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">
              By using this website, you agree to these terms and conditions.
            </p>
            <Link to="/" className="btn btn-primary mt-4">Back to Home</Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Terms;
