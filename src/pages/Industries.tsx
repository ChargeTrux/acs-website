
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Industries = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 bg-[#1E2838]">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            Industries We Serve
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-open">
            Advanced Charging Systems designs and implements charging solutions optimized for the unique requirements 
            of various industries, addressing specific operational needs and challenges.
          </p>
        </div>
      </section>

      {/* Fleet & Logistics Hubs */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Fleet & Logistics Hubs</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#2E5090]">Challenges</h3>
                <ul className="space-y-2">
                  {[
                    "Managing high-volume charging for multiple vehicles simultaneously",
                    "Ensuring consistent uptime for critical delivery schedules",
                    "Balancing power loads during peak charging periods",
                    "Tracking vehicle charging status and energy consumption"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 text-[#388F72] mt-1" size={18} />
                      <span className="text-gray-600 font-open">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#2E5090]">ACS Solution</h3>
                <p className="text-gray-600 mb-4 font-open">
                  Our fleet charging solutions feature intelligent load management, redundant power systems, and 
                  comprehensive monitoring software to ensure your electric vehicles are always ready for deployment.
                </p>
              </div>
              
              <div className="p-4 bg-[#DEDEDE] rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2 font-montserrat text-[#2E5090]">Success Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center p-3">
                    <p className="text-2xl font-bold text-[#388F72]">98%</p>
                    <p className="text-sm text-gray-600 font-open">Charging Reliability</p>
                  </div>
                  <div className="text-center p-3">
                    <p className="text-2xl font-bold text-[#388F72]">30%</p>
                    <p className="text-sm text-gray-600 font-open">Lower Operating Costs</p>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild
                className="bg-[#2E5090] hover:bg-[#254580] text-white font-semibold px-6 py-2 rounded-lg transition-all"
              >
                <Link to="/contact" className="flex items-center">
                  Request Fleet Solution
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/image6.jpg" 
                alt="Fleet and logistics hubs EV charging solutions" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rental Car Yards */}
      <section className="py-20 bg-[#DEDEDE]">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Rental Car Yards</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#2E5090]">Challenges</h3>
                <ul className="space-y-2">
                  {[
                    "Rapid turnaround charging for vehicle rental readiness",
                    "Managing varied charging needs for diverse EV models",
                    "Efficient space utilization in crowded lots",
                    "Tracking charging costs per vehicle for accounting"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 text-[#388F72] mt-1" size={18} />
                      <span className="text-gray-600 font-open">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#2E5090]">ACS Solution</h3>
                <p className="text-gray-600 mb-4 font-open">
                  Our rental yard solutions include multi-standard chargers compatible with all EV models, space-efficient 
                  layouts, and integrated management software that tracks charging status and costs.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2 font-montserrat text-[#2E5090]">Success Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center p-3">
                    <p className="text-2xl font-bold text-[#388F72]">3x</p>
                    <p className="text-sm text-gray-600 font-open">Faster Vehicle Turnaround</p>
                  </div>
                  <div className="text-center p-3">
                    <p className="text-2xl font-bold text-[#388F72]">25%</p>
                    <p className="text-sm text-gray-600 font-open">Space Optimization</p>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild
                className="bg-[#2E5090] hover:bg-[#254580] text-white font-semibold px-6 py-2 rounded-lg transition-all"
              >
                <Link to="/contact" className="flex items-center">
                  Request Rental Yard Solution
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/image7.jpg" 
                alt="Rental car yard EV charging solutions" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Real Estate */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Commercial Real Estate</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#2E5090]">Challenges</h3>
                <ul className="space-y-2">
                  {[
                    "Integrating charging with existing parking infrastructure",
                    "Balancing charging access with general parking needs",
                    "Managing user access and payment processing",
                    "Adapting to varying tenant and visitor requirements"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 text-[#388F72] mt-1" size={18} />
                      <span className="text-gray-600 font-open">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#2E5090]">ACS Solution</h3>
                <p className="text-gray-600 mb-4 font-open">
                  Our commercial property solutions include customizable access control systems, flexible payment options, 
                  and scalable designs that grow with increasing EV adoption among tenants and visitors.
                </p>
              </div>
              
              <div className="p-4 bg-[#DEDEDE] rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2 font-montserrat text-[#2E5090]">Success Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center p-3">
                    <p className="text-2xl font-bold text-[#388F72]">40%</p>
                    <p className="text-sm text-gray-600 font-open">Increased Property Value</p>
                  </div>
                  <div className="text-center p-3">
                    <p className="text-2xl font-bold text-[#388F72]">85%</p>
                    <p className="text-sm text-gray-600 font-open">Tenant Satisfaction</p>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild
                className="bg-[#2E5090] hover:bg-[#254580] text-white font-semibold px-6 py-2 rounded-lg transition-all"
              >
                <Link to="/contact" className="flex items-center">
                  Commercial Property Solutions
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/image8.jpg" 
                alt="Commercial real estate EV charging solutions" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Utilities & Municipal Projects */}
      <section className="py-20 bg-[#DEDEDE]">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Utilities & Municipal Projects</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#2E5090]">Challenges</h3>
                <ul className="space-y-2">
                  {[
                    "Meeting requirements for public infrastructure projects",
                    "Managing grid impact in residential and urban areas",
                    "Ensuring ADA compliance and public accessibility",
                    "Coordinating with multiple municipal departments and agencies"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 text-[#388F72] mt-1" size={18} />
                      <span className="text-gray-600 font-open">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#2E5090]">ACS Solution</h3>
                <p className="text-gray-600 mb-4 font-open">
                  Our utility and municipal solutions include grid impact analysis, compliance-focused designs, and 
                  comprehensive project coordination services to navigate complex approval processes.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2 font-montserrat text-[#2E5090]">Success Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center p-3">
                    <p className="text-2xl font-bold text-[#388F72]">100%</p>
                    <p className="text-sm text-gray-600 font-open">Compliance Rate</p>
                  </div>
                  <div className="text-center p-3">
                    <p className="text-2xl font-bold text-[#388F72]">45%</p>
                    <p className="text-sm text-gray-600 font-open">Faster Approval Process</p>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild
                className="bg-[#2E5090] hover:bg-[#254580] text-white font-semibold px-6 py-2 rounded-lg transition-all"
              >
                <Link to="/contact" className="flex items-center">
                  Public Infrastructure Solutions
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/image-municipal.jpg" 
                alt="Utilities and municipal EV charging projects" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile/Off-Grid Solutions */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Mobile/Off-Grid Solutions</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#2E5090]">Challenges</h3>
                <ul className="space-y-2">
                  {[
                    "Providing charging in locations without grid access",
                    "Ensuring reliable power in remote or temporary locations",
                    "Managing renewable energy integration and storage",
                    "Designing for transportability and rapid deployment"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 text-[#388F72] mt-1" size={18} />
                      <span className="text-gray-600 font-open">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#2E5090]">ACS Solution</h3>
                <p className="text-gray-600 mb-4 font-open">
                  Our mobile and off-grid solutions incorporate battery storage systems, solar integration options, 
                  and rugged designs suitable for remote sites, events, and emergency response applications.
                </p>
              </div>
              
              <div className="p-4 bg-[#DEDEDE] rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2 font-montserrat text-[#2E5090]">Success Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center p-3">
                    <p className="text-2xl font-bold text-[#388F72]">4-72</p>
                    <p className="text-sm text-gray-600 font-open">Hour Deployment Time</p>
                  </div>
                  <div className="text-center p-3">
                    <p className="text-2xl font-bold text-[#388F72]">60%</p>
                    <p className="text-sm text-gray-600 font-open">Solar Energy Utilization</p>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild
                className="bg-[#2E5090] hover:bg-[#254580] text-white font-semibold px-6 py-2 rounded-lg transition-all"
              >
                <Link to="/contact" className="flex items-center">
                  Mobile Charging Solutions
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/image9.jpg" 
                alt="Mobile and off-grid EV charging solutions" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Groups */}
      <section className="py-20 bg-[#DEDEDE]">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Investment Groups</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#2E5090]">Challenges</h3>
                <ul className="space-y-2">
                  {[
                    "Identifying high-potential charging infrastructure locations",
                    "Maximizing ROI on charging network investments",
                    "Developing sustainable business models for charging operations",
                    "Creating scalable deployment strategies across multiple sites"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 text-[#388F72] mt-1" size={18} />
                      <span className="text-gray-600 font-open">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#2E5090]">ACS Solution</h3>
                <p className="text-gray-600 mb-4 font-open">
                  Our investment-focused solutions include location analysis, revenue modeling, operational strategy 
                  development, and phased deployment plans that optimize capital utilization.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2 font-montserrat text-[#2E5090]">Success Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center p-3">
                    <p className="text-2xl font-bold text-[#388F72]">20%</p>
                    <p className="text-sm text-gray-600 font-open">Higher Utilization Rate</p>
                  </div>
                  <div className="text-center p-3">
                    <p className="text-2xl font-bold text-[#388F72]">3-5yr</p>
                    <p className="text-sm text-gray-600 font-open">Average ROI Timeline</p>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild
                className="bg-[#2E5090] hover:bg-[#254580] text-white font-semibold px-6 py-2 rounded-lg transition-all"
              >
                <Link to="/contact" className="flex items-center">
                  Investment Opportunity Analysis
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/image-investment.jpg" 
                alt="Investment group EV charging solutions" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
