
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Hero images array
  const heroImages = [
    "/lovable-uploads/edf50425-4a8c-40ae-9d10-f8164067b6b6.png",
    "/lovable-uploads/c269ac45-4010-4f11-b689-f86fd961c3ee.png",
    "/lovable-uploads/9e8327a7-be64-46a3-a16c-2a1c0f3b1857.png",
    "/lovable-uploads/0489b82a-0392-4f4b-bc9c-6f60f2a335cb.png",
    "/lovable-uploads/6026693b-c901-4760-ae1e-775b17a711ea.png",
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-advance the carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#0A1A2F]">
      <Carousel
        setApi={setApi}
        className="w-full h-full absolute inset-0"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full" 
                style={{ 
                  backgroundImage: `url(${image})`,
                  opacity: 0.7
                }} 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute left-4 z-30 bg-[#0075FF]/80 hover:bg-[#0075FF] text-white border-none" />
        <CarouselNext className="absolute right-4 z-30 bg-[#0075FF]/80 hover:bg-[#0075FF] text-white border-none" />
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </Carousel>
      
      <div className="container relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-montserrat">
          Connecting Power to Possibility
        </h1>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-open">
          Advanced Charging Systems and Integration delivers end-to-end consulting, design, and system integration for commercial and fleet EV charging infrastructure—both on-grid and off-grid.
        </p>
        <Button 
          asChild
          className="bg-[#0075FF] hover:bg-[#0066DD] text-white font-semibold px-6 py-3 rounded-lg text-lg transition-all hover:scale-[1.02]"
        >
          <Link to="/contact">Request a Consultation</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
