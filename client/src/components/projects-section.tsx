import { useState } from "react";
import { Code, Anchor, TrendingUp, Award, Users, Laptop, BarChart, Bot, ExternalLink } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

type Category = "all" | "projects" | "internships" | "certifications";

const projects = [
  {
    title: "Simple Landing Page",
    description: "Designed a simple landing page using basic HTML and CSS.",
    icon: Code,
    link: "https://github.com/Prasad-032/OCTANET_JANUARY/tree/main/task-1",
    linkType: "github",
    gradient: "from-accent/20 to-primary/30",
    category: "projects",
  },
  {
    title: "One Piece Landing Page",
    description: "Designed a responsive landing page using HTML and CSS.",
    icon: Anchor,
    link: "https://github.com/Prasad-032/OCTANET_JANUARY/tree/main/one_piece%20landing%20page",
    linkType: "github",
    gradient: "from-orange-500/20 to-red-500/30",
    category: "projects",
  },
  {
    title: "Student Performance Predictor",
    description: "ML project for EduQuest Coaching using Data Science algorithms.",
    icon: TrendingUp,
    link: "https://github.com/Prasad-032/Student-Performance-Predictor-for-Eduquest-Coaching.-YBI-INTERNSHIP-PROJ-",
    linkType: "github",
    gradient: "from-purple-500/20 to-blue-500/30",
    category: "projects",
  },
  {
    title: "SMART-MEDICATION-BOT",
    description: "An intelligent medication management system to help users track and get reminders for their medications.",
    icon: Bot,
    link: "https://github.com/Prasad-032/SMART-MEDICATION-BOT",
    linkType: "github",
    gradient: "from-emerald-500/20 to-cyan-500/30",
    category: "projects",
  },
  {
    title: "Web Development Internship",
    description: "Completed Web Development Internship from OCTANET SERVICES.",
    icon: Laptop,
    link: "https://www.linkedin.com/posts/devivaraprasad-killampudi-500359261_web-development-1-month-internship-completion-activity-7295072947222769664-c23M",
    linkType: "linkedin",
    gradient: "from-yellow-500/20 to-orange-500/30",
    category: "internships",
  },
  {
    title: "ML Internship — YBI Foundation",
    description: "Completed Machine Learning internship and built a Student Performance Predictor.",
    icon: TrendingUp,
    link: "https://github.com/Prasad-032/Student-Performance-Predictor-for-Eduquest-Coaching.-YBI-INTERNSHIP-PROJ-",
    linkType: "github",
    gradient: "from-purple-500/20 to-pink-500/30",
    category: "internships",
  },
  {
    title: "Campus Ambassador",
    description: "Selected as Campus Ambassador for GLOW LOGISTICS solutions.",
    icon: Users,
    link: "https://www.linkedin.com/posts/devivaraprasad-killampudi-500359261_certificate-of-participation-activity-7304900907673001984-sUrg",
    linkType: "linkedin",
    gradient: "from-blue-600/20 to-indigo-500/30",
    category: "internships",
  },
  {
    title: "Responsive Web Design",
    description: "Completed Responsive Web Design Certification from FreeCodeCamp.",
    icon: Award,
    link: "https://freecodecamp.org/certification/fcc459d1831-653e-459b-9e2d-44bb9b290aad/responsive-web-design",
    linkType: "external",
    gradient: "from-green-500/20 to-teal-500/30",
    category: "certifications",
  },
  {
    title: "Data Analytics Job Simulation",
    description: "Completed simulation as Data Analyst at Accenture — analyzed 7 datasets to uncover content trends.",
    icon: BarChart,
    link: "https://www.linkedin.com/posts/devivaraprasad-killampudi-500359261_forage-certificate-activity-7319545976615002113-sTyF",
    linkType: "linkedin",
    gradient: "from-red-500/20 to-pink-500/30",
    category: "certifications",
  },
];

const tabs: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Projects", value: "projects" },
  { label: "Internships", value: "internships" },
  { label: "Certifications", value: "certifications" },
];

function LinkButton({ linkType, link }: { linkType: string; link: string }) {
  const content =
    linkType === "github" ? <><SiGithub className="mr-2 h-4 w-4" />View on GitHub</>
    : linkType === "linkedin" ? <><SiLinkedin className="mr-2 h-4 w-4" />View on LinkedIn</>
    : <><ExternalLink className="mr-2 h-4 w-4" />View Certificate</>;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
    >
      {content}
    </a>
  );
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [flipped, setFlipped] = useState<number[]>([]);

  const filtered = activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  const toggle = (i: number) =>
    setFlipped((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <section id="projects" className="py-24 bg-dark-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Projects</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-2"></div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => { setActiveTab(tab.value); setFlipped([]); }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.value
                  ? "bg-gradient-to-r from-accent to-primary text-white shadow-lg shadow-accent/25"
                  : "glassmorphism border border-gray-600 text-gray-300 hover:border-accent/50 hover:text-accent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => {
            const isFlipped = flipped.includes(i);
            return (
              <div key={`${activeTab}-${i}`} className="relative h-72 perspective-1000">
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${isFlipped ? "rotate-y-180" : ""}`}
                  onClick={() => toggle(i)}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden glassmorphism rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-accent/50">
                    <div className={`h-full bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center`}>
                      <div className="p-5 bg-white/10 rounded-full backdrop-blur-sm mb-4">
                        <project.icon className="text-white w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-white px-6 text-center">{project.title}</h3>
                      <p className="text-white/60 text-sm mt-2">Click to learn more</p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 glassmorphism rounded-2xl shadow-2xl border border-gray-700 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold mb-3 text-gradient">{project.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <div className="space-y-2 mt-4">
                      <LinkButton linkType={project.linkType} link={project.link} />
                      <button
                        onClick={(e) => { e.stopPropagation(); toggle(i); }}
                        className="w-full px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        Back
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
