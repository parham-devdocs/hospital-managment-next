import { redirect } from 'next/navigation';

export default function AppointmentPage({
  params,
}: {
  params: { slug: string };
}) {
  const today = new Date().toISOString().split('T')[0];
  redirect(`/admin/doctors/${params.slug}/appointment/${today}`);
}