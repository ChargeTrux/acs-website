
import React from "react";

const StatisticsSection = () => {
  const stats = [
    {
      value: "100+",
      label: "Projects Completed"
    },
    {
      value: "15+",
      label: "MW of Charging Power Deployed"
    },
    {
      value: "50+",
      label: "Fleet Vehicles Supported"
    },
    {
      value: "30+",
      label: "Partners & Vendors"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-on-scroll">
              <p className="text-5xl font-bold text-[#0A1A2F] mb-2 font-montserrat">{stat.value}</p>
              <p className="text-xl text-gray-700 font-open">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
