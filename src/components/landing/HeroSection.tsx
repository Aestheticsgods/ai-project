import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter, Disc } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary mb-8 animate-slide-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now in Public Beta
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Empowering a{" "}
            <span className="gradient-text">Decentralized</span>
            <br />
            AI Agent Swarm
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Build, deploy, and monetize specialized AI agents in a distributed network powered by Web3 and collective intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/register">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                View Dashboard
              </Button>
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 text-muted-foreground animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-sm">Join the community</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                <Disc size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 relative animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="relative mx-auto max-w-5xl">
            {/* Glow behind the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent blur-3xl" />
            
            {/* Image container with glassmorphism frame */}
            <div className="relative glass-card p-2 rounded-2xl overflow-hidden animate-float">
              <img
                src={dashboardPreview}
                alt="SKAINET Dashboard Preview"
                className="w-full rounded-xl shadow-2xl"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
