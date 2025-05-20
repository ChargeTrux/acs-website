
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 bg-[#1E2838]">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            Our Services
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-open">
            Advanced Charging Systems and Integration delivers comprehensive end-to-end EV charging solutions 
            tailored to your specific business needs and technical requirements.
          </p>
        </div>
      </section>

      {/* Infrastructure Design & Engineering */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Infrastructure Design & Engineering</h2>
              <p className="text-gray-600 mb-4 font-open">
                Our design and engineering team specializes in creating optimal charging infrastructure plans that 
                maximize efficiency while minimizing costs. We provide comprehensive electrical designs that account 
                for present needs and future scaling requirements.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 font-montserrat">Our approach includes:</h3>
              <ul className="space-y-2 mb-8">
                {[
                  "Site assessments and electrical capacity evaluations",
                  "Custom electrical design for optimal power distribution",
                  "Load management system design and configuration",
                  "Future-proof infrastructure planning",
                  "Detailed technical specifications and schematics"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 text-[#388F72] mt-1" size={18} />
                    <span className="text-gray-600 font-open">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                className="bg-[#388F72] hover:bg-[#2A7A62] text-white font-semibold px-6 py-2 rounded-lg transition-all"
              >
                <Link to="/contact" className="flex items-center">
                  Request Infrastructure Consultation
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/image2.jpg" 
                alt="Infrastructure design and engineering for EV charging" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Charging System Integration */}
      <section className="py-20 bg-[#DEDEDE]">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Charging System Integration</h2>
              <p className="text-gray-600 mb-4 font-open">
                We specialize in seamless integration of charging hardware, software, and power management systems to create 
                a cohesive charging solution that delivers reliable performance and user-friendly operation.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 font-montserrat">Integration services include:</h3>
              <ul className="space-y-2 mb-8">
                {[
                  "Hardware selection and implementation based on specific needs",
                  "Software configuration and network connectivity setup",
                  "Payment system integration and testing",
                  "Power management system implementation",
                  "User interface customization and branding"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 text-[#388F72] mt-1" size={18} />
                    <span className="text-gray-600 font-open">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                className="bg-[#388F72] hover:bg-[#2A7A62] text-white font-semibold px-6 py-2 rounded-lg transition-all"
              >
                <Link to="/contact" className="flex items-center">
                  Discuss Integration Needs
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/image3.jpg" 
                alt="Charging system integration services" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contractor & Vendor Oversight */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Contractor & Vendor Oversight</h2>
              <p className="text-gray-600 mb-4 font-open">
                Our project management team coordinates all aspects of installation and maintenance, ensuring quality 
                workmanship and adherence to project specifications, timelines, and budgets.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 font-montserrat">Our oversight includes:</h3>
              <ul className="space-y-2 mb-8">
                {[
                  "Contractor selection and qualification",
                  "Installation quality assurance and inspection",
                  "Vendor coordination and deliverable management",
                  "Schedule management and milestone tracking",
                  "Budget oversight and cost control"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 text-[#388F72] mt-1" size={18} />
                    <span className="text-gray-600 font-open">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                className="bg-[#388F72] hover:bg-[#2A7A62] text-white font-semibold px-6 py-2 rounded-lg transition-all"
              >
                <Link to="/contact" className="flex items-center">
                  Learn About Project Management
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/image4.jpg" 
                alt="Contractor and vendor oversight for EV charging projects" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Utility & Compliance Management */}
      <section className="py-20 bg-[#DEDEDE]">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Utility & Compliance Management</h2>
              <p className="text-gray-600 mb-4 font-open">
                We handle all aspects of utility coordination, permitting, and regulatory compliance to ensure your 
                charging infrastructure meets all legal requirements and operates within applicable regulations.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 font-montserrat">Compliance services include:</h3>
              <ul className="space-y-2 mb-8">
                {[
                  "Utility coordination and service applications",
                  "Permit acquisition and inspection scheduling",
                  "Regulatory compliance documentation",
                  "Incentive and rebate application assistance",
                  "Ongoing compliance monitoring and reporting"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 text-[#388F72] mt-1" size={18} />
                    <span className="text-gray-600 font-open">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                className="bg-[#388F72] hover:bg-[#2A7A62] text-white font-semibold px-6 py-2 rounded-lg transition-all"
              >
                <Link to="/contact" className="flex items-center">
                  Discuss Compliance Requirements
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/image5.jpg" 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat">
            Our Project Process
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#DEDEDE] -translate-y-1/2 z-0"></div>
            
            {/* Timeline steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {[
                {
                  step: 1,
                  title: "Consultation",
                  description: "Initial discussion about project goals, site requirements, and technical needs."
                },
                {
                  step: 2,
                  title: "Assessment",
                  description: "Detailed site evaluation and electrical capacity analysis."
                },
                {
                  step: 3,
                  title: "Design",
                  description: "Creation of custom charging infrastructure plans and specifications."
                },
                {
                  step: 4,
                  title: "Permitting",
                  description: "Management of all regulatory approvals and utility coordination."
                },
                {
                  step: 5,
                  title: "Installation",
                  description: "Coordinated implementation with quality assurance oversight."
                },
                {
                  step: 6,
                  title: "Activation",
                  description: "System testing, commissioning, and handover to operations."
                }
              ].map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center">
                  <div className="bg-[#2E5090] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-lg font-semibold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center font-montserrat">{step.title}</h3>
                  <p className="text-gray-600 text-center font-open">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-16">
            <Button 
              asChild
              className="bg-[#388F72] hover:bg-[#2A7A62] text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all"
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
