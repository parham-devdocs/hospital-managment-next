import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { cn } from "../shared/lib/cn";
import { AdminNavbar } from "../shared/components/navbar";
import Sidebar from "../shared/components/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import { SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@clerk/nextjs/server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: false,
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "500", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin panel for managing your application",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = await auth()

  return (
    <html
      lang="en"
      className={cn("h-full overflow-hidden", roboto.variable, inter.variable, "font-sans")}
    >
      <body className="h-full overflow-hidden">
        <ClerkProvider>
          <TooltipProvider>
            <SidebarProvider>
              <div className="flex h-screen w-full overflow-hidden">
                {isAuthenticated && <Sidebar />}
                <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                  <AdminNavbar />
                  <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    <div className="p-6">
                      {children}
                    </div>
                  </main>
                </div>
              </div>
            </SidebarProvider>
          </TooltipProvider>
          <Toaster />
        </ClerkProvider>
      </body>
    </html>
  );
}