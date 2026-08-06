"use client"

import { forwardRef, useState } from "react"
import { cn } from "@/components/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid" | "ghost"
  size?: "sm" | "md" | "lg" | "full"
  as?: "button" | "a"
  href?: string
}

const glowStyle = {
  outline: {
    default: "0 0 0px rgba(255, 106, 0, 0)",
    hover: "0 0 15px rgba(255, 106, 0, 0.3)",
  },
  solid: {
    default: "0 0 10px rgba(255, 106, 0, 0.2)",
    hover: "0 0 25px rgba(255, 106, 0, 0.5)",
  },
  ghost: {
    default: "0 0 0px rgba(255, 106, 0, 0)",
    hover: "0 0 0px rgba(255, 106, 0, 0)",
  },
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "outline", size = "md", children, as = "button", href, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false)

    const base =
      "inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider select-none transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"

    const variants = {
      outline:
        "border border-border text-text-primary bg-transparent hover:bg-accent hover:border-accent hover:text-white",
      solid:
        "bg-accent text-white border border-accent hover:bg-accent-hover",
      ghost:
        "text-text-secondary hover:text-accent",
    }

    const sizes = {
      sm: "text-xs py-2 px-4 rounded-sm",
      md: "text-sm py-3 px-6 rounded-sm",
      lg: "text-base py-4 px-8 rounded-card",
      full: "text-sm py-4 px-6 rounded-card w-full",
    }

    const classes = cn(base, variants[variant], sizes[variant === "ghost" ? "sm" : size], className)

    const style = {
      boxShadow: isHovered ? glowStyle[variant].hover : glowStyle[variant].default,
      transform: isHovered ? "scale(1.03)" : "scale(1)",
    }

    const commonProps = {
      className: classes,
      style,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    }

    if (as === "a" && href) {
      return (
        <a
          href={href}
          {...commonProps}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} {...commonProps} {...props}>
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button, type ButtonProps }
