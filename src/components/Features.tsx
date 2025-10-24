import { Brain, Globe, Lock, BarChart3, MessageSquare, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Advanced NLP",
    description: "Understanding context and intent with state-of-the-art natural language processing.",
    benefit: "98% accuracy in understanding customer queries",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Communicate in 100+ languages without hiring multilingual staff.",
    benefit: "Expand globally without language barriers",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2.",
    benefit: "Your data stays secure and compliant",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into customer behavior, satisfaction, and pain points.",
    benefit: "Make data-driven decisions to improve service",
  },
  {
    icon: MessageSquare,
    title: "Seamless Handoff",
    description: "Smooth transition to human agents when needed, with full context.",
    benefit: "Hybrid approach for complex issues",
  },
  {
    icon: Zap,
    title: "Easy Integration",
    description: "Connect with your existing tools in minutes - no coding required.",
    benefit: "Works with Slack, Zendesk, Salesforce & more",
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Real Benefits
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to deliver exceptional customer experiences at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-accent">{feature.benefit}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
