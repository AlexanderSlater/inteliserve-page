import { AlertCircle, Clock, TrendingDown, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: Clock,
    title: "Slow Response Times",
    description: "Customers wait hours or days for simple answers, leading to frustration and abandoned purchases.",
  },
  {
    icon: TrendingDown,
    title: "High Support Costs",
    description: "Traditional support teams are expensive to scale, with costs rising as your business grows.",
  },
  {
    icon: Users,
    title: "Limited Availability",
    description: "Support teams can't work 24/7, leaving customers stranded outside business hours.",
  },
  {
    icon: AlertCircle,
    title: "Inconsistent Answers",
    description: "Different agents provide different answers, creating confusion and eroding trust.",
  },
];

export const Problem = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Customer Support is{" "}
            <span className="text-destructive">Breaking Down</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Traditional support models can't keep up with modern customer expectations. The cost of slow, inconsistent support is real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-destructive/10 border border-destructive/20">
            <AlertCircle className="w-8 h-8 text-destructive" />
            <div className="text-left">
              <p className="font-semibold">67% of customers leave after poor service</p>
              <p className="text-sm text-muted-foreground">Don't let outdated support systems cost you customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
