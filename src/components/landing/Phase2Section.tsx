import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Lock, Smartphone } from "lucide-react";

const weeks = [
  {
    week: "Week 1",
    title: "Advanced Creator & Fan Features",
    description: "Focus on engagement, control, and real-time insights.",
    features: [
      "Enhanced creator profile customization",
      "Advanced content management (edit, schedule, and organize content)",
      "Fan engagement tools (likes, comments, follows, notifications)",
      "Improved dashboards with real-time analytics and activity tracking",
    ],
    icon: Zap,
  },
  {
    week: "Week 2",
    title: "Monetization & Payments",
    description: "Enable creators to generate revenue effortlessly and securely.",
    features: [
      "Flexible subscription plans (monthly & yearly)",
      "One-time payments and premium content access",
      "Secure payment gateway integration",
      "Creator revenue tracking and earnings insights",
    ],
    icon: CheckCircle2,
  },
  {
    week: "Week 3",
    title: "Performance, Security & Scalability",
    description: "Prepare the platform for growth and high traffic.",
    features: [
      "Backend performance optimization",
      "Optimized database queries and caching mechanisms",
      "Advanced security measures (rate limiting, enhanced validation)",
      "Scalability readiness for increased user demand",
    ],
    icon: Lock,
  },
  {
    week: "Week 4",
    title: "UX, Mobile & Final Enhancements",
    description: "Polish the experience and prepare for production launch.",
    features: [
      "UI/UX improvements based on user feedback",
      "Enhanced mobile responsiveness",
      "Robust error handling and edge-case testing",
      "Final testing, bug fixes, and deployment preparation",
    ],
    icon: Smartphone,
  },
];

const deliverables = [
  "A fully optimized and high-performance system",
  "A complete, monetization-ready ecosystem",
  "A secure and scalable infrastructure",
  "A refined user experience for creators and fans",
];

export function Phase2Section() {
  return (
    <section id="phase2" className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 inline-flex">
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent font-semibold">
              Phase 2 Roadmap
            </span>
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Advanced Features & Platform Optimization
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elevate the platform with advanced capabilities, optimized performance, seamless monetization,
            and a richer experience for both creators and fans.
          </p>
        </div>

        {/* Weekly Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {weeks.map((weekData, index) => {
            const Icon = weekData.icon;
            return (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {weekData.week}
                      </Badge>
                      <CardTitle className="text-lg">{weekData.title}</CardTitle>
                    </div>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardDescription className="text-xs">
                    {weekData.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {weekData.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Deliverables */}
        <Card className="bg-gradient-to-br from-primary/5 to-cyan-500/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              Phase 2 Deliverables
            </CardTitle>
            <CardDescription>
              By the end of Phase 2, the platform will include:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{deliverable}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Objective */}
        <div className="mt-12 p-6 rounded-lg border border-border bg-card">
          <h3 className="text-xl font-semibold mb-2">Objective</h3>
          <p className="text-muted-foreground">
            Elevate the platform with advanced capabilities, optimized performance, seamless monetization,
            and a richer experience for both creators and fans.
          </p>
        </div>
      </div>
    </section>
  );
}
