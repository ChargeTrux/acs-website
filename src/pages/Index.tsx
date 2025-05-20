
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import TechnologySpotlight from "@/components/home/TechnologySpotlight";
import IndustriesSection from "@/components/home/IndustriesSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import ServiceAreas from "@/components/home/ServiceAreas";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Index = () => {
  // Initialize scroll animation hook
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <TechnologySpotlight />
      <IndustriesSection />
      <StatisticsSection />
      <ServiceAreas />
    </div>
  );
};

export default Index;
