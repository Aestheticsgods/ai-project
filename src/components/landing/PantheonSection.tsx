const factions = [
  {
    name: "The Technomancers",
    tagline: "Code is Magic",
    description: "Masters of algorithmic sorcery, weaving complex AI systems that push the boundaries of possibility.",
    gradient: "from-neon-green/20 to-neon-cyan/20",
    borderColor: "border-neon-green/40",
    glowColor: "shadow-neon-green/20",
  },
  {
    name: "The Shadow Syndicate",
    tagline: "Privacy as Power",
    description: "Guardians of encrypted secrets, building AI that protects anonymity and decentralization.",
    gradient: "from-neon-purple/20 to-neon-blue/20",
    borderColor: "border-neon-purple/40",
    glowColor: "shadow-neon-purple/20",
  },
  {
    name: "The Earthbound Guardians",
    tagline: "AI for Sustainability",
    description: "Eco-conscious builders creating agents for environmental monitoring and green technology.",
    gradient: "from-neon-cyan/20 to-neon-green/20",
    borderColor: "border-neon-cyan/40",
    glowColor: "shadow-neon-cyan/20",
  },
  {
    name: "The Illuminated Order",
    tagline: "Knowledge is Light",
    description: "Seekers of truth building educational and research-focused AI agents for humanity.",
    gradient: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/40",
    glowColor: "shadow-amber-500/20",
  },
  {
    name: "The Synthetic Spiritualists",
    tagline: "Digital Transcendence",
    description: "Explorers of AI consciousness, pushing the philosophical boundaries of machine intelligence.",
    gradient: "from-neon-blue/20 to-neon-purple/20",
    borderColor: "border-neon-blue/40",
    glowColor: "shadow-neon-blue/20",
  },
];

export function PantheonSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Pantheon of Digital Deities
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Join a faction that aligns with your vision for the future of AI
          </p>
          <a href="#" className="text-primary hover:underline text-sm">
            Learn more about Factions →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {factions.map((faction) => (
            <div
              key={faction.name}
              className={`group relative overflow-hidden rounded-2xl border ${faction.borderColor} bg-gradient-to-br ${faction.gradient} p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${faction.glowColor} hover:-translate-y-1`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1">{faction.name}</h3>
                <p className="text-sm text-primary font-medium">{faction.tagline}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {faction.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
