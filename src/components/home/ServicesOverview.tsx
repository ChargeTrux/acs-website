
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight, Zap } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      title: "Infrastructure Design & Engineering",
      description: "Custom electrical design and site planning for optimal charging capacity and efficiency."
    },
    {
      title: "Charging System Integration",
      description: "Seamless integration of charging hardware, software and power management systems."
    },
    {
      title: "Contractor & Vendor Oversight",
      description: "Expert coordination of installation and maintenance contractors for quality assurance."
    },
    {
      title: "Utility & Compliance Management",
      description: "Complete handling of utility connections, permits and regulatory compliance requirements."
    }
  ];

  return (
    <section className="py-20 bg-[#F4F7FA]">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat animate-on-scroll">
          Comprehensive EV Charging Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#0075FF] text-white">
                    <Zap size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">{service.title}</h3>
                <p className="text-gray-600 text-center font-open">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            asChild
            className="bg-[#00C65E] hover:bg-[#00B050] text-white font-semibold px-6 py-2 rounded-lg transition-all hover:scale-[1.02]"
          >
            <Link to="/services" className="flex items-center">
              Explore Our Services
              <ChevronRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
