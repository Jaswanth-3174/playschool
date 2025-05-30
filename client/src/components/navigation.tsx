import { useState, useEffect } from "react";
import { useLocation } from "wouter";

interface NavItem {
  href: string;
  label: string;
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#facilities", label: "Facilities" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const handleNavClick = (href: string) => {
    const id = href.startsWith("#") ? href.slice(1) : href;
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    } else {
      console.warn(`Element with ID ${id} not found.`);
      if (href === "#contact") {
        setLocation("/contact");
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white/95 transition-all duration-300 ${
          isScrolled ? "shadow-lg backdrop-blur-sm bg-white/80" : "shadow-md"
        }`}
      >
        <div className="w-full px-4">
          <div className="flex justify-between items-center h-12 sm:h-14">
            <div className="flex items-center">
              <span className="ml-2 text-sm sm:text-base md:text-lg font-fredoka text-gray-800">
                Robudz Play School
              </span>
            </div>

            {/* Centered Desktop Nav */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-orange-500 font-medium px-3 py-2 rounded-lg hover:bg-orange-50 transition-all text-sm md:text-base"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Contact Button aligned right on desktop */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => handleNavClick("#contact")}
                className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm md:text-base ml-4"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                className="text-gray-700 hover:text-orange-500 focus:outline-none p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl md:hidden z-[999] transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-14 px-4 space-y-3 relative">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-700 hover:text-orange-500"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left text-gray-700 hover:text-orange-500 py-2 text-base"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="block w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white px-4 py-2 rounded-full mt-3 hover:shadow-lg transition-all text-base"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[998] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
