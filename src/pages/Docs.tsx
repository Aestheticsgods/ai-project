import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Book,
  Code,
  Rocket,
  Zap,
  Shield,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickStartGuides = [
  {
    title: "Getting Started",
    description: "Learn the basics of SKAINET and deploy your first agent",
    icon: Rocket,
    href: "#",
  },
  {
    title: "API Reference",
    description: "Complete API documentation for developers",
    icon: Code,
    href: "#",
  },
  {
    title: "Agent Development",
    description: "Build and deploy custom AI agents",
    icon: Zap,
    href: "#",
  },
  {
    title: "Security Best Practices",
    description: "Keep your agents and data secure",
    icon: Shield,
    href: "#",
  },
];

const docCategories = [
  {
    title: "Core Concepts",
    items: [
      "What is SKAINET?",
      "Decentralized AI Networks",
      "Intent-Based Architecture",
      "Agent Swarms",
    ],
  },
  {
    title: "Getting Started",
    items: [
      "Quick Start Guide",
      "Account Setup",
      "Your First Agent",
      "Understanding Intents",
    ],
  },
  {
    title: "Agent Development",
    items: [
      "Creating Agents",
      "Agent Types",
      "Configuration Options",
      "Testing & Debugging",
    ],
  },
  {
    title: "Marketplace",
    items: [
      "Publishing Agents",
      "Pricing Strategies",
      "Agent Reviews",
      "Monetization",
    ],
  },
];

export default function Docs() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Everything you need to build on SKAINET
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              className="pl-12 h-12 bg-secondary/50 border-border text-base"
            />
          </div>
        </div>

        {/* Quick Start Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStartGuides.map((guide) => (
            <a
              key={guide.title}
              href={guide.href}
              className="glass-card p-6 hover-lift group"
            >
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                <guide.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {guide.title}
              </h3>
              <p className="text-sm text-muted-foreground">{guide.description}</p>
            </a>
          ))}
        </div>

        {/* Documentation Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docCategories.map((category) => (
            <div key={category.title} className="glass-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Book size={18} className="text-primary" />
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {item}
                      <ChevronRight size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Help Banner */}
        <div className="glass-card p-8 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 text-center">
          <h2 className="text-2xl font-bold mb-2">Need Help?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Can't find what you're looking for? Our community and support team are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero">
              Join Discord
              <ExternalLink size={16} className="ml-2" />
            </Button>
            <Button variant="heroOutline">Contact Support</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
