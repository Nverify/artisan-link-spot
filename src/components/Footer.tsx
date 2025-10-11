import logo from "@/assets/logo.png";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="FixRite Logo" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-secondary-foreground/80 text-sm">
              Connecting skilled artisans with people who need their services. One fix at a time.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Customers</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Find Artisans</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Artisans</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Sign Up</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/80">
            © 2025 FixRite. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/FixRiteng" className="hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            {/* <a href="#" className="hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a> */}
            <a href="https://www.instagram.com/fixrite_ng/" className="hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            {/* <a href="#" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
