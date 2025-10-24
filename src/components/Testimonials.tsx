import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Head of Customer Success, TechCorp",
    image: testimonial1,
    content: "Our response time dropped from 4 hours to 30 seconds. Customer satisfaction scores increased by 45% in just 3 months. This AI chatbot is a game-changer.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "COO, RetailPro",
    image: testimonial2,
    content: "We handled Black Friday with zero additional staff. The chatbot managed 10,000+ conversations flawlessly. ROI was positive within 6 weeks.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StartupHub",
    image: testimonial3,
    content: "As a small team, we couldn't afford 24/7 support. Now our customers get instant help anytime. It's like having a full support team at a fraction of the cost.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container px-4 mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how businesses like yours are transforming customer service with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} headshot`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-primary/10 border border-primary/20">
            <div className="text-left">
              <div className="text-3xl font-bold text-primary-glow mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average rating from 1,200+ reviews</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
