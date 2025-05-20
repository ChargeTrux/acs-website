
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const TechnologySpotlight = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-3/5 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Flexible Power Integration</h2>
            <p className="text-gray-600 mb-4 font-open">
              Our adaptive power integration systems enable charging solutions that work with diverse electrical configurations. From standard grid connections to renewable sources, we design systems that optimize charging efficiency and minimize infrastructure costs.
            </p>
            <p className="text-gray-600 mb-8 font-open">
              We bring charging solutions to locations others write off as infeasible, with field-configurable power inputs from 240V single-phase to direct DC battery inputs.
            </p>
            <Button 
              asChild
              className="bg-[#00C65E] hover:bg-[#00B050] text-white font-semibold px-6 py-2 rounded-lg transition-all hover:scale-[1.02]"
            >
              <Link to="/technology" className="flex items-center">
                Learn More
                <ChevronRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
          <div className="lg:w-2/5 animate-on-scroll">
            <img 
              src="/lovable-uploads/db362e91-d255-48e0-8f48-cc18d5b74796.png" 
              alt="Flexible power integration with EV charging stations" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySpotlight;
