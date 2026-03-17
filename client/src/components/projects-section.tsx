import { useState } from "react";
import { Code, Anchor, TrendingUp, Award, Users, Laptop, BarChart, Bot } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  const projects = [
    {
      title: "Simple Landing Page",
      description: "Designed a Simple Landing page using Basic HTML and CSS",
      icon: Code,
      link: "https://github.com/Prasad-032/OCTANET_JANUARY/tree/main/task-1",
      linkType: "github",
      gradient: "from-accent/20 to-primary/30"
    },
    {
      title: "One Piece Landing Page", 
      description: "Designed a Responsive Landing page using HTML and CSS",
      icon: Anchor,
      link: "https://github.com/Prasad-032/OCTANET_JANUARY/tree/main/one_piece%20landing%20page",
      linkType: "github",
      gradient: "from-orange-500/20 to-red-500/30"
    },
    {
      title: "Student Performance Predictor",
      description: "ML project for EduQuest Coaching using Data Science algorithms",
      icon: TrendingUp,
      link: "https://github.com/Prasad-032/Student-Performance-Predictor-for-Eduquest-Coaching.-YBI-INTERNSHIP-PROJ-",
      linkType: "github", 
      gradient: "from-purple-500/20 to-blue-500/30"
    },
    {
      title: "Responsive Web Design",
      description: "Completed Responsive Web Design Certification from FreeCodeCamp",
      icon: Award,
      link: "https://freecodecamp.org/certification/fcc459d1831-653e-459b-9e2d-44bb9b290aad/responsive-web-design",
      linkType: "external",
      gradient: "from-green-500/20 to-teal-500/30"
    },
    {
      title: "Campus Ambassador",
      description: "Selected as Campus Ambassador for GLOW LOGISTICS solutions",
      icon: Users,
      link: "https://www.linkedin.com/posts/devivaraprasad-killampudi-500359261_certificate-of-participation-activity-7304900907673001984-sUrg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBNSJABRUFf6_75dv0J3cbYV4MvHP_Tx28",
      linkType: "linkedin",
      gradient: "from-blue-600/20 to-indigo-500/30"
    },
    {
      title: "Web Development Internship",
      description: "Completed Web Development Internship from OCTANET SERVICES",
      icon: Laptop,
      link: "https://www.linkedin.com/posts/devivaraprasad-killampudi-500359261_web-development-1-month-internship-completion-activity-7295072947222769664-c23M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBNSJABRUFf6_75dv0J3cbYV4MvHP_Tx28",
      linkType: "linkedin",
      gradient: "from-yellow-500/20 to-orange-500/30"
    },
    {
      title: "Data Analytics Job Simulation",
      description: "Completed simulation as Data Analyst at Accenture - analyzed 7 datasets to uncover content trends",
      icon: BarChart,
      link: "https://www.linkedin.com/posts/devivaraprasad-killampudi-500359261_forage-certificate-activity-7319545976615002113-sTyF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBNSJABRUFf6_75dv0J3cbYV4MvHP_Tx28",
      linkType: "linkedin",
      gradient: "from-red-500/20 to-pink-500/30"
    },
    {
      title: "SMART-MEDICATION-BOT",
      description: "An intelligent medication management system designed to help users track, manage, and get reminders for their medications",
      icon: Bot,
      link: "https://github.com/Prasad-032/SMART-MEDICATION-BOT",
      linkType: "github",
      gradient: "from-emerald-500/20 to-cyan-500/30"
    }
  ];

  const getButtonContent = (linkType: string) => {
    switch (linkType) {
      case "github":
        return (
          <>
            <SiGithub className="mr-2 h-4 w-4" />
            View Project
          </>
        );
      case "linkedin":
        return (
          <>
            <SiLinkedin className="mr-2 h-4 w-4" />
            View on LinkedIn
          </>
        );
      default:
        return (
          <>
            <ExternalLink className="mr-2 h-4 w-4" />
            View Certificate
          </>
        );
    }
  };

  return (
    <section id="projects" className="py-24 bg-dark-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient" data-testid="projects-title">Projects</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-2"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isFlipped = flippedCards.includes(index);
            return (
              <div 
                key={index} 
                className="relative h-80 perspective-1000"
                data-testid={`project-card-${index}`}
              >
                <div 
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => toggleCard(index)}
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 backface-hidden glassmorphism rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-accent/50">
                    <div className={`h-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex flex-col items-center justify-center`}>
                      <div className="absolute inset-0 opacity-30">
                        <div className="w-full h-full bg-white/10 bg-gradient-to-br from-white/5 to-transparent"></div>
                      </div>
                      <div className="relative z-10 text-center">
                        <div className="p-6 bg-white/10 rounded-full backdrop-blur-sm mb-4 mx-auto w-fit">
                          <project.icon className="text-white text-5xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white px-4" data-testid={`project-title-${index}`}>
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-sm mt-2 px-4">Click to learn more</p>
                      </div>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 glassmorphism rounded-2xl overflow-hidden shadow-2xl border border-gray-700 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-gradient" data-testid={`project-title-back-${index}`}>
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-6" data-testid={`project-description-${index}`}>
                        {project.description}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 w-full justify-center"
                        data-testid={`project-link-${index}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {getButtonContent(project.linkType)}
                      </a>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(index);
                        }}
                        className="w-full px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        Back to Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
