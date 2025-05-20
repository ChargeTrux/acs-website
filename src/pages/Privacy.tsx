
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-montserrat">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none font-open">
          <p className="mb-4">
            Last Updated: May 20, 2025
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Introduction</h2>
          <p className="mb-4">
            Advanced Charging Systems and Integration ("ACS," "we," "us," or "our") respects your privacy and is committed 
            to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and 
            safeguard your information when you visit our website or use our services.
          </p>
          <p className="mb-4">
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
            please do not access the website or use our services.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Information We Collect</h2>
          <p className="mb-4">We may collect information about you in a variety of ways including:</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 font-montserrat">Personal Information</h3>
          <p className="mb-4">
            When you visit our website or use our services, we may collect personal information that you voluntarily 
            provide, such as your name, email address, phone number, company name, and other contact details. This 
            typically occurs when you fill out forms, request information, or register for services.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 font-montserrat">Automatically Collected Information</h3>
          <p className="mb-4">
            When you access our website, we may automatically collect certain information about your device and usage 
            patterns. This may include your IP address, browser type, operating system, referring URLs, device information, 
            pages visited, links clicked, and other browsing information.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">How We Use Your Information</h2>
          <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide, operate, and maintain our services</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Understand and analyze how you use our services</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you about our services, updates, and other information</li>
            <li>Process transactions and send related information</li>
            <li>Find and prevent fraud or other unauthorized or illegal activities</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Disclosure of Your Information</h2>
          <p className="mb-4">
            We may share information we have collected about you in certain situations, including:
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 font-montserrat">Business Transfers</h3>
          <p className="mb-4">
            If we are involved in a merger, acquisition, financing, or sale of assets, your information may be 
            transferred as part of that transaction. We will notify you via email and/or a prominent notice on our 
            website of any change in ownership or uses of your personal information.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 font-montserrat">Compliance with Laws</h3>
          <p className="mb-4">
            We may disclose your information where required to do so by law or if we believe that such action is 
            necessary to comply with legal obligations, protect our rights, or investigate potential violations of 
            our Terms of Service.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Security of Your Information</h2>
          <p className="mb-4">
            We use administrative, technical, and physical security measures to protect your personal information. 
            While we have taken reasonable steps to secure the information you provide to us, please be aware that 
            no security measures are perfect or impenetrable, and we cannot guarantee the security of your information.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 font-montserrat">Contact Information</h2>
          <p className="mb-4">
            If you have questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-8">
            Email: <a href="mailto:privacy@advancedchargingsystems.com" className="text-[#2E5090]">privacy@advancedchargingsystems.com</a>
          </p>
          
          <div className="mt-12">
            <Link to="/" className="text-[#2E5090] hover:underline">Return to Home Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
