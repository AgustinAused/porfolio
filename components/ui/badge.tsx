import * as React from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    secondary: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    destructive: "bg-red-500/20 text-red-300 border-red-500/30",
    outline: "text-gray-300 border-gray-500/30"
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 ${variants[variant]} ${className || ''}`}
      {...props}
    />
  )
}

export { Badge }
