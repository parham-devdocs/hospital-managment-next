import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Header = () => {
  return (
    <CardHeader className="px-0 pt-0 pb-4 border-b border-primary/5">
      <div className="flex items-center gap-3">
        {/* Thin Icon */}
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
            <path d="M12 4v16M4 12h16"/>
          </svg>
        </div>
        
        <div>
          <CardTitle className="text-base font-light tracking-wide">
            Registration
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground/60">
            Create your account
          </CardDescription>
        </div>
      </div>
    </CardHeader>
  )
}

export default Header