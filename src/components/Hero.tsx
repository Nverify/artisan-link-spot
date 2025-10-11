import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] -z-10" />
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium animate-fade-in-down">
              <Wrench className="w-4 h-4" />
              Connecting Skills with Needs
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up stagger-1">
              Find Trusted{" "}
              <span className="text-primary">Artisans</span> for Every Job
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up stagger-2">
              Connect with skilled professionals for all your repair, maintenance, and improvement needs. Quality work, fair prices, trusted service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              <Button size="lg" variant="default" className="group hover-scale">
                Find an Artisan
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="secondary" className="group hover-scale">
                <Users className="mr-2 w-4 h-4" />
                Join as Artisan
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4 animate-fade-in-up stagger-4">
              <div className="group">
                <div className="text-3xl font-bold text-foreground group-hover:animate-pulse-scale">1,200+</div>
                <div className="text-sm text-muted-foreground">Verified Artisans</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="group">
                <div className="text-3xl font-bold text-foreground group-hover:animate-pulse-scale">15,000+</div>
                <div className="text-sm text-muted-foreground">Jobs Completed</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="group">
                <div className="text-3xl font-bold text-foreground group-hover:animate-pulse-scale">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up stagger-2">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 shadow-[var(--shadow-soft)] animate-float">
              <img 
                src="/artisan-hero.jpg" 
                alt="Professional artisan at work" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-[var(--shadow-card)] border border-border animate-slide-in-left stagger-4 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group">
                  <Wrench className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Quick Response</div>
                  <div className="text-sm text-muted-foreground">Average 2hr reply time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
