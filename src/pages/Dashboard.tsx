import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import {
  X,
  Bot,
  Zap,
  Award,
  Clock,
  Users,
  Rocket,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Calendar,
  Star,
  BarChart3,
} from "lucide-react";
import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// Mock data
const resourceData = [
  { month: "Jan", cpu: 45, gpu: 30 },
  { month: "Feb", cpu: 52, gpu: 38 },
  { month: "Mar", cpu: 48, gpu: 42 },
  { month: "Apr", cpu: 61, gpu: 55 },
  { month: "May", cpu: 55, gpu: 48 },
  { month: "Jun", cpu: 67, gpu: 62 },
];

const recentActivity = [
  { type: "intent", title: "Intent Completed", subtitle: "Data Analysis Agent #3", reward: "+25 SKAI" },
  { type: "deploy", title: "Agent Deployed", subtitle: "New NLP Specialist", status: "Active" },
  { type: "collab", title: "Collaboration Success", subtitle: "Multi-agent task completed", reward: "+40 SKAI" },
];

const topAgents = [
  { name: "DataMiner Pro", rating: 4.9, efficiency: "98.5%", earnings: "1,245 SKAI" },
  { name: "NLP Specialist", rating: 4.8, efficiency: "96.2%", earnings: "892 SKAI" },
  { name: "Vision Analyst", rating: 4.7, efficiency: "94.8%", earnings: "654 SKAI" },
];

const upcomingEvents = [
  { title: "AI Hackathon 2024", date: "Dec 28", type: "hackathon" },
  { title: "Network Upgrade v2.5", date: "Jan 5", type: "release" },
  { title: "Agent Challenge #12", date: "Jan 10", type: "challenge" },
];

export default function Dashboard() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Notification Banner */}
        {showBanner && (
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 flex items-center justify-between animate-slide-up">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Sparkles className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-primary">New Agent Development Challenge!</h4>
                <p className="text-sm text-muted-foreground">
                  Create specialized AI agents for emerging use cases and earn rewards. Join now!
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X size={18} className="text-muted-foreground" />
            </button>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, SkAInet!</h1>
            <p className="text-muted-foreground">Monitor your AI agents and network contributions</p>
          </div>
          <div className="hidden md:block">
            <Logo size="lg" showText={false} />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
          <div className="glass-card p-6 hover-lift">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Agents</p>
                <h3 className="text-3xl font-bold mt-1">7</h3>
                <p className="text-xs text-muted-foreground mt-1">AI agents currently deployed</p>
              </div>
              <div className="p-2 bg-secondary rounded-lg">
                <Bot size={20} className="text-primary" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6 hover-lift">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Intents Processed</p>
                <h3 className="text-3xl font-bold mt-1">1,337</h3>
                <p className="text-xs text-muted-foreground mt-1">Successfully completed intents</p>
              </div>
              <div className="p-2 bg-secondary rounded-lg">
                <Zap size={20} className="text-neon-blue" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6 hover-lift">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Network Score</p>
                <h3 className="text-3xl font-bold mt-1">92.5</h3>
                <p className="text-xs text-muted-foreground mt-1">Agent performance rating</p>
              </div>
              <div className="p-2 bg-secondary rounded-lg">
                <Award size={20} className="text-neon-purple" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6 hover-lift">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <h3 className="text-3xl font-bold mt-1 text-primary">2,450 SKAI</h3>
                <p className="text-xs text-muted-foreground mt-1">Tokens earned from intent processing</p>
              </div>
              <div className="p-2 bg-secondary rounded-lg">
                <Clock size={20} className="text-neon-cyan" />
              </div>
            </div>
          </div>
        </div>

        {/* Agent Performance */}
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4">Agent Performance</h3>
          <div className="relative h-4 bg-secondary rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-neon-cyan rounded-full"
              style={{ width: "75%" }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">75% - Network efficiency rating</p>
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Agent Metrics */}
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-4">Agent Metrics</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Agent Uptime</span>
                  <span className="text-primary">98.5%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "98.5%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Response Time</span>
                  <span className="text-muted-foreground">125ms avg</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-neon-blue rounded-full" style={{ width: "75%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Success Rate</span>
                  <span className="text-primary">95.2%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-neon-cyan rounded-full" style={{ width: "95.2%" }} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-border/40">
              <div>
                <p className="text-2xl font-bold">2,347</p>
                <p className="text-xs text-muted-foreground">Total Intents</p>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </div>
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-xs text-muted-foreground">Collaborations</p>
                <p className="text-xs text-muted-foreground">With other agents</p>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-4">
              <BarChart3 size={16} className="mr-2" />
              View Detailed Analytics
            </Button>
          </div>

          {/* Resource Utilization */}
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-2">Resource Utilization</h3>
            <p className="text-sm text-muted-foreground mb-4">GPU and CPU usage over the last 6 months</p>
            
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={resourceData}>
                  <defs>
                    <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gpuGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(200, 100%, 50%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(200, 100%, 50%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
                  <XAxis dataKey="month" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                  <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(220, 20%, 8%)",
                      border: "1px solid hsl(220, 15%, 18%)",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="cpu"
                    stroke="hsl(142, 71%, 45%)"
                    fill="url(#cpuGradient)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="gpu"
                    stroke="hsl(200, 100%, 50%)"
                    fill="url(#gpuGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="flex gap-4 mt-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">CPU</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neon-blue" />
                <span className="text-sm text-muted-foreground">GPU</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-4">Recent Activity</h3>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.subtitle}</p>
                  </div>
                  {activity.reward && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {activity.reward}
                    </span>
                  )}
                  {activity.status && (
                    <span className="px-2 py-1 bg-neon-blue/10 text-neon-blue text-xs font-medium rounded-full">
                      {activity.status}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <Rocket size={24} className="text-primary" />
                <span className="text-xs text-center">Deploy Agent</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <Zap size={24} className="text-neon-blue" />
                <span className="text-xs text-center">Create Intent</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <Users size={24} className="text-neon-purple" />
                <span className="text-xs text-center">Join Collab</span>
              </button>
            </div>
          </div>

          {/* Top Performing Agents */}
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-4">Top Performing Agents</h3>
            <div className="space-y-3">
              {topAgents.map((agent, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{agent.name}</p>
                      <p className="text-xs text-muted-foreground">Efficiency: {agent.efficiency}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star size={12} fill="currentColor" />
                      <span className="text-sm font-medium">{agent.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{agent.earnings}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
