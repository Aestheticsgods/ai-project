import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  Star,
  Download,
  TrendingUp,
  Bot,
  Zap,
  Eye,
  Users,
} from "lucide-react";

const marketplaceAgents = [
  {
    id: 1,
    name: "GPT-Vision Analyzer",
    author: "TechnoMancer Labs",
    description: "Advanced image analysis and object detection with natural language output",
    category: "Computer Vision",
    rating: 4.9,
    reviews: 234,
    downloads: 12500,
    price: "Free",
    trending: true,
  },
  {
    id: 2,
    name: "CodeCraft Pro",
    author: "Shadow Syndicate",
    description: "Multi-language code generation and optimization with context awareness",
    category: "Code Generation",
    rating: 4.8,
    reviews: 189,
    downloads: 9800,
    price: "50 SKAI",
    trending: true,
  },
  {
    id: 3,
    name: "DataFlow Orchestrator",
    author: "Earthbound Collective",
    description: "Automated data pipeline management and ETL processing",
    category: "Data Engineering",
    rating: 4.7,
    reviews: 156,
    downloads: 7600,
    price: "75 SKAI",
    trending: false,
  },
  {
    id: 4,
    name: "SentimentPulse",
    author: "Illuminated Order",
    description: "Real-time sentiment analysis across multiple data sources",
    category: "NLP",
    rating: 4.6,
    reviews: 98,
    downloads: 5400,
    price: "25 SKAI",
    trending: false,
  },
  {
    id: 5,
    name: "TranslateX",
    author: "Synthetic Spiritualists",
    description: "Neural machine translation supporting 120+ languages",
    category: "Translation",
    rating: 4.9,
    reviews: 312,
    downloads: 18900,
    price: "Free",
    trending: true,
  },
  {
    id: 6,
    name: "DocuMind AI",
    author: "TechnoMancer Labs",
    description: "Intelligent document processing and information extraction",
    category: "Document AI",
    rating: 4.5,
    reviews: 87,
    downloads: 4200,
    price: "100 SKAI",
    trending: false,
  },
];

const categories = [
  "All Categories",
  "Computer Vision",
  "NLP",
  "Code Generation",
  "Data Engineering",
  "Translation",
  "Document AI",
];

export default function Marketplace() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Agent Marketplace</h1>
            <p className="text-muted-foreground">
              Discover, deploy, and monetize AI agents from the community
            </p>
          </div>
          <Button variant="hero">
            <Zap size={18} className="mr-2" />
            Publish Your Agent
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search agents..."
              className="pl-10 bg-secondary/50 border-border"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.slice(0, 4).map((cat) => (
              <Button
                key={cat}
                variant={cat === "All Categories" ? "default" : "outline"}
                size="sm"
              >
                {cat}
              </Button>
            ))}
            <Button variant="outline" size="sm">
              <Filter size={14} className="mr-1" />
              More
            </Button>
          </div>
        </div>

        {/* Featured Banner */}
        <div className="glass-card p-8 bg-gradient-to-r from-primary/10 via-transparent to-accent/10">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary">Trending Now</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">TranslateX by Synthetic Spiritualists</h2>
          <p className="text-muted-foreground mb-4">
            The most downloaded translation agent this month. Supporting 120+ languages with neural accuracy.
          </p>
          <Button variant="hero" size="lg">
            <Download size={18} className="mr-2" />
            Install Free
          </Button>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketplaceAgents.map((agent) => (
            <div key={agent.id} className="glass-card p-6 hover-lift group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Bot className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{agent.name}</h3>
                      {agent.trending && (
                        <span className="px-1.5 py-0.5 bg-primary/10 text-primary text-xs rounded">
                          HOT
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{agent.author}</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {agent.description}
              </p>

              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star size={14} fill="currentColor" />
                  <span className="font-medium">{agent.rating}</span>
                  <span className="text-muted-foreground">({agent.reviews})</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Download size={14} />
                  <span>{(agent.downloads / 1000).toFixed(1)}k</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                <span
                  className={`font-semibold ${
                    agent.price === "Free" ? "text-primary" : "text-foreground"
                  }`}
                >
                  {agent.price}
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye size={14} className="mr-1" />
                    Preview
                  </Button>
                  <Button variant="hero" size="sm">
                    Install
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
