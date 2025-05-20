
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Technology = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 bg-brand-dark-green">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-light-text mb-6 font-montserrat">
            Technology Spotlight
          </h1>
          <p className="text-xl text-brand-light-text mb-8 max-w-3xl mx-auto font-open">
            Advanced Charging Systems leverages innovative technologies to create flexible, 
            efficient, and reliable EV charging solutions for diverse applications.
          </p>
        </div>
      </section>

      {/* Flexible Power Integration */}
      <section className="py-20 bg-brand-light-bg">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-montserrat text-brand-dark-text">
            Flexible Power Integration
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <p className="text-brand-dark-text mb-6 font-open">
                Our adaptive power integration systems enable charging solutions that work with diverse electrical 
                configurations. From standard grid connections to renewable sources, we design systems that optimize 
                charging efficiency and minimize infrastructure costs.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 font-montserrat text-brand-dark-text">Power Input Options:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Standard Grid Connection (3-phase 480V/208V)",
                  "Solar Integration with Battery Storage",
                  "Generator Backup Systems",
                  "Hybrid Power Management",
                  "Microgrid Integration",
                  "Vehicle-to-Grid (V2G) Capability"
                ].map((item, index) => (
                  <li key={index} className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                    <Zap className="mr-3 text-brand-light-green" size={22} />
                    <span className="text-brand-dark-text font-open">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-brand-dark-text mb-6 font-open">
                ACS specializes in managing complex power requirements, balancing loads across multiple charging stations, 
                and implementing smart charging solutions that adapt to changing conditions and demand.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/9254dc07-f6e6-452b-8fab-bf4ea76d6aa8.png" 
                alt="Solar-powered EV charging station with battery storage" 
                className="rounded-lg shadow-lg w-full border-4 border-white"
              />
              <p className="text-sm text-gray-500 mt-3 text-center font-open">
                Solar-powered EV charging station with integrated battery storage and grid connectivity
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-brand-card-green rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 font-montserrat text-brand-dark-text">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 font-montserrat text-brand-dark-green">Power Management</h4>
                <ul className="space-y-2">
                  {[
                    "Dynamic load balancing up to 500kW",
                    "Automated peak demand management",
                    "Remote power allocation control",
                    "Real-time power quality monitoring"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 text-brand-light-green mt-1" size={16} />
                      <span className="text-brand-dark-text font-open">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 font-montserrat text-brand-dark-green">System Compatibility</h4>
                <ul className="space-y-2">
                  {[
                    "All major EVSE protocols (OCPP 1.6/2.0)",
                    "Utility grid management interfaces",
                    "Solar and battery storage integration",
                    "Building management system connectivity"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 text-brand-light-green mt-1" size={16} />
                      <span className="text-brand-dark-text font-open">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-montserrat text-brand-dark-text">
            Case Study: Mobile Charging for Remote Construction Site
          </h2>
          
          <div className="bg-brand-light-bg p-8 rounded-lg shadow-lg mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-2">
                <h3 className="text-2xl font-semibold mb-4 font-montserrat text-brand-dark-text">The Challenge</h3>
                <p className="text-brand-dark-text mb-6 font-open">
                  A major construction company needed to power their growing fleet of electric equipment at a remote 
                  mountain site with limited grid access. The solution needed to be mobile, reliable in harsh conditions, 
                  and capable of charging multiple vehicles simultaneously.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4 font-montserrat text-brand-dark-text">Our Solution</h3>
                <p className="text-brand-dark-text mb-4 font-open">
                  ACS designed a custom mobile charging solution featuring:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Trailer-mounted 150kWh battery storage system",
                    "60kW solar array with tracking capability",
                    "20kW generator backup with intelligent activation",
                    "Four charging ports with dynamic load sharing",
                    "Satellite connectivity for remote monitoring and control",
                    "Reinforced design for all-weather operation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 text-brand-light-green mt-1" size={18} />
                      <span className="text-brand-dark-text font-open">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-brand-card-green p-6 rounded-lg shadow-md h-full">
                  <h3 className="text-xl font-semibold mb-4 text-center font-montserrat text-brand-dark-text">Results</h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-brand-light-green">75%</p>
                      <p className="text-brand-dark-text font-open">Reduction in Fossil Fuel Use</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-brand-light-green">4 Hours</p>
                      <p className="text-brand-dark-text font-open">Deployment Time</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-brand-light-green">$50,000</p>
                      <p className="text-brand-dark-text font-open">Annual Operating Cost Savings</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-brand-light-green">99.2%</p>
                      <p className="text-brand-dark-text font-open">System Reliability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              className="bg-brand-light-green hover:bg-brand-light-green/80 text-brand-light-text font-semibold px-8 py-3 rounded-lg text-lg transition-all"
            >
              <Link to="/contact" className="flex items-center justify-center">
                Discuss Your Custom Solution
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
