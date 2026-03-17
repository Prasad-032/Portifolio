import { Code, Users, Wrench, Award, PlusCircle, Check } from "lucide-react";
import { SiGit, SiGithub, SiFigma, SiGooglecloud, SiMysql } from "react-icons/si";

export default function SkillsSection() {
  const technicalSkills = [
    { name: "HTML", type: "accent", percentage: 90 },
    { name: "CSS", type: "accent", percentage: 85 },
    { name: "JavaScript", type: "accent", percentage: 80 },
    { name: "MySQL", type: "accent", percentage: 75 },
    { name: "Python", type: "primary", percentage: 85 },
    { name: "R", type: "primary", percentage: 70 },
    { name: "C", type: "primary", percentage: 75 },
    { name: "C++", type: "primary", percentage: 80 }
  ];

  const softSkills = ["Communication", "Teamwork", "Problem-solving", "Adaptability", "Time Management"];

  const tools = [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: Code },
    { name: "Figma", icon: SiFigma },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "MySQL", icon: SiMysql }
  ];

  const certifications = [
    { name: "Responsive Web Design - FreeCodeCamp", type: "accent" },
    { name: "Web Development Internship - OCTANET", type: "primary" },
    { name: "Data Analytics - ACCENTURE, FORAGE", type: "accent" },
    { name: "ML Internship - YBI FOUNDATION", type: "primary" },
    { name: "Campus Ambassador - GLOW LOGISTICS", type: "accent" }
  ];

  const otherSkills = [
    "Video Editing",
    "Image Editing", 
    "Cloud Computing",
    "AI/ML Basics",
    "Data Science",
    "Typewriting (First Class)"
  ];

  return (
    <section id="skills" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient" data-testid="skills-title">Skills</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-2"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="glassmorphism rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-500 border border-gray-700 hover:border-accent/50 hover-glow group" data-testid="technical-skills-card">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl mr-4">
                <Code className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    skill.type === 'accent' 
                      ? 'bg-gradient-to-br from-accent/10 to-accent/20 hover:from-accent/20 hover:to-accent/30 border border-accent/30' 
                      : 'bg-gradient-to-br from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30 border border-primary/30'
                  } hover:shadow-lg`}
                  data-testid={`tech-skill-${skill.name.toLowerCase()}`}
                >
                  <div className="mb-3">
                    <span className={`font-semibold text-lg ${skill.type === 'accent' ? 'text-accent' : 'text-primary-light'}`}>
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        skill.type === 'accent' 
                          ? 'bg-gradient-to-r from-accent to-accent/80' 
                          : 'bg-gradient-to-r from-primary to-primary-light'
                      }`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glassmorphism rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-500 border border-gray-700 hover:border-accent/50 hover-glow group" data-testid="soft-skills-card">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl mr-4">
                <Users className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Soft Skills</h3>
            </div>
            <ul className="space-y-3 text-gray-200">
              {softSkills.map((skill, index) => (
                <li key={index} className="flex items-center p-2 rounded-lg hover:bg-accent/10 transition-all duration-300" data-testid={`soft-skill-${skill.toLowerCase().replace('-', '')}`}>
                  <Check className="text-accent text-lg mr-3 h-5 w-5" />
                  <span className="font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="glassmorphism rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-500 border border-gray-700 hover:border-accent/50 hover-glow group" data-testid="tools-card">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl mr-4">
                <Wrench className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Tools</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 text-base text-gray-200">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center p-2 rounded-lg hover:bg-accent/10 transition-all duration-300 font-medium" data-testid={`tool-${tool.name.toLowerCase().replace(' ', '-')}`}>
                  <tool.icon className="text-accent mr-3 h-5 w-5" />
                  {tool.name}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glassmorphism rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-500 border border-gray-700 hover:border-accent/50 hover-glow group lg:col-span-2 xl:col-span-1" data-testid="certifications-card">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl mr-4">
                <Award className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Certifications</h3>
            </div>
            <div className="space-y-3 text-base text-gray-200">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-xl transition-all duration-300 hover:scale-105 ${cert.type === 'accent' ? 'bg-gradient-to-r from-accent/10 to-accent/20 hover:from-accent/20 hover:to-accent/30' : 'bg-gradient-to-r from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30'}`}
                  data-testid={`certification-${index}`}
                >
                  <span className="font-medium">{cert.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button 
                onClick={() => {
                  // Scroll to projects section to show more achievements
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-accent/25"
                data-testid="button-view-certifications"
              >
                <Award className="mr-2 h-4 w-4" />
                View All Certifications
              </button>
            </div>
          </div>

          {/* Other Skills */}
          <div className="glassmorphism rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-500 border border-gray-700 hover:border-accent/50 hover-glow group lg:col-span-2" data-testid="other-skills-card">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl mr-4">
                <PlusCircle className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Other Skills</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3 text-base text-gray-200">
              {otherSkills.map((skill, index) => (
                <div key={index} className="flex items-center p-2 rounded-lg hover:bg-accent/10 transition-all duration-300" data-testid={`other-skill-${skill.toLowerCase().replace(/[^a-z]/g, '')}`}>
                  <Check className="text-accent mr-3 h-5 w-5" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
