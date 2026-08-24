"use client";

import { useState } from "react";
import { TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  Calendar,
  CalendarCheck2,
} from "lucide-react";
import Link from "next/link";
import DeleteModal from "./deleteModal";

const ActionButtons = ({ doctorId }: { doctorId: string }) => {
  console.log({ doctorId });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TableCell>
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem asChild>
                <Link href={`/doctors/${doctorId}/timeSlots`}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/doctors/${doctorId}/timeSlots`}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Available times
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href={`/doctors/${doctorId}/appointments`}>
                  <CalendarCheck2 className="mr-2 h-4 w-4" />
                  Appointments
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer">
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer text-red-600"
                onSelect={() => setIsModalOpen(true)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>

      <DeleteModal
        doctorId={doctorId}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
};

export default ActionButtons;
