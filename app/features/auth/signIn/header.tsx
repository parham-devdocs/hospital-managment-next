import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Header = () => {
  return (
    <CardHeader className="px-0 pt-0 pb-4 border-b border-primary/5">
      <div className="flex items-center gap-3">
        {/* Sign In Icon */}
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/5 text-primary">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
        </div>
        
        <div>
          <CardTitle className="text-base font-light tracking-wide">
            Sign In
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground/60">
            Welcome back to your account
          </CardDescription>
        </div>
      </div>
    </CardHeader>
  )
}

export default Header