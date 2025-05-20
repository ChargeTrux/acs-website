
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A1A2F] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 - Logo and Description */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/0123177a-d92d-43da-9086-fefb9a3c6dce.png" 
                alt="Advanced Charging Systems Logo" 
                className="h-44" 
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat text-white">Connecting Power to Possibility</h3>
            <p className="text-gray-300 mb-6 font-open">
              Advanced Charging Systems delivers comprehensive EV charging solutions for commercial and fleet applications, optimizing performance through expert design and implementation.
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-montserrat">Quick Links</h3>
            <ul className="space-y-2 font-open">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/industries" className="text-gray-300 hover:text-white transition-colors">Industries We Serve</Link></li>
              <li><Link to="/technology" className="text-gray-300 hover:text-white transition-colors">Technology Spotlight</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-montserrat">Contact Information</h3>
            <ul className="space-y-4 font-open">
              <li className="flex items-center">
                <Mail className="mr-2 text-[#00C65E]" size={18} />
                <a href="mailto:info@advancedchargingsystems.com" className="text-gray-300 hover:text-white transition-colors">
                  info@advancedchargingsystems.com
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin className="mr-2 text-[#00C65E]" size={18} />
                <a href="https://linkedin.com/company/advanced-charging-systems" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 text-[#00C65E] mt-1" size={18} />
                <span className="text-gray-300">
                  Serving major metropolitan areas across the West Coast, Gulf Coast & Southwest, and East Coast & Southeast regions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <Separator className="bg-gray-700" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-open">
            © 2025 Advanced Charging Systems and Integration. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors font-open">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors font-open">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
