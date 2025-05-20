
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Add scroll event listener to track when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled down
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Home", path: "/" },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "Infrastructure Design & Engineering", path: "/services#infrastructure" },
        { name: "Charging System Integration", path: "/services#integration" },
        { name: "Contractor & Vendor Oversight", path: "/services#contractor" },
        { name: "Utility & Compliance Management", path: "/services#compliance" }
      ]
    },
    { 
      name: "Industries We Serve", 
      path: "/industries",
      dropdown: [
        { name: "Fleet & Logistics Hubs", path: "/industries#fleet" },
        { name: "Rental Car Yards", path: "/industries#rental" },
        { name: "Commercial Real Estate", path: "/industries#commercial" },
        { name: "Utilities & Municipal Projects", path: "/industries#utilities" },
        { name: "Mobile/Off-Grid Solutions", path: "/industries#mobile" },
        { name: "Investment Groups", path: "/industries#investment" }
      ]
    },
    { name: "Technology Spotlight", path: "/technology" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-colors duration-300 ${
      scrolled ? "bg-white shadow-md" : "bg-[#0A1A2F]"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/ada052a5-0116-4977-a6e4-b4325cdb0f10.png" 
              alt="Advanced Charging Systems Logo" 
              className="h-16" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  to={item.path}
                  className={`${
                    scrolled ? "text-[#0A1A2F] hover:text-[#F5A623]" : "text-white hover:text-[#F5A623]"
                  } font-medium transition-colors ${
                    isActive(item.path) ? "border-b-[3px] border-[#F5A623]" : ""
                  }`}
                  onClick={(e) => {
                    if (item.dropdown && item.dropdown.length > 0) {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.name}
                </Link>
                
                {/* Dropdown for desktop */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-3 text-gray-800 hover:bg-[#2E5090] hover:text-white transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            asChild
            className="hidden md:block bg-[#F5A623] hover:bg-[#E09000] text-white font-semibold rounded-lg transition-all"
          >
            <Link to="/contact">Request a Consultation</Link>
          </Button>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-2 ${scrolled ? "text-[#0A1A2F]" : "text-white"}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1A2F] border-t border-gray-700">
          <div className="container px-4 py-4">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`flex items-center justify-between w-full text-left text-white py-2 ${
                        isActive(item.path) ? "border-l-[3px] border-[#F5A623] pl-2" : ""
                      }`}
                    >
                      <span>{item.name}</span>
                      <span>{activeDropdown === item.name ? "-" : "+"}</span>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 mt-2 border-l border-gray-600">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block py-2 text-white hover:text-[#F5A623]"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block text-white hover:text-[#F5A623] py-2 ${
                      isActive(item.path) ? "border-l-[3px] border-[#F5A623] pl-2" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-6">
              <Button 
                asChild
                className="w-full bg-[#F5A623] hover:bg-[#E09000] text-white font-semibold rounded-lg"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Request a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
