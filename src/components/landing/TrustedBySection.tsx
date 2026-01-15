import { Cloud, Container, Cpu, Zap } from "lucide-react";

export function TrustedBySection() {
  const logos = [
    { name: "Replicate", icon: Cpu },
    { name: "Docker", icon: Container },
    { name: "Neural Labs", icon: Zap },
    { name: "CloudAI", icon: Cloud },
  ];

  return (
    <section className="py-16 border-y border-border/30 bg-secondary/20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Powered by the best
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <logo.icon size={24} />
              <span className="font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
