
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Zap } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    "Fleet & Logistics Hubs",
    "Rental Car Yards",
    "Commercial Real Estate",
    "Utilities & Municipal Projects",
    "Mobile/Off-Grid Solutions",
    "Investment Groups"
  ];

  return (
    <section className="py-20 bg-[#F4F7FA]">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat animate-on-scroll">
          Powering Diverse Industries
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col items-center hover:scale-105 transition-all animate-on-scroll">
              <div className="p-4 rounded-full bg-[#0075FF] text-white mb-3">
                <Zap size={28} />
              </div>
              <p className="text-center font-semibold font-montserrat">{industry}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            asChild
            className="bg-[#00C65E] hover:bg-[#00B050] text-white font-semibold px-6 py-2 rounded-lg transition-all hover:scale-[1.02]"
          >
            <Link to="/industries" className="flex items-center">
              View Industries
              <ChevronRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
