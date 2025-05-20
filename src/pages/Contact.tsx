
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronRight, Clock, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend API
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Consultation Request Submitted",
      description: "We'll be in touch with you soon about your EV charging project.",
    });
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      industry: "",
      message: ""
    });
  };
  
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 bg-[#1E2838]">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            Let's Power Your EV Infrastructure
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-open">
            Ready to discuss your charging infrastructure needs? Our team of experts is here to help design and 
            implement the perfect solution for your organization.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Form */}
            <div className="lg:w-3/5">
              <h2 className="text-3xl font-bold mb-6 font-montserrat">Request a Consultation</h2>
              <p className="text-gray-600 mb-8 font-open">
                Fill out the form below and one of our experts will contact you to discuss your specific needs and 
                how we can help optimize your EV charging infrastructure.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-montserrat">Full Name*</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="font-open"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-montserrat">Company Name*</Label>
                    <Input 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="font-open"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-montserrat">Email Address*</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="font-open"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-montserrat">Phone Number*</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="font-open"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industry" className="font-montserrat">Industry/Sector*</Label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-open"
                  >
                    <option value="">Select your industry</option>
                    <option value="Fleet/Logistics">Fleet/Logistics</option>
                    <option value="Rental Car">Rental Car</option>
                    <option value="Commercial Real Estate">Commercial Real Estate</option>
                    <option value="Utility/Municipal">Utility/Municipal</option>
                    <option value="Mobile/Off-Grid">Mobile/Off-Grid</option>
                    <option value="Investment Group">Investment Group</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-montserrat">Project Details</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-open"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-[#388F72] hover:bg-[#2A7A62] text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all font-montserrat"
                >
                  Request Consultation
                </Button>
              </form>
            </div>
            
            {/* Schedule Section */}
            <div className="lg:w-2/5">
              <div className="bg-[#1E2838] p-8 rounded-lg text-white h-full">
                <h2 className="text-2xl font-bold mb-6 font-montserrat">Schedule a Consultation</h2>
                <p className="mb-6 font-open">
                  Prefer to schedule a specific time to speak with our team? Select an available time slot that works for you.
                </p>
                
                <div className="flex items-center mb-6">
                  <Clock className="text-[#F5A623] mr-3" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold font-montserrat">Direct Scheduling</h3>
                    <p className="text-sm text-gray-300 font-open">
                      Choose a convenient time for a video or phone consultation
                    </p>
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="bg-[#0D6EFD] hover:bg-[#0b5ed7] text-white font-semibold px-6 py-2 rounded-lg transition-all w-full mb-8 font-montserrat"
                >
                  <a href="#" className="flex items-center justify-center">
                    Schedule Now
                    <ChevronRight className="ml-2" size={18} />
                  </a>
                </Button>
                
                <Separator className="bg-gray-600 my-8" />
                
                <h3 className="text-xl font-semibold mb-4 font-montserrat">Contact Information</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Mail className="mr-3 text-[#F5A623] mt-1" size={18} />
                    <a href="mailto:info@advancedchargingsystems.com" className="text-gray-300 hover:text-white transition-colors font-open">
                      info@advancedchargingsystems.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="mr-3 text-[#F5A623] mt-1" size={18} />
                    <span className="text-gray-300 font-open">
                      Serving major metropolitan areas across the US
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 font-montserrat">Service Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                  {['West Coast', 'Gulf Coast', 'East Coast', 'Midwest', 'Southwest', 'Southeast'].map((region) => (
                    <div key={region} className="bg-[#2E5090] text-white py-1 px-3 rounded-full text-center font-open">
                      {region}
                    </div>
                  ))}
                </div>
              </div>
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

export default Contact;
