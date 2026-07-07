
import { Table, TableBody,  TableRow } from '@/components/ui/table';
import TableHeaderComp from '@/app/shared/components/table/tableHeader';
import { columns } from './data';
import TableCellComp from '@/app/shared/components/table/tableCell';
import AvatarTableCell from '@/app/shared/components/table/avatarTableCell';
import { Doctor } from './types';
import GenericDropDownMenu from '@/app/features/admin/doctors/components/tableDropDown';
const DoctorsPage = async ({doctors}:{doctors:Doctor[]}) => {



  if (doctors && doctors.length > 0) {
    return (
      <div className="w-full h-full p-6">
    

        <div className="rounded-lg border">
          <Table>
           <TableHeaderComp columns={columns}/>
            <TableBody >
              {doctors.map((doctor, index) => (
                <TableRow key={doctor.id} >
                  <TableCellComp  type="number">{index+1}</TableCellComp>
                  <AvatarTableCell  fallbackText={doctor.profiles.fullName} imageUrl={doctor.profiles.avatar_url}/>
                  <TableCellComp type="string">{doctor.profiles.fullName}</TableCellComp>
        <TableCellComp type="string">{doctor.profiles.email}</TableCellComp>
        <TableCellComp type="string" badge>{doctor.specialty.specialty}</TableCellComp>
     
        <TableCellComp type="number" badge>{doctor.years_experience}</TableCellComp>
        <TableCellComp type="date">{doctor.profiles.created_at}</TableCellComp>
        <GenericDropDownMenu id={String(doctor.id)}/>
       
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