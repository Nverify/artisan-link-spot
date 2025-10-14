import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-fade-in-down">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="FixRite Logo" className="h-10 animate-float" />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors link-underline">
              Services
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors link-underline">
              How It Works
            </a>
            <a href="#artisans" className="text-foreground hover:text-primary transition-colors link-underline">
              Find Artisans
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hover-scale">Sign In</Button>
            <Button variant="default" className="hover-scale">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
