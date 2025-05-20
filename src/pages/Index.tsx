import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronRight, MapPin, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Simple scroll animation for elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll(".animate-on-scroll").forEach(element => {
      element.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-500", "ease-out");
      observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - with reduced height */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-[#0A1A2F]">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/2793a0c1-4ab9-4474-bb94-74bf6d812a08.png')] bg-cover bg-center opacity-60 bg-no-repeat"></div>
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

      {/* Services Overview Section */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat animate-on-scroll">
            Comprehensive EV Charging Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#0075FF] text-white">
                    <Zap size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Infrastructure Design & Engineering</h3>
                <p className="text-gray-600 text-center font-open">
                  Custom electrical design and site planning for optimal charging capacity and efficiency.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#0075FF] text-white">
                    <Zap size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Charging System Integration</h3>
                <p className="text-gray-600 text-center font-open">
                  Seamless integration of charging hardware, software and power management systems.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#0075FF] text-white">
                    <Zap size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Contractor & Vendor Oversight</h3>
                <p className="text-gray-600 text-center font-open">
                  Expert coordination of installation and maintenance contractors for quality assurance.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 4 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#0075FF] text-white">
                    <Zap size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Utility & Compliance Management</h3>
                <p className="text-gray-600 text-center font-open">
                  Complete handling of utility connections, permits and regulatory compliance requirements.
                </p>
              </CardContent>
            </Card>
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

      {/* Technology Spotlight Preview */}
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

      {/* Industries Section */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat animate-on-scroll">
            Powering Diverse Industries
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Industry 1 */}
            <div className="flex flex-col items-center hover:scale-105 transition-all animate-on-scroll">
              <div className="p-4 rounded-full bg-[#0075FF] text-white mb-3">
                <Zap size={28} />
              </div>
              <p className="text-center font-semibold font-montserrat">Fleet & Logistics Hubs</p>
            </div>

            {/* Industry 2 */}
            <div className="flex flex-col items-center hover:scale-105 transition-all animate-on-scroll">
              <div className="p-4 rounded-full bg-[#0075FF] text-white mb-3">
                <Zap size={28} />
              </div>
              <p className="text-center font-semibold font-montserrat">Rental Car Yards</p>
            </div>

            {/* Industry 3 */}
            <div className="flex flex-col items-center hover:scale-105 transition-all animate-on-scroll">
              <div className="p-4 rounded-full bg-[#0075FF] text-white mb-3">
                <Zap size={28} />
              </div>
              <p className="text-center font-semibold font-montserrat">Commercial Real Estate</p>
            </div>

            {/* Industry 4 */}
            <div className="flex flex-col items-center hover:scale-105 transition-all animate-on-scroll">
              <div className="p-4 rounded-full bg-[#0075FF] text-white mb-3">
                <Zap size={28} />
              </div>
              <p className="text-center font-semibold font-montserrat">Utilities & Municipal Projects</p>
            </div>

            {/* Industry 5 */}
            <div className="flex flex-col items-center hover:scale-105 transition-all animate-on-scroll">
              <div className="p-4 rounded-full bg-[#0075FF] text-white mb-3">
                <Zap size={28} />
              </div>
              <p className="text-center font-semibold font-montserrat">Mobile/Off-Grid Solutions</p>
            </div>

            {/* Industry 6 */}
            <div className="flex flex-col items-center hover:scale-105 transition-all animate-on-scroll">
              <div className="p-4 rounded-full bg-[#0075FF] text-white mb-3">
                <Zap size={28} />
              </div>
              <p className="text-center font-semibold font-montserrat">Investment Groups</p>
            </div>
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

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Statistic 1 */}
            <div className="text-center animate-on-scroll">
              <p className="text-5xl font-bold text-[#0A1A2F] mb-2 font-montserrat">100+</p>
              <p className="text-xl text-gray-700 font-open">Projects Completed</p>
            </div>
            
            {/* Statistic 2 */}
            <div className="text-center animate-on-scroll">
              <p className="text-5xl font-bold text-[#0A1A2F] mb-2 font-montserrat">15+</p>
              <p className="text-xl text-gray-700 font-open">MW of Charging Power Deployed</p>
            </div>
            
            {/* Statistic 3 */}
            <div className="text-center animate-on-scroll">
              <p className="text-5xl font-bold text-[#0A1A2F] mb-2 font-montserrat">50+</p>
              <p className="text-xl text-gray-700 font-open">Fleet Vehicles Supported</p>
            </div>
            
            {/* Statistic 4 */}
            <div className="text-center animate-on-scroll">
              <p className="text-5xl font-bold text-[#0A1A2F] mb-2 font-montserrat">30+</p>
              <p className="text-xl text-gray-700 font-open">Partners & Vendors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-[#0A1A2F]">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white font-montserrat animate-on-scroll">Service Areas</h2>
          <p className="text-xl text-center text-white mb-12 max-w-3xl mx-auto font-open animate-on-scroll">
            Advanced Charging Systems currently services major metropolitan areas across the United States, with rapid expansion plans underway.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* West Coast */}
            <div className="animate-on-scroll">
              <h3 className="flex items-center text-xl font-semibold text-[#00C65E] mb-4 font-montserrat">
                <Check className="mr-2" /> West Coast
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Seattle', 'Portland', 'San Francisco', 'Oakland', 
                  'San Jose', 'Los Angeles', 'Orange County', 'San Diego'
                ].map((city) => (
                  <div key={city} className="bg-[#132A47] text-white py-1 px-3 rounded-full text-center font-open">
                    {city}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gulf Coast & Southwest */}
            <div className="animate-on-scroll">
              <h3 className="flex items-center text-xl font-semibold text-[#00C65E] mb-4 font-montserrat">
                <Check className="mr-2" /> Gulf Coast & Southwest
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Phoenix', 'Albuquerque', 'Dallas', 'Houston', 
                  'Austin', 'San Antonio', 'New Orleans', 'Tampa', 'Orlando'
                ].map((city) => (
                  <div key={city} className="bg-[#132A47] text-white py-1 px-3 rounded-full text-center font-open">
                    {city}
                  </div>
                ))}
              </div>
            </div>
            
            {/* East Coast & Southeast */}
            <div className="animate-on-scroll">
              <h3 className="flex items-center text-xl font-semibold text-[#00C65E] mb-4 font-montserrat">
                <Check className="mr-2" /> East Coast & Southeast
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Atlanta', 'Charlotte', 'Raleigh', 'Norfolk', 
                  'Washington DC', 'Baltimore', 'Philadelphia', 'New York', 'Boston'
                ].map((city) => (
                  <div key={city} className="bg-[#132A47] text-white py-1 px-3 rounded-full text-center font-open">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-center text-white mt-12 font-open animate-on-scroll">
            Planning to deploy EVs in other locations? Let us know—we're expanding rapidly!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
