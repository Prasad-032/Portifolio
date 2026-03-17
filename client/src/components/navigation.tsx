import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["home", "about", "skills", "projects", "contact"];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      for (const id of [...navLinks].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 border-b border-gray-700/50 transition-all duration-300 ${
      isScrolled ? "glassmorphism shadow-lg" : "bg-dark/80 backdrop-blur-xl"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
          >
            DK
          </button>

          {/* Desktop */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-4 py-2 rounded-lg capitalize font-medium transition-all duration-300 ${
                  activeSection === id
                    ? "text-accent bg-accent/10 border border-accent/30"
                    : "text-gray-300 hover:text-accent hover:bg-accent/5"
                }`}
              >
                {id}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden glassmorphism border-t border-gray-700 pb-3">
            {navLinks.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left px-4 py-3 capitalize transition-colors duration-200 ${
                  activeSection === id ? "text-accent" : "text-gray-300 hover:text-accent"
                }`}
              >
                {id}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
