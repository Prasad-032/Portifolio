import profileImage from "@assets/WhatsApp Image 2025-08-23 at 08.52.57_9473b8d2_1755995610973.jpg";

export default function AboutSection() {
  const achievements = [
    "Completed 6+ internships, courses, projects",
    "Skilled in HTML, CSS, JavaScript, and React",
    "Strong problem-solving skills and attention to detail",
    "Open to new opportunities and challenges",
    "Always eager to learn and grow in web development"
  ];

  return (
    <section id="about" className="py-24 bg-dark-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient" data-testid="about-title">About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-2"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="glassmorphism p-6 rounded-xl">
              <p className="text-xl text-gray-200 leading-relaxed" data-testid="about-description">
                Hi, I'm <span className="text-accent font-semibold">Devivaraprasad Killampudi</span>, a passionate web developer with a keen interest in creating dynamic and responsive web applications. I love coding and continuously learning new technologies to enhance my skills.
              </p>
            </div>
            
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg glassmorphism hover:bg-accent/10 transition-all duration-300 group" data-testid={`achievement-${index}`}>
                  <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-200 group-hover:text-white transition-colors duration-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-r from-accent via-primary to-accent p-1 rounded-3xl hover-glow transition-all duration-500 animate-pulse-slow">
              <img 
                src={profileImage} 
                alt="Devivaraprasad Killampudi - Profile" 
                className="rounded-3xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                data-testid="profile-image"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-float" style={{animationDelay: "2s"}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-accent/5 to-primary/5 rounded-3xl blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
