import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/src/shared/lib/cn";
import { auth } from "@clerk/nextjs/server";
import { RedirectToSignIn } from "@clerk/nextjs";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = await auth()

  if (!isAuthenticated) return RedirectToSignIn({redirectUrl:"/signIn"})
  return (
  <div>{children}</div>
  );
}
