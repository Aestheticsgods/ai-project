import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Coins,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Gift,
  Wallet,
  ChevronRight,
} from "lucide-react";

const rewardHistory = [
  {
    id: 1,
    type: "earned",
    title: "Intent Processing Reward",
    description: "DataMiner Pro completed 50 intents",
    amount: "+125 SKAI",
    date: "2 hours ago",
  },
  {
    id: 2,
    type: "earned",
    title: "Collaboration Bonus",
    description: "Multi-agent task completion",
    amount: "+75 SKAI",
    date: "5 hours ago",
  },
  {
    id: 3,
    type: "spent",
    title: "Agent Upgrade",
    description: "NLP Specialist Pro License",
    amount: "-50 SKAI",
    date: "1 day ago",
  },
  {
    id: 4,
    type: "earned",
    title: "Network Contribution",
    description: "Weekly staking rewards",
    amount: "+200 SKAI",
    date: "2 days ago",
  },
  {
    id: 5,
    type: "earned",
    title: "Referral Reward",
    description: "New user joined via your link",
    amount: "+50 SKAI",
    date: "3 days ago",
  },
];

const earningsBreakdown = [
  { label: "Intent Processing", value: 1245, percentage: 50.8 },
  { label: "Collaboration Bonus", value: 520, percentage: 21.2 },
  { label: "Staking Rewards", value: 435, percentage: 17.8 },
  { label: "Referral Rewards", value: 250, percentage: 10.2 },
];

export default function Rewards() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Rewards & Earnings</h1>
            <p className="text-muted-foreground">
              Track your SKAI token earnings and rewards history
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Wallet size={18} className="mr-2" />
              Withdraw
            </Button>
            <Button variant="hero">
              <Gift size={18} className="mr-2" />
              Claim Rewards
            </Button>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 md:col-span-2">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
                <h2 className="text-4xl font-bold text-primary">2,450 SKAI</h2>
                <p className="text-sm text-muted-foreground mt-1">≈ $1,225.00 USD</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-xl">
                <Coins size={28} className="text-primary" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/30 rounded-xl">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <TrendingUp size={16} />
                  <span className="text-sm font-medium">+12.5%</span>
                </div>
                <p className="text-lg font-semibold">+$152</p>
                <p className="text-xs text-muted-foreground">This Month</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Clock size={16} />
                  <span className="text-sm font-medium">Pending</span>
                </div>
                <p className="text-lg font-semibold">125 SKAI</p>
                <p className="text-xs text-muted-foreground">Processing</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-semibold mb-4">Earnings Breakdown</h3>
            <div className="space-y-3">
              {earningsBreakdown.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.label}</span>
                    <span className="font-medium">{item.value} SKAI</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="glass-card p-6 text-left hover:border-primary/40 transition-colors group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Stake SKAI</h3>
                <p className="text-sm text-muted-foreground">Earn up to 12% APY</p>
              </div>
              <ChevronRight
                size={20}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>
          </button>
          <button className="glass-card p-6 text-left hover:border-primary/40 transition-colors group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Refer Friends</h3>
                <p className="text-sm text-muted-foreground">Earn 50 SKAI per referral</p>
              </div>
              <ChevronRight
                size={20}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>
          </button>
          <button className="glass-card p-6 text-left hover:border-primary/40 transition-colors group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">View Leaderboard</h3>
                <p className="text-sm text-muted-foreground">See top earners</p>
              </div>
              <ChevronRight
                size={20}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>
          </button>
        </div>

        {/* Transaction History */}
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            {rewardHistory.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-lg ${
                      item.type === "earned"
                        ? "bg-primary/10"
                        : "bg-destructive/10"
                    }`}
                  >
                    {item.type === "earned" ? (
                      <ArrowUpRight
                        size={20}
                        className="text-primary"
                      />
                    ) : (
                      <ArrowDownRight
                        size={20}
                        className="text-destructive"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      item.type === "earned" ? "text-primary" : "text-destructive"
                    }`}
                  >
                    {item.amount}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Transactions
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
