import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { cn } from '../../lib/cn'

const ThemeToggle = () => {
  const isDarkMode = true 
  
  const toggleTheme = () => {
    console.log('Toggle theme - Redux action will be dispatched here')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative h-9 w-9 rounded-full transition-all duration-200 hover:bg-accent/50 hover:scale-105 active:scale-95"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative flex items-center justify-center">
        <Sun 
          className={cn(
            "h-4 w-4 transition-all duration-300",
            isDarkMode ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          )} 
        />
        <Moon 
          className={cn(
            "absolute h-4 w-4 transition-all duration-300",
            isDarkMode ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          )} 
        />
      </div>
    </Button>
  )
}

export default ThemeToggle