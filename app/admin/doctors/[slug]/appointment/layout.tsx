// app/dashboard/layout.tsx
export default function DashboardLayout({
  calendar,      
  appointments,   
}: {
  calendar: React.ReactNode;
  appointments: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm p-4 border-b">
        <h1 className="text-2xl font-bold text-gray-800">📊 Dashboard</h1>
      </header>

      <div className="container mx-auto p-6">
        <div className="flex gap-6">
          <div className="flex-[3] min-w-0">
            <div className="bg-white rounded-xl shadow-sm p-4">
              {calendar}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-6">
              {appointments}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}