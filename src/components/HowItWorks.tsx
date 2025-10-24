import { Upload, Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your Data",
    description: "Import your FAQ, documentation, and knowledge base. We support all formats.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Customize & Train",
    description: "Fine-tune the AI to match your brand voice and train it on your specific use cases.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy Instantly",
    description: "Add the chatbot to your website, app, or messaging platform with one line of code.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Monitor & Optimize",
    description: "Track performance, gather insights, and continuously improve responses.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Minutes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From setup to deployment, we've made it incredibly simple.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[4.5rem] top-24 w-0.5 h-24 bg-gradient-to-b from-primary to-accent" />
              )}
              
              <div className="grid md:grid-cols-[auto_1fr] gap-6 mb-12">
                {/* Icon and step number */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <step.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-card">
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-2">Average setup time</p>
          <p className="text-4xl font-bold text-primary-glow">Under 15 minutes</p>
        </div>
      </div>
    </section>
  );
};
