import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in-down ${
      isScrolled ? "glass shadow-lg border-b border-border/50" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <img src={logo} alt="FixRite Logo" className="h-12 animate-float group-hover:scale-110 transition-transform" />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors link-underline font-semibold">
              Services
            </a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors link-underline font-semibold">
              How It Works
            </a>
            <a href="#artisans" className="text-foreground/80 hover:text-primary transition-colors link-underline font-semibold">
              Find Artisans
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hover-scale font-semibold">Sign In</Button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover-scale shadow-lg font-bold">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
