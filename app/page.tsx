import { createClient } from './utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)


  const { data: patient, error } = await supabase
  .from('patient')
  .select('*')
          console.log(patient)
  return (
    <ul className=' w-screen h-screen bg-amber-200'>
      {patient?.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  )
}