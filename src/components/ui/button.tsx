"use client"

import { forwardRef, useState } from "react"
import { cn } from "@/lib/utils"

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
      "inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider transition-all duration-200 select-none"

    const variants = {
      outline:
        "border border-[var(--color-border)] text-[var(--color-text-primary)] bg-transparent hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white",
      solid:
        "bg-[var(--color-accent)] text-white border border-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]",
      ghost:
        "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]",
    }

    const sizes = {
      sm: "text-xs py-2 px-4 rounded-[var(--radius-sm)]",
      md: "text-sm py-3 px-6 rounded-[var(--radius-sm)]",
      lg: "text-base py-4 px-8 rounded-[var(--radius-card)]",
      full: "text-sm py-4 px-6 rounded-[var(--radius-card)] w-full",
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
