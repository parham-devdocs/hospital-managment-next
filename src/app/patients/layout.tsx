import { auth } from '@clerk/nextjs/server'
import React from 'react'

const DoctorLayout =async ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const { isAuthenticated, redirectToSignIn} = await auth()
 
    if (!isAuthenticated) return redirectToSignIn()
  return (
    <div>{children}</div>
  )
}

export default DoctorLayout