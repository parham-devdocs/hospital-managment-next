import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getDoctors } from './services';
import { Badge } from '@/components/ui/badge'; // Optional: if you have a Badge component

const DoctorsPage = async () => {
  const { data: doctors, error } = await getDoctors(0,2);

  if (!doctors && !error) {
    return (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
          <p className="mt-2 text-sm text-muted-foreground">Loading doctors...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="text-center text-red-500">
          <p className="font-semibold">Error loading doctors</p>
          <p className="text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  if (doctors && doctors.length > 0) {
    return (
      <div className="w-full h-full p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary">Doctors</h1>
          <p className="text-sm text-muted-foreground">
            {doctors.length} {doctors.length === 1 ? 'doctor' : 'doctors'} available
          </p>
        </div>

        <div className="rounded-lg border">
          <Table>
            <TableCaption>List of all doctors</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Specialty</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Joined</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {doctors.map((doctor, index) => (
                <TableRow key={doctor.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {doctor.profiles.fullName?.charAt(0) || 'D'}
                      </div>
                      {doctor.profiles.fullName || 'N/A'}
                    </div>
                  </TableCell>
                  <TableCell>{doctor.profiles.email || 'N/A'}</TableCell>
                  <TableCell>
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700">
                      {doctor.specialty?.specialty || 'Not specified'}
                    </span>
                  </TableCell>
                  <TableCell>{doctor.profiles.phone || 'N/A'}</TableCell>
                  <TableCell className="max-w-[150px] truncate">
                    {doctor.profiles.address || 'N/A'}
                  </TableCell>
                  <TableCell>{doctor.profiles.age || 'N/A'}</TableCell>
                  <TableCell>
                    <span className="capitalize">
                      {doctor.profiles.gender || 'N/A'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                      {doctor.years_experience || 0} years
                    </span>
                  </TableCell>
                  <TableCell className="text-xs">
                    {doctor.created_at 
                      ? new Date(doctor.created_at).toLocaleDateString() 
                      : 'N/A'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="text-center text-muted-foreground">
        <p>No doctors found</p>
      </div>
    </div>
  );
};

export default DoctorsPage;