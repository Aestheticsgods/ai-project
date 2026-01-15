import aiNetwork from "@/assets/ai-network.png";
import marketplaceVisual from "@/assets/marketplace-visual.png";

const platformItems = [
  {
    title: "Intent-Driven AI Network",
    description: "Define your goals in natural language. Our network of specialized agents collaborates to break down complex tasks, route them to the right specialists, and deliver comprehensive solutions.",
    image: aiNetwork,
    reversed: false,
  },
  {
    title: "Agent Marketplace",
    description: "Discover, deploy, and monetize AI agents. Browse specialized agents from the community, or publish your own to earn rewards with every successful task completion.",
    image: marketplaceVisual,
    reversed: true,
  },
];

export function PlatformSection() {
  return (
    <section id="platform" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for the Future of AI
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete ecosystem for decentralized artificial intelligence
          </p>
        </div>

        <div className="space-y-24">
          {platformItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col ${item.reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
                  <div className="relative glass-card p-2 rounded-2xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
