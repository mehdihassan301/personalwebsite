import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-12">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 prose-h2:text-gray-900 dark:prose-h2:text-white prose-strong:text-gray-900 dark:prose-strong:text-white">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p>
            Welcome to ProbSolv Tech Agency ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2 id="information-collection">1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you fill out a contact form or subscribe to our newsletter.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
            </li>
          </ul>

          <h2 id="use-of-information">2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul>
            <li>Respond to your inquiries and support requests.</li>
            <li>Send you a newsletter and other marketing communications.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
          </ul>

          <h2 id="disclosure-of-information">3. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul>
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, and customer service.
            </li>
          </ul>

          <h2 id="security">4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 id="third-party-advertisers">5. Third-Party Advertisers (e.g., Google AdSense)</h2>
          <p>
            We may use third-party advertising companies to serve ads when you visit the Site. These companies may use information about your visits to our Site and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you. For example, Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our sites and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
          </p>
          
          <h2 id="policy-for-children">6. Policy for Children</h2>
          <p>
            We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
          </p>

          <h2 id="contact-us">7. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us through the contact form available on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
