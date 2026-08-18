
import { RedirectToSignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isAuthenticated, redirectToSignIn, userId } = await auth()

  if (!isAuthenticated) return redirectToSignIn()
  return (
  <div>{children}</div>
  );
}
