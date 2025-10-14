import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-foreground text-sm font-semibold animate-fade-in-down shadow-lg">
              <Wrench className="w-4 h-4 text-primary" />
              Connecting Skills with Needs
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] animate-fade-in-up stagger-1">
              Find Trusted{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">Artisans</span> for Every Job
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up stagger-2">
              Connect with skilled professionals for all your repair, maintenance, and improvement needs. Quality work, fair prices, trusted service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              <Button size="lg" className="group hover-scale hover-glow shadow-lg text-base h-14 px-8 bg-gradient-to-r from-primary to-secondary">
                Find an Artisan
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group hover-scale glass border-2 text-base h-14 px-8">
                <Users className="mr-2 w-5 h-5" />
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
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-3xl opacity-50 animate-pulse-scale" />
            <div className="relative aspect-square rounded-3xl glass p-4 shadow-[var(--shadow-elegant)] animate-float">
              <img 
                src="/artisan-hero.jpg" 
                alt="Professional artisan at work" 
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105 shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 shadow-[var(--shadow-elegant)] border-2 border-primary/20 animate-slide-in-left stagger-4 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group shadow-lg">
                  <Wrench className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">Quick Response</div>
                  <div className="text-sm text-muted-foreground font-medium">Average 2hr reply time</div>
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
