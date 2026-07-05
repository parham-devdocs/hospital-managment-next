import { cn } from '@/lib/utils'
import React from 'react'
import { Stethoscope, Sparkles, ChevronRight } from 'lucide-react'

interface HeaderProps {
  title: string
  subtitle?: string
  className?: string
  icon: React.ReactNode
}

function Header({ 
  title, 
  subtitle, 
  className,
  icon,
}: HeaderProps) {
  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden space-y-2 py-4 px-5 rounded-xl shadow-md transition-all",
     "bg-white","border border-primary/10 hover:shadow-lg",
        className
      )}
    >
      {/* Decorative gradient blob */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
      <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />

      {/* Content */}
      <div className="relative flex items-start gap-3">
        {/* Icon */}
          <div 
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg shadow-sm"
            style={{ 
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
              backgroundColor: 'hsl(var(--primary))'
            }}
         
          >
            {icon || <Stethoscope className="h-5 w-5" />}
          </div>

        {/* Text */}
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-primary md:text-2xl lg:text-3xl">
              {title}
            </h1>
            {subtitle && (
              <ChevronRight className="h-5 w-5 text-muted-foreground/50" />
            )}
          </div>
          
          {subtitle && (
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-6 rounded bg-primary/40" />
              <p className="text-sm text-muted-foreground/80 md:text-base">
                {subtitle}
              </p>
            </div>
          )}
        </div>

        {/* Optional badge */}
        {subtitle && (
          <div className="hidden md:flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3 w-3" />
            <span>Active</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header