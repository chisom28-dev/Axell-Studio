import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-[#0a0a0a]",
        {
          "bg-brand text-black hover:bg-brand-hover": variant === "primary",
          "bg-white/10 text-white hover:bg-white/20": variant === "secondary",
          "border border-white/20 text-white hover:bg-white/5": variant === "outline",
          "text-white hover:text-brand": variant === "ghost",
        },
        className
      )}
      {...props}
    />
  );
}
