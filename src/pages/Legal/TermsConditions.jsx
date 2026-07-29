import React from 'react';

const TermsConditions = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="border-b border-white/10 pb-8 space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Terms & Conditions</h1>
        <p className="text-sm text-gray-500">Last updated: July 29, 2026</p>
      </div>

      <div className="space-y-8 text-gray-400 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or using the services provided by TriDevSol, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services or platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">2. Scope of Services</h2>
          <p>
            TriDevSol provides custom software development, frontend engineering, MVP launching, AI feature integrations, and consulting services. The specific parameters, timelines, and deliverables of any engagement are defined in a separate Statement of Work (SOW) or Service Agreement signed by both parties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">3. Intellectual Property</h2>
          <p>
            Unless explicitly agreed upon in a written contract, all code bases, mockups, design patterns, and systems developed by TriDevSol remain our intellectual property until all associated development invoices and fees are settled in full by the Client. Upon full payment, the transfer of intellectual ownership is completed.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">4. User Obligations</h2>
          <p>
            Clients and users of our websites must not inject malicious scripts, upload corrupted files, attempt penetration testing without authorization, or copy the layout design of our assets for competing commercial interests.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
          <p>
            TriDevSol, its directors, employees, or partners will in no event be liable for any indirect, incidental, special, or consequential damages resulting from project delays, data losses, server downtimes, or client-side marketing campaign inefficiencies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">6. Modifications to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice by posting the updated terms on this webpage.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
