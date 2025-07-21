"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "../ui/label"

interface ModernInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
  error?: string
  wrapperClassName?: string
  labelClassName?: string
  id?: string
}

export function HInput({
  label,
  description,
  error,
  className,
  wrapperClassName,
  labelClassName,
  id,
  ...props
}: ModernInputProps) {
  const inputId = React.useId()

  return (
    <div className={cn("space-y-2", wrapperClassName)}>
      {label && (
        <Label
          htmlFor={id || inputId}
          className={cn("text-lg font-medium text-primary", labelClassName)}
        >
          {label}
        </Label>
      )}
      <Input
        id={id || inputId}
        className={cn(
          "rounded-xl transition-all shadow-sm",
          error ? "border-red-500 focus:ring-red-500" : "",
          className,
        )}
        {...props}
      />
      {description && !error && <p className="text-xs text-primary">{description}</p>}
      {error && <p className="text-sm text-red-500 bg-third py-1 px-2 rounded-3xl w-fit">{error}</p>}
    </div>
  )
}
