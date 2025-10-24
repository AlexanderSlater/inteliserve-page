import { CheckCircle, Zap, Shield, Sparkles } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Instant Responses",
    description: "AI-powered chatbots respond in milliseconds, handling unlimited conversations simultaneously.",
  },
  {
    icon: CheckCircle,
    title: "24/7 Availability",
    description: "Never miss a customer query. Our bots work around the clock, every day of the year.",
  },
  {
    icon: Shield,
    title: "Consistent Quality",
    description: "Every response is accurate, on-brand, and backed by your knowledge base.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description: "Our AI learns from every interaction, getting smarter and more helpful over time.",
  },
];

export const Solution = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="container px-4 mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The AI-Powered{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Solution
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Transform your customer service with intelligent automation that scales infinitely without compromising quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                  <solution.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-lg">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col gap-2 px-8 py-6 rounded-2xl bg-accent/10 border border-accent/20">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-accent" />
              <p className="text-lg font-semibold">Join 10,000+ companies already using AI chatbots</p>
            </div>
            <p className="text-muted-foreground">Average ROI achieved in under 3 months</p>
          </div>
        </div>
      </div>
    </section>
  );
};
