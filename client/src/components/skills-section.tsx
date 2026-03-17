import { useEffect, useRef, useState } from "react";
import { Code, Users, Wrench, Award, PlusCircle, Check } from "lucide-react";
import { SiGit, SiGithub, SiFigma, SiGooglecloud, SiMysql } from "react-icons/si";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

const technicalSkills = [
  { name: "HTML", percentage: 90, type: "accent" },
  { name: "CSS", percentage: 85, type: "accent" },
  { name: "JavaScript", percentage: 80, type: "accent" },
  { name: "MySQL", percentage: 75, type: "accent" },
  { name: "Python", percentage: 85, type: "primary" },
  { name: "R", percentage: 70, type: "primary" },
  { name: "C", percentage: 75, type: "primary" },
  { name: "C++", percentage: 80, type: "primary" },
];

const softSkills = ["Communication", "Teamwork", "Problem-solving", "Adaptability", "Time Management"];

const tools = [
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "VS Code", icon: Code },
  { name: "Figma", icon: SiFigma },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "MySQL", icon: SiMysql },
];

const certifications = [
  { name: "Responsive Web Design — FreeCodeCamp", type: "accent" },
  { name: "Web Development Internship — OCTANET", type: "primary" },
  { name: "Data Analytics — ACCENTURE, FORAGE", type: "accent" },
  { name: "ML Internship — YBI FOUNDATION", type: "primary" },
  { name: "Campus Ambassador — GLOW LOGISTICS", type: "accent" },
];

const otherSkills = ["Video Editing", "Image Editing", "Cloud Computing", "AI/ML Basics", "Data Science", "Typewriting (First Class)"];

export default function SkillsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Skills</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-2"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div ref={ref} className="glassmorphism rounded-2xl p-8 border border-gray-700 hover:border-accent/50 hover-glow transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl mr-4">
                <Code className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Technical Skills</h3>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className={`font-medium ${skill.type === "accent" ? "text-accent" : "text-primary-light"}`}>{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                        skill.type === "accent" ? "bg-gradient-to-r from-accent to-accent/70" : "bg-gradient-to-r from-primary to-primary-light"
                      }`}
                      style={{ width: inView ? `${skill.percentage}%` : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glassmorphism rounded-2xl p-8 border border-gray-700 hover:border-accent/50 hover-glow transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl mr-4">
                <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Soft Skills</h3>
            </div>
            <ul className="space-y-3">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-center p-3 rounded-lg hover:bg-accent/10 transition-all duration-300">
                  <Check className="text-accent mr-3 h-5 w-5 shrink-0" />
                  <span className="text-gray-200 font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="glassmorphism rounded-2xl p-8 border border-gray-700 hover:border-accent/50 hover-glow transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl mr-4">
                <Wrench className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Tools</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center p-3 rounded-lg hover:bg-accent/10 transition-all duration-300 font-medium text-gray-200">
                  <tool.icon className="text-accent mr-3 h-5 w-5 shrink-0" />
                  {tool.name}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glassmorphism rounded-2xl p-8 border border-gray-700 hover:border-accent/50 hover-glow transition-all duration-500 lg:col-span-2 xl:col-span-1">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl mr-4">
                <Award className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl transition-all duration-300 hover:scale-[1.02] text-gray-200 font-medium ${
                    cert.type === "accent"
                      ? "bg-gradient-to-r from-accent/10 to-accent/20 hover:from-accent/20 hover:to-accent/30"
                      : "bg-gradient-to-r from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30"
                  }`}
                >
                  {cert.name}
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="glassmorphism rounded-2xl p-8 border border-gray-700 hover:border-accent/50 hover-glow transition-all duration-500 lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl mr-4">
                <PlusCircle className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Other Skills</h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {otherSkills.map((skill) => (
                <div key={skill} className="flex items-center p-3 rounded-lg hover:bg-accent/10 transition-all duration-300 text-gray-200 font-medium">
                  <Check className="text-accent mr-3 h-5 w-5 shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
