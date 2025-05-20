
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-montserrat">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none font-open">
          <p className="mb-4">
            Last Updated: May 20, 2025
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Agreement to Terms</h2>
          <p className="mb-4">
            These Terms of Service ("Terms") constitute a legally binding agreement between you and Advanced Charging 
            Systems and Integration ("ACS," "we," "us," or "our") regarding your access to and use of the website at 
            advancedchargingsystems.com and any related services provided by ACS.
          </p>
          <p className="mb-4">
            By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree 
            to these Terms, please do not access or use our website or services.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Use of Website</h2>
          <p className="mb-4">
            The content on our website is provided for general information purposes only. It is subject to change 
            without notice. While we strive to provide accurate information, we make no representations or warranties 
            of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability 
            of the website or the information, products, services, or related graphics contained on the website.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Intellectual Property</h2>
          <p className="mb-4">
            The website and its original content, features, and functionality are owned by ACS and are protected by 
            international copyright, trademark, patent, trade secret, and other intellectual property or proprietary 
            rights laws.
          </p>
          <p className="mb-4">
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, 
            republish, download, store, or transmit any of the material on our website without our prior written consent.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Service Descriptions</h2>
          <p className="mb-4">
            We make every effort to describe our services accurately on our website. However, we do not warrant that 
            service descriptions are accurate, complete, reliable, current, or error-free. All services are subject to 
            the terms of a separate service agreement that will be provided to you before any work begins.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall ACS, its directors, employees, partners, agents, suppliers, or affiliates be liable for 
            any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss 
            of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Your access to or use of or inability to access or use the website;</li>
            <li>Any conduct or content of any third party on the website;</li>
            <li>Any content obtained from the website; and</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content,</li>
          </ul>
          <p className="mb-4">
            Whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not 
            we have been informed of the possibility of such damage.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Indemnification</h2>
          <p className="mb-4">
            You agree to defend, indemnify, and hold harmless ACS, its directors, employees, partners, agents, suppliers, 
            or affiliates from and against any and all claims, liabilities, damages, losses, and expenses, including 
            reasonable attorneys' fees and costs, arising out of or in any way connected with your access to or use of 
            the website or services, your violation of these Terms, or your violation of any rights of a third party.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard 
            to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be 
            considered a waiver of those rights.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will 
            provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change 
            will be determined at our sole discretion.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Contact Information</h2>
          <p className="mb-4">
            If you have questions about these Terms, please contact us at:
          </p>
          <p className="mb-8">
            Email: <a href="mailto:legal@advancedchargingsystems.com" className="text-[#2E5090]">legal@advancedchargingsystems.com</a>
          </p>
          
          <div className="mt-12">
            <Link to="/" className="text-[#2E5090] hover:underline">Return to Home Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
