import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient -z-10" />
      <div className="container mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-primary via-primary-glow to-secondary p-12 lg:p-16 overflow-hidden animate-fade-in shadow-[var(--shadow-elegant)]">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-8 animate-pulse-scale shadow-lg border border-white/30">
              <Wrench className="w-4 h-4" />
              Join Our Community
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/95 mb-10 animate-fade-in-up stagger-1 font-medium leading-relaxed">
              Whether you need help with a project or you're an artisan looking for work, FixRite connects you with the right people.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-2">
              <Button size="lg" className="group hover-lift bg-white text-primary hover:bg-white/90 shadow-xl text-base h-14 px-8 font-bold">
                Find an Artisan Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover-lift border-2 border-white/30 shadow-xl text-base h-14 px-8 font-bold"
              >
                Sign Up as Artisan
              </Button>
            </div>
            
            <p className="text-white/80 text-sm mt-6 animate-fade-in-up stagger-3">
              No credit card required • Free to browse • Trusted by thousands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
