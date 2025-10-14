import logo from "@/assets/logo.png";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground py-12 sm:py-16 px-4 animate-fade-in overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-20 -z-10" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10">
          <div className="animate-fade-in-up stagger-1">
            <img src={logo} alt="FixRite Logo" className="h-10 sm:h-12 mb-4 sm:mb-6 brightness-0 invert" />
            <p className="text-secondary-foreground/90 text-xs sm:text-sm leading-relaxed font-medium">
              Connecting skilled artisans with people who need their services. One fix at a time.
            </p>
          </div>
          
          <div className="animate-fade-in-up stagger-2">
            <h3 className="font-bold mb-4 sm:mb-5 text-base sm:text-lg">For Customers</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-secondary-foreground/90">
              <li><a href="#" className="hover:text-primary transition-colors link-underline font-medium">Find Artisans</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline font-medium">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline font-medium">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline font-medium">Pricing</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in-up stagger-3">
            <h3 className="font-bold mb-4 sm:mb-5 text-base sm:text-lg">For Artisans</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-secondary-foreground/90">
              <li><a href="#" className="hover:text-primary transition-colors link-underline font-medium">Sign Up</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline font-medium">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline font-medium">Resources</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline font-medium">Support</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in-up stagger-4">
            <h3 className="font-bold mb-4 sm:mb-5 text-base sm:text-lg">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-secondary-foreground/90">
              <li><a href="#" className="hover:text-primary transition-colors link-underline font-medium">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline font-medium">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline font-medium">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors link-underline font-medium">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 sm:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-secondary-foreground/90 font-medium text-center md:text-left">
            © 2025 FixRite. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 sm:gap-5">
            <a href="https://www.facebook.com/FixRiteng" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-all hover-lift touch-manipulation">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="https://www.instagram.com/fixrite_ng/" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-all hover-lift touch-manipulation">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
