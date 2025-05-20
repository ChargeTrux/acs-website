
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronRight, Clock, Mail, MapPin, Calendar, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    projectTimeline: "",
    message: "",
    consent: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validateField = (name: string, value: string | boolean) => {
    if (name === 'name' && typeof value === 'string' && !value.trim()) {
      return 'Name is required';
    }
    if (name === 'email' && typeof value === 'string') {
      if (!value.trim()) return 'Email is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Please enter a valid email';
    }
    if (name === 'consent' && value === false) {
      return 'You must consent to data processing';
    }
    return '';
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
    
    const error = validateField('consent', checked);
    setErrors(prev => ({
      ...prev,
      consent: error
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    let hasError = false;
    
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key] = error;
        hasError = true;
      }
    });
    
    setErrors(newErrors);
    
    if (hasError) {
      toast({
        title: "Form Validation Error",
        description: "Please correct the highlighted fields.",
        variant: "destructive"
      });
      return;
    }
    
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
      email: "",
      phone: "",
      company: "",
      projectType: "",
      projectTimeline: "",
      message: "",
      consent: false
    });
  };
  
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 bg-[#1E2838]">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat animate-fade-in">
            Let's Power Your EV Infrastructure
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-open animate-fade-in">
            Whether you're building your first charger site or scaling a fleet-wide deployment, ACS is ready to integrate and execute your vision.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Form */}
            <div className="lg:w-3/5">
              <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in">
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
                        className={`font-open ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="font-montserrat">Company Name</Label>
                      <Input 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
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
                        className={`font-open ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-montserrat">Phone Number</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="font-open"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="font-montserrat">Project Type</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-open"
                      >
                        <option value="">Select project type</option>
                        <option value="New Charging Installation">New Charging Installation</option>
                        <option value="Existing System Upgrade">Existing System Upgrade</option>
                        <option value="Off-Grid/Mobile Solution">Off-Grid/Mobile Solution</option>
                        <option value="Consulting Services">Consulting Services</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectTimeline" className="font-montserrat">Project Timeline</Label>
                      <select
                        id="projectTimeline"
                        name="projectTimeline"
                        value={formData.projectTimeline}
                        onChange={handleChange}
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-open"
                      >
                        <option value="">Select timeline</option>
                        <option value="Immediate (1-3 months)">Immediate (1-3 months)</option>
                        <option value="Short-term (3-6 months)">Short-term (3-6 months)</option>
                        <option value="Long-term (6+ months)">Long-term (6+ months)</option>
                        <option value="Planning phase only">Planning phase only</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-montserrat">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-open"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="consent" 
                      checked={formData.consent}
                      onCheckedChange={handleCheckboxChange}
                      className={errors.consent ? 'border-red-500 data-[state=checked]:bg-red-500' : ''}
                    />
                    <div className="space-y-1 leading-none">
                      <Label 
                        htmlFor="consent" 
                        className={`font-open text-sm ${errors.consent ? 'text-red-500' : 'text-muted-foreground'}`}
                      >
                        I consent to ACS storing and processing my data to respond to my inquiry.
                      </Label>
                      {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="bg-[#0075FF] hover:bg-[#0060CC] text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all font-montserrat w-full hover:scale-[1.02]"
                  >
                    Request Consultation
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Schedule Section */}
            <div className="lg:w-2/5">
              <div className="bg-[#0A1A2F] p-8 rounded-lg text-white h-full animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 font-montserrat">Schedule a Consultation</h2>
                <p className="mb-6 font-open">
                  Prefer to schedule a specific time to speak with our team? Select an available time slot that works for you.
                </p>
                
                <div className="flex items-center mb-6">
                  <Calendar className="text-[#00C65E] mr-3" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold font-montserrat">Book a Meeting</h3>
                    <p className="text-sm text-gray-300 font-open">
                      Schedule a 30-minute intro call with our specialists to discuss your specific needs.
                    </p>
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="bg-[#0075FF] hover:bg-[#0060CC] text-white font-semibold px-6 py-2 rounded-lg transition-all w-full mb-8 font-montserrat hover:scale-[1.02]"
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
                    <Mail className="mr-3 text-[#00C65E] mt-1" size={18} />
                    <a href="mailto:info@advancedchargingsystems.com" className="text-gray-300 hover:text-white transition-colors font-open">
                      info@advancedchargingsystems.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Linkedin className="mr-3 text-[#00C65E] mt-1" size={18} />
                    <a href="https://linkedin.com/company/advanced-charging-systems" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors font-open">
                      Connect with us on LinkedIn
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="mr-3 text-[#00C65E] mt-1" size={18} />
                    <span className="text-gray-300 font-open">
                      Serving major metropolitan areas across the US
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 font-montserrat">Service Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                  {['West Coast', 'Gulf Coast', 'East Coast', 'Midwest', 'Southwest', 'Southeast'].map((region) => (
                    <div key={region} className="bg-[#132A47] text-white py-1 px-3 rounded-full text-center text-sm font-open">
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
      <section className="py-20 bg-[#0A1A2F]">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white font-montserrat animate-fade-in">Service Areas</h2>
          <p className="text-xl text-center text-white mb-12 max-w-3xl mx-auto font-open animate-fade-in">
            Advanced Charging Systems currently services major metropolitan areas across the United States, with rapid expansion plans underway.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* West Coast */}
            <div className="animate-fade-in">
              <h3 className="flex items-center text-xl font-semibold text-[#00C65E] mb-4 font-montserrat">
                <Check className="mr-2" /> West Coast
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {['Seattle', 'Portland', 'San Francisco', 'Oakland', 'San Jose', 'Los Angeles', 'Orange County', 'San Diego'].map((city) => (
                  <div key={city} className="bg-[#132A47] text-white py-1 px-3 rounded-full text-center text-sm font-open">
                    {city}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gulf Coast & Southwest */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="flex items-center text-xl font-semibold text-[#00C65E] mb-4 font-montserrat">
                <Check className="mr-2" /> Gulf Coast & Southwest
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {['Phoenix', 'Albuquerque', 'Dallas', 'Houston', 'Austin', 'San Antonio', 'New Orleans', 'Tampa', 'Orlando', 'Miami'].map((city) => (
                  <div key={city} className="bg-[#132A47] text-white py-1 px-3 rounded-full text-center text-sm font-open">
                    {city}
                  </div>
                ))}
              </div>
            </div>
            
            {/* East Coast & Southeast */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="flex items-center text-xl font-semibold text-[#00C65E] mb-4 font-montserrat">
                <Check className="mr-2" /> East Coast & Southeast
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {['Atlanta', 'Charlotte', 'Raleigh', 'D.C.', 'Baltimore', 'Philadelphia', 'Newark', 'NYC', 'Boston', 'Norfolk'].map((city) => (
                  <div key={city} className="bg-[#132A47] text-white py-1 px-3 rounded-full text-center text-sm font-open">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-center text-white mt-12 font-open animate-fade-in">
            Planning to deploy EVs in other locations? Let us know—we're expanding rapidly!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
