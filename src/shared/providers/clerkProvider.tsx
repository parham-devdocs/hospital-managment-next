import  { ReactNode } from 'react'

interface ClerkProviderProps {
  children: ReactNode
}

const ClerkProvider = ({ children }: ClerkProviderProps) => {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  )
}

export default ClerkProvider