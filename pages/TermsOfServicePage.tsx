import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-12">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 prose-h2:text-gray-900 dark:prose-h2:text-white prose-strong:text-gray-900 dark:prose-strong:text-white">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the ProbSolv Tech Agency website (the "Service") operated by ProbSolv ("us", "we", or "our").
          </p>

          <h2 id="acceptance">1. Acceptance of Terms</h2>
          <p>
            By accessing and using our Service, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement.
          </p>

          <h2 id="service-description">2. Description of Service</h2>
          <p>
            Our Service provides information about our technology services, including web development, app development, and AI automations. We also publish blog articles related to our industry. The Service is provided "as is" and we assume no responsibility for the timeliness, deletion, mis-delivery, or failure to store any user communications or personalization settings.
          </p>

          <h2 id="user-conduct">3. User Conduct</h2>
          <p>
            You agree not to use the Service to:
          </p>
          <ul>
            <li>Post or transmit any material that is disruptive, threatening, abusive, libelous, defamatory, obscene, or otherwise objectionable.</li>
            <li>Violate any applicable local, state, national, or international law.</li>
            <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
          </ul>

          <h2 id="intellectual-property">4. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of ProbSolv and its licensors. The content, including but not limited to text, graphics, logos, and images, is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
          
          <h2 id="disclaimer">5. Disclaimer of Warranties</h2>
          <p>
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We expressly disclaim all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <h2 id="liability">6. Limitation of Liability</h2>
          <p>
            In no event shall ProbSolv, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 id="changes">7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms of Service.
          </p>

          <h2 id="contact-us">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us through the contact form available on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
