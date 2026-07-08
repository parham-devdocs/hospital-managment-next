export interface Appointment {
  id: string;
  title: string;
  date: Date;
  time: string; // Optional time string like "14:30" or "2:30 PM"
  description?: string;
  status: "in_progress" | "completed" | "cancelled";
  patient?: {
    id: string;
    name: string;
    avatar_url?: string;
  };
  doctor?: {
    id: string;
    name: string;
    avatar_url?: string;
    specialty:{name:string}
  };
}

export interface PageProps{
  params: Promise < {
    slug: string[]
  } > ;
  searchParams: Promise < {
    [key: string]: string | string[] | undefined
  } > ;
}