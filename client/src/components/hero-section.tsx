import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-08-14 at 18.20.24_c71a841e_1755998131806.jpg";

const roles = ["Web Developer", "UI Designer", "Problem Solver", "Lifelong Learner"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-primary/20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="text-center z-10 px-4 sm:px-6 lg:px-8 animate-fade-in">
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-accent via-primary to-accent p-1 animate-pulse-slow hover-glow transition-all duration-500">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img src={profileImage} alt="Devivaraprasad Killampudi" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-accent to-primary-light bg-clip-text text-transparent tracking-tight leading-tight animate-slide-up">
          <span className="block">DEVIVARAPRASAD</span>
          <span className="block text-gradient">KILLAMPUDI</span>
        </h1>

        {/* Typing subtitle */}
        <div className="h-10 flex items-center justify-center mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <span className="text-xl md:text-2xl text-gray-300">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-pulse"></span>
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/25 glassmorphism"
          >
            View My Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 glassmorphism hover:shadow-2xl hover:shadow-accent/25"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/30 rounded-full animate-float blur-sm"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent animate-bounce opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
