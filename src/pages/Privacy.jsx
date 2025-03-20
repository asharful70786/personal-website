import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-base-100 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">Privacy Policy</h1>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="mt-2 leading-relaxed">
            Welcome to <span className="font-bold">Your Portfolio Website</span>. This privacy policy explains how we 
            collect, use, and protect your information when you visit this website.
          </p>
        </section>

        {/* Information Collection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <p className="mt-2 leading-relaxed">
            When you use the contact form, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your message content</li>
          </ul>
        </section>

        {/* Usage of Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <p className="mt-2 leading-relaxed">
            The information collected through the contact form is used for:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Responding to your inquiries or messages</li>
            <li>Improving the website's functionality and content</li>
            <li>Contacting you regarding potential services or collaborations</li>
          </ul>
        </section>

        {/* Third-Party Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">4. Third-Party Links</h2>
          <p className="mt-2 leading-relaxed">
            This website may contain links to external websites (e.g., social media platforms). We are not responsible 
            for the privacy practices or content of these external sites. Please review their policies before providing 
            any personal data.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">5. Data Security</h2>
          <p className="mt-2 leading-relaxed">
            We take appropriate measures to protect your personal information. However, no method of transmission over 
            the internet is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* User Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <p className="mt-2 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of any inaccurate information</li>
            <li>Request deletion of your personal data</li>
          </ul>
        </section>

        {/* Changes to Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">7. Changes to this Policy</h2>
          <p className="mt-2 leading-relaxed">
            We may update this privacy policy from time to time. Please check this page periodically for any changes.
          </p>
        </section>

        {/* Contact Info */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">8. Contact Us</h2>
          <p className="mt-2 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2 font-bold">
            Email: <a href="mailto:ashrafulmomin2@gmail.com" className="text-primary">ashrafulmomin2@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
