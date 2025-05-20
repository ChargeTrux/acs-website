
import React from "react";
import { Check } from "lucide-react";

const ServiceAreas = () => {
  const regions = [
    {
      name: "West Coast",
      cities: [
        'Seattle', 'Portland', 'San Francisco', 'Oakland', 
        'San Jose', 'Los Angeles', 'Orange County', 'San Diego'
      ]
    },
    {
      name: "Gulf Coast & Southwest",
      cities: [
        'Phoenix', 'Albuquerque', 'Dallas', 'Houston', 
        'Austin', 'San Antonio', 'New Orleans', 'Tampa', 'Orlando'
      ]
    },
    {
      name: "East Coast & Southeast",
      cities: [
        'Atlanta', 'Charlotte', 'Raleigh', 'Norfolk', 
        'Washington DC', 'Baltimore', 'Philadelphia', 'New York', 'Boston'
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#0A1A2F]">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white font-montserrat animate-on-scroll">Service Areas</h2>
        <p className="text-xl text-center text-white mb-12 max-w-3xl mx-auto font-open animate-on-scroll">
          Advanced Charging Systems currently services major metropolitan areas across the United States, with rapid expansion plans underway.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <div key={index} className="animate-on-scroll">
              <h3 className="flex items-center text-xl font-semibold text-[#00C65E] mb-4 font-montserrat">
                <Check className="mr-2" /> {region.name}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {region.cities.map((city) => (
                  <div key={city} className="bg-[#132A47] text-white py-1 px-3 rounded-full text-center font-open">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-white mt-12 font-open animate-on-scroll">
          Planning to deploy EVs in other locations? Let us know—we're expanding rapidly!
        </p>
      </div>
    </section>
  );
};

export default ServiceAreas;
