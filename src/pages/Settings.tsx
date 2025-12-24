import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  User,
  Shield,
  Bell,
  Key,
  Palette,
  Globe,
  Save,
  Copy,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    rewards: true,
    agents: false,
  });

  const apiKey = "sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 max-w-4xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>

        {/* Profile Section */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <User size={20} className="text-primary" />
            <h2 className="font-semibold">Profile Settings</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Display Name</Label>
              <Input
                id="name"
                defaultValue="SkAIent"
                className="bg-secondary/50 border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                defaultValue="user@skainet.ai"
                className="bg-secondary/50 border-border"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="bio">Bio</Label>
              <textarea
                id="bio"
                rows={3}
                className="w-full px-3 py-2 bg-secondary/50 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                defaultValue="AI enthusiast building decentralized agents on SKAINET."
              />
            </div>
          </div>

          <Button className="mt-4" variant="hero">
            <Save size={16} className="mr-2" />
            Save Changes
          </Button>
        </div>

        {/* API Keys */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <Key size={20} className="text-primary" />
            <h2 className="font-semibold">API Keys</h2>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="mb-2 block">Your API Key</Label>
              <div className="flex gap-2">
                <Input
                  value={apiKey}
                  readOnly
                  className="bg-secondary/50 border-border font-mono text-sm"
                />
                <Button variant="outline" size="icon">
                  <Copy size={16} />
                </Button>
                <Button variant="outline" size="icon">
                  <RefreshCw size={16} />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Keep your API key secure. Never share it publicly.
              </p>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell size={20} className="text-primary" />
            <h2 className="font-semibold">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Receive updates via email
                </p>
              </div>
              <Switch
                checked={notifications.email}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, email: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Browser push notifications
                </p>
              </div>
              <Switch
                checked={notifications.push}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, push: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Reward Alerts</p>
                <p className="text-sm text-muted-foreground">
                  Get notified when you earn SKAI tokens
                </p>
              </div>
              <Switch
                checked={notifications.rewards}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, rewards: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Agent Updates</p>
                <p className="text-sm text-muted-foreground">
                  Status changes for your agents
                </p>
              </div>
              <Switch
                checked={notifications.agents}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, agents: checked })
                }
              />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield size={20} className="text-primary" />
            <h2 className="font-semibold">Security</h2>
          </div>

          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              Change Password
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Enable Two-Factor Authentication
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Connected Wallets
            </Button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="glass-card p-6 border-destructive/30">
          <h2 className="font-semibold text-destructive mb-4">Danger Zone</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Button variant="destructive">Delete Account</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
