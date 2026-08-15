import { doctorTableColumns } from '@/src/app/data';
import TableCellComp from '@/src/shared/components/table/tableCell';
import { Table, TableBody, TableHeader, TableRow} from '@/components/ui/table';
import { mockDoctorsReponse } from '../../mocks';
import ActionButtons from './actionButtons';

const index = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">  

      <Table>
        
        <TableHeader className="bg-gray-50/80">
          <TableRow className="border-b border-gray-200">
            {doctorTableColumns.map((col) => (
              <TableCellComp
                key={col.key}
                className="font-semibold text-gray-700 text-sm py-3"
              >
                {col.label}
              </TableCellComp>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockDoctorsReponse.map((doctor) => (
            <TableRow
              key={doctor.id}
              className="odd:bg-gray-50/60 hover:bg-gray-100/80 transition-colors duration-150 border-b border-gray-100 last:border-0"
            >
              <TableCellComp>{doctor.fullName}</TableCellComp>
              <TableCellComp>{doctor.email}</TableCellComp>
              <TableCellComp>{doctor.phoneNumber}</TableCellComp>
              <TableCellComp>{doctor.gender}</TableCellComp>
              <TableCellComp>{doctor.specialties?.join(', ') || '—'}</TableCellComp>
              <TableCellComp badge type="number">
                {doctor.certificationCount}
              </TableCellComp>
              <TableCellComp badge type="number">
                {doctor.educationCount}
              </TableCellComp>
              <TableCellComp badge type="number">
                {doctor.workExperienceCount}
              </TableCellComp>
              <TableCellComp badge>
                {doctor.isActive ? 'Active' : 'Inactive'}
              </TableCellComp>
            <ActionButtons/>
            </TableRow>
          ))}
        </TableBody>

      </Table>
   
   </div>
  );
};

export default index