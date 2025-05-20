
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronRight, MapPin, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-[#1E2838]">
        <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-montserrat">
            Connecting Power to Possibility
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-open">
            Advanced Charging Systems and Integration delivers end-to-end EV charging solutions for commercial and fleet applications, optimizing performance through expert design and implementation.
          </p>
          <Button 
            asChild
            className="bg-[#F5A623] hover:bg-[#E09000] text-white font-semibold px-6 py-3 rounded-lg text-lg transition-all"
          >
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-[#DEDEDE]">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat">
            Comprehensive EV Charging Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#2E5090] text-white">
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
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#2E5090] text-white">
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
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#2E5090] text-white">
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
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#2E5090] text-white">
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
              className="bg-[#2E5090] hover:bg-[#254580] text-white font-semibold px-6 py-2 rounded-lg transition-all"
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
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Flexible Power Integration</h2>
              <p className="text-gray-600 mb-4 font-open">
                Our adaptive power integration systems enable charging solutions that work with diverse electrical configurations. From standard grid connections to renewable sources, we design systems that optimize charging efficiency and minimize infrastructure costs.
              </p>
              <p className="text-gray-600 mb-8 font-open">
                ACS specializes in managing complex power requirements, balancing loads across multiple charging stations, and implementing smart charging solutions that adapt to changing conditions and demand.
              </p>
              <Button 
                asChild
                className="bg-[#2E5090] hover:bg-[#254580] text-white font-semibold px-6 py-2 rounded-lg transition-all"
              >
                <Link to="/technology" className="flex items-center">
                  Learn More
                  <ChevronRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-2/5">
              <img 
                src="/power-diagram.jpg" 
                alt="Flexible power integration diagram" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-[#DEDEDE]">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat">
            Powering Diverse Industries
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Industry 1 */}
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <div className="p-4 rounded-full bg-[#2E5090] text-white mb-3">
                <Zap size={28} />
              </div>
              <p className="text-center font-semibold font-montserrat">Fleet & Logistics Hubs</p>
            </div>

            {/* Industry 2 */}
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <div className="p-4 rounded-full bg-[#2E5090] text-white mb-3">
                <Zap size={28} />
              </div>
              <p className="text-center font-semibold font-montserrat">Rental Car Yards</p>
            </div>

            {/* Industry 3 */}
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <div className="p-4 rounded-full bg-[#2E5090] text-white mb-3">
                <Zap size={28} />
              </div>
              <p className="text-center font-semibold font-montserrat">Commercial Real Estate</p>
            </div>

            {/* Industry 4 */}
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <div className="p-4 rounded-full bg-[#2E5090] text-white mb-3">
                <Zap size={28} />
              </div>
              <p className="text-center font-semibold font-montserrat">Utilities & Municipal Projects</p>
            </div>

            {/* Industry 5 */}
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <div className="p-4 rounded-full bg-[#2E5090] text-white mb-3">
                <Zap size={28} />
              </div>
              <p className="text-center font-semibold font-montserrat">Mobile/Off-Grid Solutions</p>
            </div>

            {/* Industry 6 */}
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <div className="p-4 rounded-full bg-[#2E5090] text-white mb-3">
                <Zap size={28} />
              </div>
              <p className="text-center font-semibold font-montserrat">Investment Groups</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Button 
              asChild
              className="bg-[#2E5090] hover:bg-[#254580] text-white font-semibold px-6 py-2 rounded-lg transition-all"
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
      <section className="py-16 bg-[#2E5090]">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Statistic 1 */}
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2 font-montserrat">150+</p>
              <p className="text-xl text-white font-open">Projects Completed</p>
            </div>
            
            {/* Statistic 2 */}
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2 font-montserrat">2,500+</p>
              <p className="text-xl text-white font-open">Charging Ports Installed</p>
            </div>
            
            {/* Statistic 3 */}
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2 font-montserrat">15+</p>
              <p className="text-xl text-white font-open">States Served</p>
            </div>
            
            {/* Statistic 4 */}
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2 font-montserrat">98%</p>
              <p className="text-xl text-white font-open">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-[#1E2838]">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white font-montserrat">Service Areas</h2>
          <p className="text-xl text-center text-white mb-12 max-w-3xl mx-auto font-open">
            Our expert teams provide EV charging infrastructure solutions across major metropolitan areas in these regions:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* West Coast */}
            <div>
              <h3 className="flex items-center text-xl font-semibold text-[#F5A623] mb-4 font-montserrat">
                <Check className="mr-2" /> West Coast
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {['Seattle', 'Portland', 'Sacramento', 'San Francisco', 'Los Angeles', 'San Diego'].map((city) => (
                  <div key={city} className="bg-[#2E5090] text-white py-1 px-3 rounded-full text-center font-open">
                    {city}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gulf Coast & Southwest */}
            <div>
              <h3 className="flex items-center text-xl font-semibold text-[#F5A623] mb-4 font-montserrat">
                <Check className="mr-2" /> Gulf Coast & Southwest
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {['Houston', 'Dallas', 'Austin', 'San Antonio', 'Phoenix', 'Denver'].map((city) => (
                  <div key={city} className="bg-[#2E5090] text-white py-1 px-3 rounded-full text-center font-open">
                    {city}
                  </div>
                ))}
              </div>
            </div>
            
            {/* East Coast & Southeast */}
            <div>
              <h3 className="flex items-center text-xl font-semibold text-[#F5A623] mb-4 font-montserrat">
                <Check className="mr-2" /> East Coast & Southeast
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {['Boston', 'New York', 'Philadelphia', 'Washington DC', 'Atlanta', 'Miami'].map((city) => (
                  <div key={city} className="bg-[#2E5090] text-white py-1 px-3 rounded-full text-center font-open">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-center text-white mt-12 font-open">
            Additional locations available upon request. Contact us to discuss your specific regional needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
