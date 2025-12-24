import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Github, Twitter, Disc } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Marketplace", href: "/marketplace" },
      { label: "Pricing", href: "#" },
    ],
    Developers: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "#" },
      { label: "SDK", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-border/40 bg-background overflow-hidden">
      {/* Large faded SKAINET text */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden pointer-events-none">
        <span className="text-[20rem] font-bold text-muted/5 tracking-tighter select-none whitespace-nowrap translate-y-1/3">
          SKAINET
        </span>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="col-span-2">
            <Logo size="lg" className="mb-4" />
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Building the future of decentralized AI with autonomous agent swarms.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Disc size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 SKAINET. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ for the decentralized future
          </p>
        </div>
      </div>
    </footer>
  );
}
