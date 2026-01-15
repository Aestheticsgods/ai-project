import { cn } from "@/lib/utils";
import logoImage from "@/assets/ChatGPT Image 15 janv. 2026, 21_56_33.png";

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
        <img
          src={logoImage}
          alt="Rivoxa Logo"
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <span className={cn("font-bold tracking-tight", textSizes[size])}>
          <span className="text-green-500">Riv</span>
          <span className="text-white">oxa</span>
        </span>
      )}
    </div>
  );
}
