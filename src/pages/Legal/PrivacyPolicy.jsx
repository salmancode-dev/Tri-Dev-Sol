import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="border-b border-white/10 pb-8 space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Privacy Policies</h1>
        <p className="text-sm text-gray-500">Last updated: July 29, 2026</p>
      </div>

      <div className="space-y-8 text-gray-400 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
          <p>
            When you contact us using our contact form, we collect the details you explicitly provide: name, email address, selected service, and project message. We also use analytics tools that collect anonymous tracking cookies regarding browser version, screen resolution, and pages visited.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">2. How We Use Information</h2>
          <p>
            We use your contact details solely to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to project inquiries, pricing quotes, and request reviews.</li>
            <li>Send infrequent email updates regarding TriDevSol developments (which you can opt out of at any time).</li>
            <li>Analyze web performance to improve loading times and interface responsiveness.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">3. Information Sharing</h2>
          <p>
            We do not sell, rent, or lease your contact information or personal data to marketing corporations or third parties. Data is only shared with trusted database hosts and email clients necessary to transmit your request.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">4. Data Security</h2>
          <p>
            We implement multiple layers of security to defend your data. Form inputs are transmitted using secure sockets layers (SSL) and hosted on firewalled endpoints.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">5. Your Data Rights</h2>
          <p>
            You have the right to request deletion of your contact history or ask us to export what contact records we hold. To make a request, contact hello@tridevsol.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
