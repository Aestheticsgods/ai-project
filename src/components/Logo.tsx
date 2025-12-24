import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("relative", sizes[size])}>
        {/* Logo icon - stylized X with neural network feel */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer glow circle */}
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          {/* X shape with nodes */}
          <path
            d="M12 12L28 28M28 12L12 28"
            stroke="url(#logoGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Center node */}
          <circle cx="20" cy="20" r="3" fill="url(#logoGradient)" />
          {/* Corner nodes */}
          <circle cx="12" cy="12" r="2" fill="hsl(142 71% 45%)" />
          <circle cx="28" cy="12" r="2" fill="hsl(200 100% 50%)" />
          <circle cx="12" cy="28" r="2" fill="hsl(200 100% 50%)" />
          <circle cx="28" cy="28" r="2" fill="hsl(142 71% 45%)" />
          {/* Gradient definition */}
          <defs>
            <linearGradient
              id="logoGradient"
              x1="10"
              y1="10"
              x2="30"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(142 71% 45%)" />
              <stop offset="1" stopColor="hsl(180 100% 40%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {showText && (
        <span className={cn("font-bold tracking-tight", textSizes[size])}>
          <span className="text-foreground">SKAI</span>
          <span className="text-primary">NET</span>
        </span>
      )}
    </div>
  );
}
