import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Wrench className="w-4 h-4" />
              Join Our Community
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl text-white/90 mb-8">
              Whether you need help with a project or you're an artisan looking for work, FixRite connects you with the right people.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                Find an Artisan Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Sign Up as Artisan
              </Button>
            </div>
            
            <p className="text-white/80 text-sm mt-6">
              No credit card required • Free to browse • Trusted by thousands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
