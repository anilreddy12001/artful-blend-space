import { Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              ANONYMOUS<br />HOPE<br />FOUNDATION
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Contact: +91 9****9****</p>
              <p>Email: anonymoushopefoundation@gmail.com</p>
              <p>Chowk, Lucknow</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="w-px h-full bg-border" />
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-foreground">FOLLOW US ON:</h4>
            <div className="flex gap-4 mb-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@example.com" className="text-primary hover:text-primary/80 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link to="/what-we-do" className="block text-muted-foreground hover:text-primary transition-colors">
                  What We Do
                </Link>
                <Link to="/be-a-part" className="block text-muted-foreground hover:text-primary transition-colors">
                  Be A Part
                </Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
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
