import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate are the AI responses?",
    answer: "Our AI chatbots achieve 98%+ accuracy through advanced natural language processing and continuous learning from interactions. They're trained on your specific knowledge base and improve over time.",
  },
  {
    question: "Can the chatbot handle complex queries?",
    answer: "Yes! Our AI is designed to understand context, handle multi-turn conversations, and seamlessly hand off to human agents when needed. It can manage everything from simple FAQs to complex troubleshooting.",
  },
  {
    question: "How long does implementation take?",
    answer: "Most businesses are up and running in under 15 minutes. Simply upload your knowledge base, customize the settings, and deploy with a single line of code. No technical expertise required.",
  },
  {
    question: "What languages do you support?",
    answer: "We support 100+ languages with automatic translation. Your chatbot can communicate with customers worldwide without any additional configuration or multilingual staff.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level encryption, are fully compliant with GDPR, HIPAA, and SOC 2, and never share your data with third parties. Your information stays secure and private.",
  },
  {
    question: "What's the pricing structure?",
    answer: "We offer flexible plans based on conversation volume, starting with a generous free tier. Most businesses save 60%+ on support costs within the first 3 months. No hidden fees.",
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Yes! We integrate seamlessly with 50+ platforms including Slack, Zendesk, Salesforce, Shopify, and more. Our API allows custom integrations for any workflow.",
  },
  {
    question: "What if I need help or support?",
    answer: "We provide 24/7 support via chat, email, and phone. Our team of experts is always ready to help with setup, optimization, and any questions you have.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container px-4 mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our AI chatbot platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 animate-slide-up hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
