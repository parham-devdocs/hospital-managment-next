"use client";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { cn } from "../../lib/cn";
import Logo from "./logo";
import ClockComp from "./clock";
import NotificationsComp from "./notifications";
import Name from "./name";
import ThemeToggle from "./lightMode-darkMode";

interface AdminNavbarProps {
  className?: string;
}

export function AdminNavbar({ className }: AdminNavbarProps) {
  return (
    <header
      className={cn(
        " z-50 w-full border-b backdrop-blur-md supports-[backdrop-filter]:bg-background/50",
        className
      )}
    >
      <div className="flex h-16 items-center justify-between px-6">
        <Logo />

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <ClockComp />
          <ThemeToggle />
          <NotificationsComp />
          <DropdownMenu>
            <Name />
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
