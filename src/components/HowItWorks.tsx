import { Search, UserCheck, Calendar, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Your Artisan",
    description: "Search by service type, location, and ratings to find the perfect match"
  },
  {
    icon: UserCheck,
    title: "Review & Compare",
    description: "Check profiles, ratings, and reviews from verified customers"
  },
  {
    icon: Calendar,
    title: "Book & Schedule",
    description: "Contact artisans directly and schedule at your convenience"
  },
  {
    icon: CheckCircle,
    title: "Get It Done",
    description: "Enjoy quality work from trusted professionals"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How FixRite Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting help from skilled artisans is simple and straightforward
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto shadow-lg shadow-primary/30">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
