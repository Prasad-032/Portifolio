import { useState } from "react";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mayvlrpg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient" data-testid="contact-title">Contact Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-2 mb-6"></div>
          <p className="text-gray-200 text-xl" data-testid="contact-subtitle">Let's connect and build something amazing together!</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glassmorphism rounded-2xl p-10 border border-gray-700 hover-glow transition-all duration-500" data-testid="contact-form-container">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-6 py-4 bg-dark/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300 backdrop-blur-sm"
                  placeholder="Your Name"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 bg-dark/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-6 py-4 bg-dark/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300 resize-none backdrop-blur-sm"
                  placeholder="Your message here..."
                  data-testid="textarea-message"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-accent/25"
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-10 border border-gray-700 hover-glow transition-all duration-500" data-testid="contact-info-container">
              <h3 className="text-2xl font-bold mb-8 text-gradient">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3" data-testid="contact-email">
                  <Mail className="text-accent text-lg" />
                  <span className="text-gray-300">Available via contact form</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="contact-location">
                  <MapPin className="text-accent text-lg" />
                  <span className="text-gray-300">Available for remote work</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="contact-response-time">
                  <Clock className="text-accent text-lg" />
                  <span className="text-gray-300">Response within 24 hours</span>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="glassmorphism rounded-2xl p-10 border border-gray-700 hover-glow transition-all duration-500" data-testid="social-media-container">
              <h3 className="text-2xl font-bold mb-8 text-gradient">Connect With Me</h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/devivaraprasad-killampudi-500359261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 transform hover:scale-110"
                  data-testid="social-linkedin"
                >
                  <SiLinkedin className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/inevitable.32?igsh=N3RrOXZucjNubHdm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  data-testid="social-instagram"
                >
                  <SiInstagram className="text-xl" />
                </a>
                <a
                  href="https://github.com/Prasad-032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 transform hover:scale-110"
                  data-testid="social-github"
                >
                  <SiGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
