import { ArrowUp } from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="glassmorphism py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="text-2xl font-bold text-gradient">DK</div>

          <div className="flex gap-5">
            <a href="https://github.com/Prasad-032" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20">
              <SiGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/devivaraprasad-killampudi-500359261" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
              <SiLinkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/inevitable.32?igsh=N3RrOXZucjNubHdm" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20">
              <SiInstagram className="w-5 h-5" />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Devivaraprasad Killampudi. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-accent hover:scale-110 transition-all duration-300 font-medium text-sm"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
