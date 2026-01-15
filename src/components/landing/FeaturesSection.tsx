import { 
  Lightbulb, 
  Users, 
  Network, 
  Globe, 
  Link, 
  Gift, 
  BarChart3, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Intent-Based Architecture",
    description: "Define high-level goals and let agents determine optimal execution paths autonomously.",
    color: "text-neon-green",
  },
  {
    icon: Users,
    title: "Agent Specialization",
    description: "Deploy specialized agents optimized for specific tasks like NLP, vision, or data analysis.",
    color: "text-neon-blue",
  },
  {
    icon: Network,
    title: "Autonomous Collaboration",
    description: "Agents coordinate seamlessly, forming dynamic swarms to tackle complex multi-step tasks.",
    color: "text-neon-purple",
  },
  {
    icon: Globe,
    title: "Decentralized Network",
    description: "Resilient peer-to-peer infrastructure ensuring no single point of failure.",
    color: "text-neon-cyan",
  },
  {
    icon: Link,
    title: "Chain Agnostic",
    description: "Deploy across multiple blockchains with unified token economics and governance.",
    color: "text-neon-green",
  },
  {
    icon: Gift,
    title: "Developer Rewards",
    description: "Earn SKAI tokens for contributions, successful deployments, and network participation.",
    color: "text-neon-blue",
  },
  {
    icon: BarChart3,
    title: "Performance Metrics",
    description: "Real-time analytics on agent efficiency, success rates, and resource utilization.",
    color: "text-neon-purple",
  },
  {
    icon: Shield,
    title: "Secure Operations",
    description: "Enterprise-grade security with encrypted communications and access controls.",
    color: "text-neon-cyan",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionizing AI Development
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive platform for building, deploying, and monetizing decentralized AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card p-6 hover-lift group"
            >
              <div className={`inline-flex p-3 rounded-lg bg-secondary mb-4 ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
