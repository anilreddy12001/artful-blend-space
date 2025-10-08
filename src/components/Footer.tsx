import { Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#8B798A] py-12 sm:py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              ANONYMOUS<br />HOPE<br />FOUNDATION
            </h3>
            <div className="space-y-2 text-[#000000] text-sm sm:text-base">
              <p>Contact: +91 9****9****</p>
              <p>Email: anonymoushopefoundation@gmail.com</p>
              <p>Chowk, Lucknow</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center">
            <div className="w-2 rounded-xl h-full bg-border" />
          </div>
          
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-foreground">FOLLOW US ON:</h4>
            <div className="flex gap-4 mb-6 sm:mb-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="mailto:contact@example.com" className="text-primary hover:text-primary/80 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
            
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-foreground">Quick Links</h4>
              <div className="space-y-2 text-sm sm:text-base">
                <Link to="/about" className="block text-[#ffffff] hover:text-[#000000] transition-colors">
                  About Us
                </Link>
                <Link to="/what-we-do" className="block text-[#ffffff] hover:text-[#000000] transition-colors">
                  What We Do
                </Link>
                <Link to="/be-a-part" className="block text-[#ffffff] hover:text-[#000000] transition-colors">
                  Be A Part
                </Link>
                <Link to="/contact" className="block text-[#ffffff] hover:text-[#000000] transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
