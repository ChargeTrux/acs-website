
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight, Users, Zap, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 bg-[#1E2838]">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            About Advanced Charging Systems
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-open">
            We're a team of dedicated EV infrastructure specialists committed to accelerating 
            the transition to sustainable energy through innovative charging solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-[#DEDEDE]">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
                Power. Integration. Execution.
              </h2>
              <p className="text-gray-600 mb-4 font-open">
                Advanced Charging Systems was founded in 2018 by a team of electrical engineers and project 
                management experts who recognized the critical need for specialized expertise in EV charging infrastructure. 
                As electric vehicle adoption began accelerating, we saw businesses struggling to navigate the complex 
                technical and logistical challenges of implementing effective charging solutions.
              </p>
              <p className="text-gray-600 mb-6 font-open">
                Today, we've grown to a team of over 40 specialists working across the country to design, implement, 
                and maintain charging infrastructure for commercial and fleet applications. Our approach combines 
                technical excellence with practical, real-world experience to deliver solutions that truly work for 
                our clients' specific needs.
              </p>
              <p className="text-gray-600 mb-8 font-open">
                We maintain a vendor-neutral approach, allowing us to recommend and integrate the optimal hardware 
                and software components for each project's unique requirements. This flexibility, combined with our 
                deep technical knowledge and project management expertise, enables us to deliver charging solutions 
                that consistently exceed performance expectations.
              </p>
              
              <div className="bg-[#2E5090] p-6 rounded-lg text-white mb-6">
                <h3 className="text-xl font-bold mb-3 font-montserrat">Our Mission</h3>
                <p className="font-open">
                  To accelerate the transition to sustainable transportation by removing technical barriers to 
                  EV adoption through expertly designed and flawlessly implemented charging solutions.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/company-team.jpg" 
                alt="Advanced Charging Systems team of experts" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why ACS Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-montserrat">
            Why Work With Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Value Card 1 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#2E5090] text-white">
                    <Zap size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Technical Expertise</h3>
                <p className="text-gray-600 text-center font-open">
                  Our team includes electrical engineers, network specialists, and certified EV infrastructure professionals.
                </p>
              </CardContent>
            </Card>

            {/* Value Card 2 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#2E5090] text-white">
                    <Users size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Vendor Independence</h3>
                <p className="text-gray-600 text-center font-open">
                  We're not tied to specific manufacturers, allowing us to recommend the optimal solutions for your needs.
                </p>
              </CardContent>
            </Card>

            {/* Value Card 3 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#2E5090] text-white">
                    <Clock size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">End-to-End Management</h3>
                <p className="text-gray-600 text-center font-open">
                  We handle every aspect from initial design through installation and ongoing maintenance.
                </p>
              </CardContent>
            </Card>

            {/* Value Card 4 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#2E5090] text-white">
                    <Star size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Proven Track Record</h3>
                <p className="text-gray-600 text-center font-open">
                  Over 150 successful projects with a 98% client satisfaction rating across multiple industries.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-[#DEDEDE] p-8 rounded-lg mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-center font-montserrat">Our Team Approach</h3>
            <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto font-open">
              When you work with ACS, you gain access to our multidisciplinary team of experts who collaborate 
              to address every aspect of your charging infrastructure needs:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-[#2E5090] font-montserrat">Electrical Engineering Team</h4>
                <p className="text-gray-600 mb-2 font-open">
                  Specialists in power distribution, load management, and electrical infrastructure design.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-[#2E5090] font-montserrat">Project Managers</h4>
                <p className="text-gray-600 mb-2 font-open">
                  Certified professionals with experience coordinating complex installation projects.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-[#2E5090] font-montserrat">Technical Support</h4>
                <p className="text-gray-600 mb-2 font-open">
                  Dedicated specialists providing ongoing monitoring and maintenance services.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              className="bg-[#388F72] hover:bg-[#2A7A62] text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all"
            >
              <Link to="/contact" className="flex items-center justify-center">
                Start a Conversation
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
