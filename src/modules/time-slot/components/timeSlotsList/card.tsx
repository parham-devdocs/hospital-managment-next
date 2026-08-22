import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TimeSlot } from "../../types";
import { format } from "date-fns";
import { CalendarCheck, Pencil, Trash2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Helper to style status badges (kept for the top-right pill)
const statusConfig = {
  AVAILABLE: {
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    label: "Available",
  },
  BOOKED: {
    color: "bg-rose-100 text-rose-700 border-rose-200",
    label: "Booked",
  },
  PENDING: {
    color: "bg-amber-100 text-amber-700 border-amber-200",
    label: "Pending",
  },
  CANCELLED: {
    color: "bg-gray-100 text-gray-600 border-gray-200",
    label: "Cancelled",
  },
  COMPLETED: {
    color: "bg-blue-100 text-blue-700 border-blue-200",
    label: "Completed",
  },
};

// Extend the props to include action handlers
interface TimeSlotCardProps extends TimeSlot {
  onReserve?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function TimeSlotCard({
  id,
  startingTime,
  endingTime,
  doctorId,
  status,
  onReserve,
  onEdit,
  onDelete,
}: TimeSlotCardProps) {
  // Format the date and times compactly
  const dateString = format(startingTime, "EEE, MMM dd");
  const startTime = format(startingTime, "hh:mm a");
  const endTime = format(endingTime, "hh:mm a");

  // Get the status styles for the top-right pill

  return (
    <Card className="mx-auto w-full max-w-sm overflow-hidden border border-gray-200/60 shadow-sm rounded-xl">
      {/* Top Section: Status Badge + Doctor ID — TIGHTENED */}
      <div className="flex items-center justify-between px-4 pt-2">
        <span className="text-[10px] font-medium text-gray-400 flex items-center gap-1">
          <span className="inline-block w-1 h-1 rounded-full bg-gray-300" />
          ID: {id.slice(0, 6)}...{id.slice(-4)}
        </span>
        {status === "Available" && (
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs font-medium text-emerald-600 bg-emerald-50 border-emerald-200"
          >
            Available
          </Badge>
        )}
        {status === "Reserved" && (
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs font-medium text-gray-600 bg-emerald-50 border-emerald-200"
          >
            Reserved
          </Badge>
        )}
      </div>

      {/* Card Header — COMPACT */}
      <CardHeader className="pb-0 pt-1 px-4">
        <CardTitle className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
          <span>📅</span> {dateString}
        </CardTitle>
        <CardDescription className="flex items-center gap-1.5 text-xs font-medium text-gray-700 mt-0">
          <Clock className="w-3.5 h-3.5 text-gray-400" />
          {startTime} — {endTime}
        </CardDescription>
        <div className="text-[10px] text-gray-400 mt-0">Doctor: {doctorId}</div>
      </CardHeader>

      {/* Card Content — with FIXED statuses (uses uppercase to match your type) */}
      <CardContent className="pb-1 pt-1 px-4">
        {status === "Reserved" && (
          <Badge
            variant="destructive"
            className="px-2.5 py-0.5 text-[10px] font-medium h-5"
          >
            Unavailable
          </Badge>
        )}
        {status === "Available" && (
          <Badge
            variant="outline"
            className="px-2.5 py-0.5 text-[10px] font-medium text-emerald-600 bg-emerald-50 border-emerald-200 h-5"
          >
            Open for booking
          </Badge>
        )}
      </CardContent>

      {/* Card Footer — COMPACT, BUTTONS SMALLER, NO ANIMATION */}
      <CardFooter className="flex justify-end gap-1 border-t border-gray-100/80 bg-gray-50/40 px-3 py-1.5">
        {/* Reserve Button */}
        <Button
          variant="default"
          size="sm"
          className="h-7 px-2.5 text-[10px] cursor-pointer font-medium gap-1 rounded-full bg-primary hover:bg-blue-700 text-white shadow-sm"
          onClick={() => onReserve?.(id)}
          disabled={status === "Reserved"}
        >
          <CalendarCheck className="w-3 h-3" />
          Reserve
        </Button>

        {/* Edit Button */}
        <Button
          variant="outline"
          size="sm"
          className="h-7 px-2.5 text-[10px] cursor-pointer font-medium gap-1 rounded-full border-gray-300 text-gray-600 hover:text-blue-600 hover:border-blue-300"
          onClick={() => onEdit?.(id)}
        >
          <Pencil className="w-3 h-3" />
          Edit
        </Button>

        {/* Delete Button */}
        <Button
          variant="outline"
          size="sm"
          className="h-7 px-2.5 text-[10px] cursor-pointer font-medium gap-1 rounded-full border-gray-300 text-gray-600 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50"
          onClick={() => onDelete?.(id)}
        >
          <Trash2 className="w-3 h-3" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
