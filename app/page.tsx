import { createClient } from './utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()


  return (
    <ul className=' w-screen h-screen bg-amber-200'>
  <p>tgt</p>
    </ul>
  )
}