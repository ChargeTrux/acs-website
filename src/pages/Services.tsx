import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight, Clock, Zap, Settings, FileText, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Services = () => {
  // Scroll to section based on hash in URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 bg-[#0A1A2F]">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            Our Services
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-open">
            Advanced Charging Systems provides comprehensive EV charging infrastructure services 
            from initial concept through final commissioning. Our technology-agnostic approach 
            ensures you get the best solution for your specific needs.
          </p>
        </div>
      </section>

      {/* Infrastructure Design & Engineering */}
      <section id="infrastructure" className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-[#333333]">Infrastructure Design & Engineering</h2>
              <p className="text-gray-700 mb-6 font-open text-lg">
                Our engineering team specializes in creating efficient, future-proof electrical 
                infrastructure designs that optimize your charging deployment while minimizing costs.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 font-montserrat text-[#333333]">Key Services</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Switchgear and panel upgrades",
                  "Trenching, conduit, and transformer sizing",
                  "Site layout and single-line electrical diagrams",
                  "Permitting and utility interface"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-[#0075FF] font-bold text-lg">•</span>
                    <span className="text-gray-700 font-open">{item}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 font-montserrat text-[#333333]">Benefits</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Reduced implementation costs",
                  "Optimized power delivery",
                  "Future-proof expandability",
                  "Code-compliant installations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 text-[#00C65E] mt-1" size={20} />
                    <span className="text-gray-700 font-open">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                className="bg-[#0075FF] hover:bg-[#0060CC] text-white font-semibold px-6 py-2 rounded-lg transition-all transform hover:scale-102 mt-4"
              >
                <Link to="/contact" className="flex items-center">
                  Discuss Your Project
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-2/5">
              <img 
                src="/lovable-uploads/3a97560e-9856-4815-9e1a-c4e96eb07721.png" 
                alt="Infrastructure design and engineering for EV charging" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Charging System Integration */}
      <section id="integration" className="py-20 bg-[#F4F7FA]">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-[#333333]">Charging System Integration</h2>
              <p className="text-gray-700 mb-6 font-open text-lg">
                We integrate charging hardware, power sources, and management systems into cohesive 
                solutions that work flawlessly together.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 font-montserrat text-[#333333]">Key Services</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Design and deployment of DCFC and Level 2 systems",
                  "Technology-agnostic integration of chargers, BESS, inverters, and EMS",
                  "Stationary and off-grid mobile charging solutions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-[#0075FF] font-bold text-lg">•</span>
                    <span className="text-gray-700 font-open">{item}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 font-montserrat text-[#333333]">Benefits</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Vendor-agnostic recommendations",
                  "Optimized system performance",
                  "Flexible power options",
                  "Turnkey implementation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 text-[#00C65E] mt-1" size={20} />
                    <span className="text-gray-700 font-open">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                className="bg-[#0075FF] hover:bg-[#0060CC] text-white font-semibold px-6 py-2 rounded-lg transition-all transform hover:scale-102 mt-4"
              >
                <Link to="/contact" className="flex items-center">
                  Explore Solutions
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-2/5">
              <img 
                src="/lovable-uploads/393e2835-59cc-41b2-866e-0468cb039bb9.png" 
                alt="Charging system integration services" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contractor & Vendor Oversight */}
      <section id="contractor" className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-[#333333]">Contractor & Vendor Oversight</h2>
              <p className="text-gray-700 mb-6 font-open text-lg">
                Let ACS manage the complex web of contractors, vendors, and logistics to ensure 
                your charging project stays on schedule and on budget.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 font-montserrat text-[#333333]">Key Services</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Management of 3rd-party electricians, contractors, and civil trades",
                  "Procurement support for battery packs, chargers, and mounting systems",
                  "Coordination across delivery schedules, incentives, and commissioning"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-[#0075FF] font-bold text-lg">•</span>
                    <span className="text-gray-700 font-open">{item}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 font-montserrat text-[#333333]">Benefits</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Single point of contact",
                  "Reduced project complexity",
                  "Vendor accountability",
                  "Streamlined communications"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 text-[#00C65E] mt-1" size={20} />
                    <span className="text-gray-700 font-open">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                className="bg-[#0075FF] hover:bg-[#0060CC] text-white font-semibold px-6 py-2 rounded-lg transition-all transform hover:scale-102 mt-4"
              >
                <Link to="/contact" className="flex items-center">
                  Simplify Your Project
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-2/5">
              <img 
                src="/lovable-uploads/2511b416-fe8c-41ea-b083-db8cf5daf481.png" 
                alt="Contractor and vendor oversight for EV charging projects" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Utility & Compliance Management */}
      <section id="compliance" className="py-20 bg-[#F4F7FA]">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-[#333333]">Utility & Compliance Management</h2>
              <p className="text-gray-700 mb-6 font-open text-lg">
                Navigate the complex landscape of utility requirements, permits, and incentive 
                programs with our experienced compliance team.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 font-montserrat text-[#333333]">Key Services</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Load calculations and utility applications",
                  "Permitting and service panel approvals",
                  "NEVI, LCFS, and state/federal funding alignment"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-[#0075FF] font-bold text-lg">•</span>
                    <span className="text-gray-700 font-open">{item}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 font-montserrat text-[#333333]">Benefits</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Maximized incentives",
                  "Accelerated approvals",
                  "Reduced paperwork burden",
                  "Regulatory confidence"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 text-[#00C65E] mt-1" size={20} />
                    <span className="text-gray-700 font-open">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                className="bg-[#0075FF] hover:bg-[#0060CC] text-white font-semibold px-6 py-2 rounded-lg transition-all transform hover:scale-102 mt-4"
              >
                <Link to="/contact" className="flex items-center">
                  Ensure Compliance
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-2/5">
              <img 
                src="/lovable-uploads/5387b306-1722-405a-b522-1b9477c93dd5.png" 
                alt="Utility and compliance management for EV charging" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat text-[#333333]">
            Our Implementation Process
          </h2>
          
          <div className="relative">
            {/* Timeline line - visible only on md and larger screens */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#DEDEDE] -translate-y-1/2 z-0"></div>
            
            {/* Timeline steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {[
                {
                  step: 1,
                  title: "Site Assessment & Requirements",
                  icon: <Settings className="mb-2" />,
                  description: "Comprehensive evaluation of your site's electrical capacity and needs."
                },
                {
                  step: 2,
                  title: "System Design & Engineering",
                  icon: <FileText className="mb-2" />,
                  description: "Creation of detailed plans and specifications tailored to your requirements."
                },
                {
                  step: 3,
                  title: "Permitting & Procurement",
                  icon: <FileText className="mb-2" />,
                  description: "Management of all required permits and equipment ordering."
                },
                {
                  step: 4,
                  title: "Installation & Integration",
                  icon: <Wrench className="mb-2" />,
                  description: "Professional installation and system integration by certified experts."
                },
                {
                  step: 5,
                  title: "Testing & Commissioning",
                  icon: <Zap className="mb-2" />,
                  description: "Thorough verification of all components and operational testing."
                },
                {
                  step: 6,
                  title: "Ongoing Support",
                  icon: <Clock className="mb-2" />,
                  description: "Continuous monitoring and support to ensure optimal performance."
                }
              ].map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center animate-fade-in">
                  <div className="bg-[#0075FF] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-lg font-semibold">{step.step}</span>
                  </div>
                  <div className="text-[#0075FF] mb-2">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center font-montserrat text-[#333333]">{step.title}</h3>
                  <p className="text-gray-600 text-center font-open">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-16">
            <Button 
              asChild
              className="bg-[#0075FF] hover:bg-[#0060CC] text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all transform hover:scale-102"
            >
              <Link to="/contact" className="flex items-center">
                Start Your Project
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
