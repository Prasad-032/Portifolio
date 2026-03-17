import { User } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-08-14 at 18.20.24_c71a841e_1755998131806.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-accent/5 to-primary/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: "1.5s"}}></div>
      </div>
      
      <div className="text-center z-10 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-accent via-primary to-accent p-1 animate-pulse-slow hover-glow transition-all duration-500">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src={profileImage} 
                alt="Devivaraprasad Killampudi" 
                className="w-full h-full object-cover rounded-full"
                data-testid="profile-image"
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-accent to-primary-light bg-clip-text text-transparent animate-slide-up tracking-tight leading-tight" data-testid="hero-title">
          <span className="block">DEVIVARAPRASAD</span>
          <span className="block text-gradient">KILLAMPUDI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{animationDelay: "0.2s"}} data-testid="hero-subtitle">
          Web Developer <span className="text-accent">|</span> Designer <span className="text-accent">|</span> Learner
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: "0.4s"}}>
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/25 glassmorphism"
            data-testid="button-view-projects"
          >
            View My Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 glassmorphism hover:shadow-2xl hover:shadow-accent/25"
            data-testid="button-get-in-touch"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/30 rounded-full animate-float blur-sm"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{animationDelay: "1s"}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-accent/20 rounded-full animate-float" style={{animationDelay: "2s"}}></div>
      <div className="absolute bottom-20 right-20 w-18 h-18 bg-primary/25 rounded-full animate-float" style={{animationDelay: "3s"}}></div>
    </section>
  );
}
