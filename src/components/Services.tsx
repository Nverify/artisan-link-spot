import { Card } from "@/components/ui/card";
import { 
  Hammer, 
  Zap, 
  Droplet, 
  Paintbrush, 
  Construction, 
  Home,
  Wind,
  Fence
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Custom furniture, repairs, and woodwork",
    jobs: "850+ jobs"
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Wiring, installations, and repairs",
    jobs: "1,200+ jobs"
  },
  {
    icon: Droplet,
    title: "Plumbing",
    description: "Pipes, fixtures, and water systems",
    jobs: "980+ jobs"
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior and exterior painting",
    jobs: "720+ jobs"
  },
  {
    icon: Construction,
    title: "Masonry",
    description: "Brickwork, concrete, and stonework",
    jobs: "560+ jobs"
  },
  {
    icon: Home,
    title: "Roofing",
    description: "Roof repairs and installations",
    jobs: "440+ jobs"
  },
  {
    icon: Wind,
    title: "HVAC",
    description: "Heating and cooling systems",
    jobs: "620+ jobs"
  },
  {
    icon: Fence,
    title: "Welding",
    description: "Metal fabrication and repairs",
    jobs: "380+ jobs"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50 -z-10" />
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Services We Cover
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-medium px-4">
            From minor repairs to major projects, find skilled artisans for every need
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="relative p-6 sm:p-8 hover-lift hover-glow transition-all cursor-pointer group glass border-2 border-border/50 hover:border-primary/50 animate-fade-in-up overflow-hidden touch-manipulation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-[3rem] sm:rounded-bl-[4rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all group-hover:rotate-6 shadow-lg">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary font-bold bg-primary/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  {service.jobs}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
