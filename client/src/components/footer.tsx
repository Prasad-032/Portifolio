import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="glassmorphism py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <p className="text-gray-300 text-lg" data-testid="copyright">
            &copy; 2024 Devivaraprasad Killampudi. All rights reserved.
          </p>
          <p className="text-gray-400" data-testid="designer-credit">
            Designed by Devivaraprasad Killampudi
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center text-gradient hover:scale-110 transition-all duration-300 font-semibold"
            data-testid="back-to-top"
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
