"use client"
import {

    ChevronDown,
    Settings,
    LogOut,
    Shield,
    Activity,
    Database,
    Moon,
    Sun,
    LayoutDashboard,
  } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
  } from "@/components/ui/dropdown-menu";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { cn } from "../../lib/cn";
import Logo from "./logo";
import ClockComp from "./clock";
import NotificationsComp from "./notifications";

  interface SystemStats {
    activeUsers: number;
    pendingApprovals: number;
    serverStatus: "healthy" | "degraded" | "down";
    responseTime: number;
    uptimePercentage: number;
    pendingUpdates: number;
  }
  
  interface Notification {
    id: string;
    type: "info" | "warning" | "critical" | "success";
    title: string;
    message: string;
    timestamp: Date;
    isRead: boolean;
  }
  
  interface AdminNavbarProps {
    // Admin Info
    adminName?: string;
    adminRole?: "Super Admin" | "System Admin" | "Compliance Officer" | "Auditor";
    adminAvatar?: string;
    
    // System Stats
    systemStats?: SystemStats;
    
    // Notifications
    notifications?: Notification[];
    notificationCount?: number;
    
    // Environment
    environment?: "production" | "staging" | "development";
    isOnline?: boolean;
    
    // Theme
    darkMode?: boolean;
    onThemeToggle?: () => void;
    
    // Callbacks
    onNotificationClick?: (notification: Notification) => void;
    onSettingsClick?: () => void;
    onLogout?: () => void;
    onViewAllNotifications?: () => void;
    
    className?: string;
  }
  
  export function AdminNavbar({
    adminName = "Dr. Sarah Chen",
    adminAvatar = "",
    darkMode = false,
    onThemeToggle,
    onNotificationClick,
    onSettingsClick,
    onLogout,
    onViewAllNotifications,
    className,
  }: AdminNavbarProps) {
   
  
    return (
      <header
        className={cn(
          " sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          className
        )}
      >
        <div className="flex h-16 items-center justify-between px-6">
       
<Logo/>
  
  
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <ClockComp/>
  
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={onThemeToggle}
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
  
         
  <NotificationsComp/>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 px-2 h-9"
                >
                  <Avatar className="h-8 w-8 border-2 border-primary/20">
                    <AvatarImage src={adminAvatar} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {adminName.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className=" flex-col items-start hidden lg:flex">
                    <span className="text-sm font-medium leading-none">
                      {adminName}
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground hidden lg:block" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{adminName}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
  
                {/* Admin-specific quick actions */}
                <DropdownMenuItem className="gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  Admin Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Database className="h-4 w-4" />
                  System Logs
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Activity className="h-4 w-4" />
                  Audit Trail
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem className="gap-2" onClick={onSettingsClick}>
                  <Settings className="h-4 w-4" />
                  Settings
                </DropdownMenuItem>
  
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="gap-2">
                    <Shield className="h-4 w-4" />
                    Admin Tools
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>User Management</DropdownMenuItem>
                    <DropdownMenuItem>Role Permissions</DropdownMenuItem>
                    <DropdownMenuItem>System Backup</DropdownMenuItem>
                    <DropdownMenuItem>Maintenance Mode</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
  
                <DropdownMenuSeparator />
                
                <DropdownMenuItem 
                  className="gap-2 text-red-600 focus:text-red-600"
                  onClick={onLogout}
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    );
  }