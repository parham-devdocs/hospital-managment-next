import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  ChevronDown, 
  User, 
  LogOut, 
  Shield,
  UserCog
} from 'lucide-react'
import React from 'react'
import { useUser, SignOutButton, useSession } from '@clerk/nextjs'
import { Skeleton } from '@/components/ui/skeleton'

const Name = () => {
  const { user, isLoaded, isSignedIn } = useUser()

  // Get user claims/roles
  const getInitials = () => {
    if (!user?.fullName) return 'U'
    const names = user.fullName.split(' ')
    if (names.length === 1) return names[0].charAt(0).toUpperCase()
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase()
  }

  const getUserRole = () => {
    // Check for custom claims from your metadata
    const role = user?.publicMetadata?.role 
    
    if (role === 'admin') return { label: 'Administrator', icon: Shield, color: 'text-purple-500' }
    if (role === 'manager') return { label: 'Manager', icon: UserCog, color: 'text-blue-500' }
    if (role === 'user') return { label: 'User', icon: User, color: 'text-gray-500' }
    return null
  }

  const userRole = getUserRole()
  const initials = getInitials()

  // Loading state
  if (!isLoaded) {
    return (
      <div className="flex items-center gap-3 px-3 py-2">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-2 w-32" />
        </div>
      </div>
    )
  }

  if (!isSignedIn || !user) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-primary/5 transition-colors group focus:outline-none focus:ring-2 focus:ring-primary/20">
          {/* Avatar with status indicator */}
          <div className="relative">
            <Avatar className="h-8 w-8 ring-2 ring-primary/10 transition-all group-hover:ring-primary/30">
              <AvatarImage src={user.imageUrl} alt={user.fullName || 'User'} />
              <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">
                {initials}
              </AvatarFallback>
            </Avatar>
            {/* Online status indicator */}
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background" />
          </div>

          {/* User info - hidden on mobile */}
          <div className="hidden sm:flex flex-col items-start text-left">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground leading-tight">
                {user.fullName || user.username || 'User'}
              </span>
              {userRole && (
                <span className={`text-[10px] font-medium ${userRole.color} bg-primary/5 px-1.5 py-0.5 rounded`}>
                  {userRole.label}
                </span>
              )}
            </div>
            <span className="text-[11px] text-muted-foreground/70 leading-tight truncate max-w-[120px]">
              {user.primaryEmailAddress?.emailAddress || user.emailAddresses[0]?.emailAddress}
            </span>
          </div>

          <ChevronDown className="h-4 w-4 text-muted-foreground/50 transition-transform group-data-[state=open]:rotate-180 hidden sm:block" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.fullName || user.username || 'User'}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.primaryEmailAddress?.emailAddress || user.emailAddresses[0]?.emailAddress}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Role-based menu items */}
        <DropdownMenuItem className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>My Profile</span>
        </DropdownMenuItem>

       
        <SignOutButton>
          <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Name