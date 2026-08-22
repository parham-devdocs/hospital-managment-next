"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/src/shared/lib/formatDate";
import { TimeSlotCard } from "./card";
import { Clock, CalendarDays, CalendarX } from "lucide-react";
import { useDayTimeSlots } from "../../store/dayTimeSlots";

interface TimeSlotListProps {
  onReserve?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const TimeSlotList = ({
  onReserve,
  onEdit,
  onDelete,
}: TimeSlotListProps) => {
  const { slots,dayDate } = useDayTimeSlots();

  const handleSlotClick = (id: string) => {
    console.log("Clicked time slot with ID:", id);
  };

  // ✅ FIXED: Use uppercase "AVAILABLE" to match your store data
  const availableCount = slots.filter(
    (ts) => ts.status === "Available" // ✅ Fixed: "AVAILABLE" not "Available"
  ).length;
  const totalCount = slots.length;

  return (
    <Card className="w-full max-w-md border border-gray-200/60 shadow-xl shadow-gray-200/30 backdrop-blur-sm bg-white/95 rounded-2xl overflow-hidden">
      {/* 🎨 Header - now uses selectedDate safely */}
      <div className="bg-gradient-to-br from-emerald-50/80 via-white to-blue-50/40 pb-1">
        <CardHeader className="pb-3 pt-5 px-6">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2.5">
                <CalendarDays className="w-5 h-5 text-primary" />
                Available Time Slots
              </CardTitle>
              <CardDescription className="flex items-center gap-3 mt-1.5 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {formatDate(dayDate)} {/* ✅ Safe: Always shows the selected day */}
                </span>
                <span className="w-px h-4 bg-gray-200" />
                <span className="font-medium text-gray-700">
                  {totalCount} slot{totalCount !== 1 ? "s" : ""}
                </span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </div>

      {/* 📋 Scrollable List Container */}
      <CardContent className="p-0">
        <div className="max-h-[420px] overflow-y-auto px-4 py-4 space-y-3.5 scroll-smooth">
          {slots.length === 0 ? (
            // 🌟 Empty State - now uses selectedDate safely
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <CalendarX className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-sm font-medium text-gray-600">
                No slots available
              </p>
              <p className="text-xs text-gray-400 mt-1 max-w-[200px]">
                There are no time slots scheduled for {formatDate(dayDate)}.
              </p>
            </div>
          ) : (
            // 🎯 Render each TimeSlotCard with NO animations (as requested)
            slots.map((ts) => (
              <div
                key={ts.id}
                className="rounded-xl" // ✅ Removed all hover/transition effects
              >
                <TimeSlotCard
                  {...ts}
                  onReserve={onReserve}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </div>
            ))
          )}
        </div>
      </CardContent>

      {/* 🦶 Footer */}
      {slots.length > 0 && (
        <div className="border-t border-gray-100/80 bg-gray-50/40 px-6 py-2.5 flex justify-between items-center">
          <span className="text-[11px] text-gray-400 font-medium tracking-wide">
            {totalCount} slot{totalCount !== 1 ? "s" : ""} • {availableCount}{" "}
            open
          </span>
          <span className="text-[11px] text-gray-300">
            Click a card to interact
          </span>
        </div>
      )}
    </Card>
  );
};

export default TimeSlotList;