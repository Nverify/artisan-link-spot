import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in-down ${
        isScrolled
          ? "glass shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <img
              src={logo}
              alt="FixRite Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain animate-float group-hover:scale-105 transition-transform drop-shadow-lg"
            />
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="#services"
              className="text-foreground/80 hover:text-primary transition-colors link-underline font-semibold text-sm xl:text-base"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-primary transition-colors link-underline font-semibold text-sm xl:text-base"
            >
              How It Works
            </a>
            <a
              href="#artisans"
              className="text-foreground/80 hover:text-primary transition-colors link-underline font-semibold text-sm xl:text-base"
            >
              Find Artisans
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              className="hover-scale font-semibold text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4"
            >
              Sign In
            </Button>
            <Button
              onClick={() => navigate("/artisan-signup")}
              className="bg-gradient-to-r from-primary to-secondary hover-scale shadow-lg font-bold text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4"
            >
              Join as Artisan
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
