import { SignIn } from '@clerk/nextjs'
import logo from "@/public/images/images.jpeg";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn
        appearance={{
          variables: {
            colorPrimary: '#4A4ACB',
            borderRadius: '1rem',
          },
          elements: {
            formButtonPrimary: 'bg-blue-500 hover:bg-blue-600',
            card: 'shadow-lg',
            footerAction: 'hidden',
            footerActionLink: 'hidden',
          },
                 }}
        fallbackRedirectUrl="/"
        forceRedirectUrl="/"
        signUpFallbackRedirectUrl="/"
        signUpUrl="/"
        signUpForceRedirectUrl="/"
      />
    </div>
  )
}