import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bot,
  Plus,
  Search,
  MoreVertical,
  Play,
  Pause,
  Settings,
  Trash2,
  Star,
  TrendingUp,
  Clock,
} from "lucide-react";

const agents = [
  {
    id: 1,
    name: "DataMiner Pro",
    type: "Data Analysis",
    status: "active",
    uptime: "99.2%",
    intents: 1245,
    earnings: "1,245 SKAI",
    rating: 4.9,
  },
  {
    id: 2,
    name: "NLP Specialist",
    type: "Natural Language",
    status: "active",
    uptime: "98.1%",
    intents: 892,
    earnings: "892 SKAI",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Vision Analyst",
    type: "Computer Vision",
    status: "paused",
    uptime: "95.4%",
    intents: 654,
    earnings: "654 SKAI",
    rating: 4.7,
  },
  {
    id: 4,
    name: "CodeAssist AI",
    type: "Code Generation",
    status: "active",
    uptime: "97.8%",
    intents: 521,
    earnings: "521 SKAI",
    rating: 4.6,
  },
  {
    id: 5,
    name: "SentimentPro",
    type: "Sentiment Analysis",
    status: "active",
    uptime: "96.5%",
    intents: 432,
    earnings: "432 SKAI",
    rating: 4.5,
  },
];

export default function Agents() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">AI Agents</h1>
            <p className="text-muted-foreground">Manage and monitor your deployed agents</p>
          </div>
          <Button variant="hero">
            <Plus size={18} className="mr-2" />
            Deploy New Agent
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search agents..."
              className="pl-10 bg-secondary/50 border-border"
            />
          </div>
          <Button variant="outline">All Status</Button>
          <Button variant="outline">All Types</Button>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div key={agent.id} className="glass-card p-6 hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Bot className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{agent.name}</h3>
                    <p className="text-sm text-muted-foreground">{agent.type}</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <MoreVertical size={18} className="text-muted-foreground" />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                    agent.status === "active"
                      ? "bg-primary/10 text-primary"
                      : "bg-amber-500/10 text-amber-500"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      agent.status === "active" ? "bg-primary" : "bg-amber-500"
                    }`}
                  />
                  {agent.status === "active" ? "Active" : "Paused"}
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star size={14} fill="currentColor" />
                  <span className="text-sm font-medium">{agent.rating}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/40">
                <div>
                  <p className="text-lg font-bold">{agent.uptime}</p>
                  <p className="text-xs text-muted-foreground">Uptime</p>
                </div>
                <div>
                  <p className="text-lg font-bold">{agent.intents}</p>
                  <p className="text-xs text-muted-foreground">Intents</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary">{agent.earnings}</p>
                  <p className="text-xs text-muted-foreground">Earned</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  {agent.status === "active" ? (
                    <>
                      <Pause size={14} className="mr-1" /> Pause
                    </>
                  ) : (
                    <>
                      <Play size={14} className="mr-1" /> Resume
                    </>
                  )}
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Settings size={14} />
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Trash2 size={14} />
                </Button>
              </div>
            </div>
          ))}

          {/* Add New Agent Card */}
          <div className="glass-card p-6 border-dashed border-2 border-border/60 flex flex-col items-center justify-center text-center min-h-[320px] hover:border-primary/40 transition-colors cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4">
              <Plus size={32} className="text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Deploy New Agent</h3>
            <p className="text-sm text-muted-foreground">
              Create and configure a new AI agent for the network
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
