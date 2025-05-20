
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Zap, Clock, Star, Settings, Shield, Handshake, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  // Add scroll animation effect for elements
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 bg-[#0A1A2F]">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat animate-on-scroll">
            About Advanced Charging Systems
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-open animate-on-scroll">
            We're a team of dedicated EV infrastructure specialists committed to accelerating 
            the transition to sustainable energy through innovative charging solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
                Power. Integration. Execution.
              </h2>
              <p className="text-gray-600 mb-4 font-open">
                Advanced Charging Systems and Integration provides turnkey infrastructure consulting, 
                system design, and integration services for commercial EV charging deployments. We are 
                technology-agnostic, working alongside hardware vendors, battery system suppliers, and 
                charging OEMs to deliver complete, cohesive solutions.
              </p>
              <p className="text-gray-600 mb-4 font-open">
                Our projects range from urban DC fast charging hubs with major switchgear upgrades to 
                off-grid, containerized charging platforms for remote or constrained-power environments. 
                Whether your project requires 208V, 240V, or full 480V three-phase, our team knows how 
                to make it work—efficiently and reliably.
              </p>
              <p className="text-gray-600 mb-8 font-open">
                We act as your technical and project execution partner, coordinating engineers, electricians, 
                utility approvals, permitting, and all stages of site readiness. For clients needing discretion, 
                ACS can manage 100% of project logistics as an independent subcontractor—protecting your IP and 
                long-term market strategy.
              </p>
              
              <div className="bg-[#0075FF] p-6 rounded-lg text-white mb-6">
                <h3 className="text-xl font-bold mb-3 font-montserrat">Our Mission</h3>
                <p className="font-open">
                  To accelerate the electrification of transportation by removing technical barriers 
                  through innovative power solutions and seamless system integration.
                </p>
              </div>
            </div>
            <div className="lg:w-2/5 animate-on-scroll">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-montserrat animate-on-scroll">
            Why Work With Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Value Card 1 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#00C65E] text-white">
                    <Settings size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Technology Agnostic</h3>
                <p className="text-gray-600 text-center font-open">
                  We work with all charging hardware and software platforms, recommending the best solutions for your specific needs.
                </p>
              </CardContent>
            </Card>

            {/* Value Card 2 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#00C65E] text-white">
                    <Zap size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Design + Build</h3>
                <p className="text-gray-600 text-center font-open">
                  Complete end-to-end service from initial concept through installation and commissioning.
                </p>
              </CardContent>
            </Card>

            {/* Value Card 3 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#00C65E] text-white">
                    <Shield size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Discrete Operations</h3>
                <p className="text-gray-600 text-center font-open">
                  We can operate as your behind-the-scenes partner, protecting your brand identity and strategy.
                </p>
              </CardContent>
            </Card>

            {/* Value Card 4 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#00C65E] text-white">
                    <Scale size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Scalable Execution</h3>
                <p className="text-gray-600 text-center font-open">
                  From single-site projects to multi-location rollouts across distributed geographies.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center animate-on-scroll">
            <Button 
              asChild
              className="bg-[#0075FF] hover:bg-[#0060CC] text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all hover:scale-[1.02]"
            >
              <Link to="/contact" className="flex items-center justify-center">
                Start a Conversation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-montserrat animate-on-scroll">
            Our Team Approach
          </h2>
          <p className="text-gray-600 mb-10 text-center max-w-3xl mx-auto font-open animate-on-scroll">
            When you work with ACS, you gain access to our multidisciplinary team of experts who collaborate 
            to address every aspect of your charging infrastructure needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Group 1 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#2E5090] text-white">
                    <Zap size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Electrical Engineering Team</h3>
                <p className="text-gray-600 text-center font-open">
                  Our electrical engineers specialize in power distribution, load management, and electrical 
                  infrastructure design tailored to your specific site requirements.
                </p>
              </CardContent>
            </Card>

            {/* Team Group 2 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#2E5090] text-white">
                    <Users size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Project Managers</h3>
                <p className="text-gray-600 text-center font-open">
                  Our certified project managers coordinate every aspect of implementation, ensuring 
                  on-time, on-budget execution with minimal site disruption.
                </p>
              </CardContent>
            </Card>

            {/* Team Group 3 */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#2E5090] text-white">
                    <Star size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-montserrat">Technical Support</h3>
                <p className="text-gray-600 text-center font-open">
                  Our ongoing technical support team ensures your charging infrastructure continues 
                  to operate at peak performance after installation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Approach Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-on-scroll">
              <img 
                src="/partnership.jpg" 
                alt="ACS partnership approach" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
                Our Partnership Approach
              </h2>
              <p className="text-gray-600 mb-6 font-open">
                At ACS, we believe in creating true partnerships with our clients. We take the time to 
                understand your specific needs, operational constraints, and business objectives before 
                recommending custom solutions.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-[#00C65E] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600 font-open">Transparent communication throughout the project lifecycle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#00C65E] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600 font-open">Regular progress updates and milestone reviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#00C65E] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600 font-open">Collaborative problem-solving when challenges arise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#00C65E] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600 font-open">Knowledge transfer to ensure your team can maintain operations</span>
                </li>
              </ul>
              
              <Button 
                asChild
                className="bg-[#0075FF] hover:bg-[#0060CC] text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all hover:scale-[1.02]"
              >
                <Link to="/contact">
                  Request a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0075FF]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-montserrat animate-on-scroll">
            Ready to Transform Your EV Charging Infrastructure?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-open animate-on-scroll">
            Our team of experts is ready to help you design, implement, and maintain 
            the perfect charging solution for your specific needs.
          </p>
          <Button 
            asChild
            className="bg-white hover:bg-gray-100 text-[#0075FF] font-semibold px-8 py-3 rounded-lg text-lg transition-all hover:scale-[1.02] animate-on-scroll"
          >
            <Link to="/contact">
              Request a Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
