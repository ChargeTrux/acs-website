
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

  // Update hero images array with the newly uploaded images
  const heroImages = [
    "/lovable-uploads/f44323b2-008b-4dd8-b2c3-ec8b8421970b.png", // Add the new image first
    "/lovable-uploads/20cd42fc-a182-47ca-880a-cb52a88130fd.png",
    "/lovable-uploads/03d38454-e1de-437b-9182-5a42078c2c70.png",
    "/lovable-uploads/4bc6edba-cb37-4d73-823d-37c5a9def376.png",
    "/lovable-uploads/7357143d-f2ab-4ca4-a639-3800f5422163.png",
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

  // Preload images to ensure they display properly
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[700px] flex items-center justify-center bg-[#0A1A2F]">
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
                  opacity: 1
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
