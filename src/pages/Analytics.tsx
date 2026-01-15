import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Activity,
  Zap,
  Clock,
  Award,
  Calendar,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const intentData = [
  { date: "Mon", intents: 145, success: 142 },
  { date: "Tue", intents: 189, success: 182 },
  { date: "Wed", intents: 167, success: 161 },
  { date: "Thu", intents: 234, success: 228 },
  { date: "Fri", intents: 256, success: 251 },
  { date: "Sat", intents: 198, success: 195 },
  { date: "Sun", intents: 178, success: 175 },
];

const earningsData = [
  { month: "Jul", earnings: 1200 },
  { month: "Aug", earnings: 1450 },
  { month: "Sep", earnings: 1680 },
  { month: "Oct", earnings: 1890 },
  { month: "Nov", earnings: 2150 },
  { month: "Dec", earnings: 2450 },
];

const agentPerformance = [
  { name: "DataMiner Pro", score: 98.5, intents: 1245 },
  { name: "NLP Specialist", score: 96.2, intents: 892 },
  { name: "Vision Analyst", score: 94.8, intents: 654 },
  { name: "CodeAssist AI", score: 93.1, intents: 521 },
  { name: "SentimentPro", score: 91.5, intents: 432 },
];

const metrics = [
  {
    title: "Total Intents",
    value: "12,847",
    change: "+12.5%",
    trend: "up",
    icon: Zap,
  },
  {
    title: "Avg Response Time",
    value: "125ms",
    change: "-8.2%",
    trend: "down",
    icon: Clock,
  },
  {
    title: "Success Rate",
    value: "97.2%",
    change: "+2.1%",
    trend: "up",
    icon: Award,
  },
  {
    title: "Active Hours",
    value: "672h",
    change: "+15.3%",
    trend: "up",
    icon: Activity,
  },
];

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">
              Detailed performance metrics and insights
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Calendar size={16} className="mr-2" />
              Last 30 Days
            </Button>
            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div key={metric.title} className="glass-card p-6 hover-lift">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-secondary rounded-lg">
                  <metric.icon size={20} className="text-primary" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm ${
                    metric.trend === "up" ? "text-primary" : "text-neon-blue"
                  }`}
                >
                  {metric.trend === "up" ? (
                    <TrendingUp size={14} />
                  ) : (
                    <TrendingDown size={14} />
                  )}
                  {metric.change}
                </div>
              </div>
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.title}</p>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Intent Processing */}
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-4">Intent Processing (7 Days)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={intentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
                  <XAxis dataKey="date" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                  <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(220, 20%, 8%)",
                      border: "1px solid hsl(220, 15%, 18%)",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="intents"
                    fill="hsl(220, 15%, 25%)"
                    radius={[4, 4, 0, 0]}
                    name="Total Intents"
                  />
                  <Bar
                    dataKey="success"
                    fill="hsl(142, 71%, 45%)"
                    radius={[4, 4, 0, 0]}
                    name="Successful"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Earnings Trend */}
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-4">Earnings Trend (6 Months)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={earningsData}>
                  <defs>
                    <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
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
                    formatter={(value) => [`${value} SKAI`, "Earnings"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="earnings"
                    stroke="hsl(142, 71%, 45%)"
                    fill="url(#earningsGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Agent Performance Table */}
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4">Agent Performance Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Agent
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Performance Score
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Total Intents
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Progress
                  </th>
                </tr>
              </thead>
              <tbody>
                {agentPerformance.map((agent) => (
                  <tr key={agent.name} className="border-b border-border/20">
                    <td className="py-4 px-4 font-medium">{agent.name}</td>
                    <td className="py-4 px-4">
                      <span className="text-primary font-semibold">{agent.score}%</span>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{agent.intents}</td>
                    <td className="py-4 px-4">
                      <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${agent.score}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
