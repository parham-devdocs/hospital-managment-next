import { Table, TableBody, TableRow } from "@/components/ui/table";
import { columns } from "./data";
import { Doctor } from "./types";
import TableHeaderComp from "@/src/shared/components/table/tableHeader";
import TableCellComp from "@/src/shared/components/table/tableCell";
import AvatarTableCell from "@/src/shared/components/table/avatarTableCell";
import GenericDropDownMenu from "./components/tableDropDown";
const DoctorsPage = async ({ doctors }: { doctors: Doctor[] }) => {
  console.log(doctors);
  if (doctors && doctors.length > 0) {
    return (
      <div className="w-full h-full p-6">
        <div className="rounded-lg border">
          <Table>
            <TableHeaderComp columns={columns} />
            <TableBody>
              {doctors.map((doctor, index) => (
                <TableRow key={doctor.doctorId}>
                  <TableCellComp type="number">{index + 1}</TableCellComp>
                  <AvatarTableCell
                    fallbackText={doctor.fullName}
                    imageUrl={doctor.avatar_url ?? ""}
                  />
                  <TableCellComp type="string">{doctor.fullName}</TableCellComp>
                  <TableCellComp type="string">{doctor.email}</TableCellComp>
                  <TableCellComp type="string" badge>
                    {doctor.specialties?.join(", ") || "N/A"}
                  </TableCellComp>

                  <TableCellComp type="number" badge>
                    {doctor.workExperienceCount}
                  </TableCellComp>
                  <TableCellComp type="number" badge>
                    {doctor.certificationCount}
                  </TableCellComp>
                  <TableCellComp type="number" badge>
                    {doctor.educationCount}
                  </TableCellComp>
                  <TableCellComp type="date">{doctor.createdAt}</TableCellComp>
                  <GenericDropDownMenu id={doctor.doctorId} />
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
