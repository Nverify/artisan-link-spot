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
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Services We Cover
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From minor repairs to major projects, find skilled artisans for every need
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover-lift hover-glow transition-all cursor-pointer group border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all group-hover:rotate-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {service.description}
                </p>
                <div className="text-xs text-primary font-medium">
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
