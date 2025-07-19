import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
  color?: string
  align?: "left" | "center"
}

export default function SectionHeading({ color, title, description, className, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-6", align === "center" && "text-center", className)}>
      <h2 className={`text-4xl md:text-5xl text-${color ?? 'primary' } font-semibold tracking-tight mb-2`}>{title}</h2>
      {description && <p className={`text-${color ?? 'primary' } max-w-3xl`}>{description}</p>}
    </div>
  )
}

