import logo from "@/assets/logo.png";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 animate-fade-in">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="animate-fade-in-up stagger-1">
            <img src={logo} alt="FixRite Logo" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-secondary-foreground/80 text-sm">
              Connecting skilled artisans with people who need their services. One fix at a time.
            </p>
          </div>
          
          <div className="animate-fade-in-up stagger-2">
            <h3 className="font-semibold mb-4">For Customers</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors link-underline">Find Artisans</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline">Pricing</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in-up stagger-3">
            <h3 className="font-semibold mb-4">For Artisans</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors link-underline">Sign Up</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline">Resources</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline">Support</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in-up stagger-4">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors link-underline">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/80">
            © 2025 FixRite. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/FixRiteng" className="hover:text-primary transition-all hover-scale">
              <Facebook className="w-5 h-5" />
            </a>
            {/* <a href="#" className="hover:text-primary transition-all hover-scale">
              <Twitter className="w-5 h-5" />
            </a> */}
            <a href="https://www.instagram.com/fixrite_ng/" className="hover:text-primary transition-all hover-scale">
              <Instagram className="w-5 h-5" />
            </a>
            {/* <a href="#" className="hover:text-primary transition-all hover-scale">
              <Linkedin className="w-5 h-5" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
