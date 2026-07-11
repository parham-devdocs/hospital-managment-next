// popover.tsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { PopoverProps } from "../../../types";

const PopoverComp = ({ date, appointments, color }: PopoverProps) => {
  // ✅ Safety check
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return null;
  }

  const getLightColor = (color: string) => color + "20";

  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <div
          className="absolute inset-0 w-full h-full cursor-pointer"
          style={{
            backgroundColor: getLightColor(color),
            borderRadius: "inherit",
          }}
        />
      </PopoverTrigger>
      <PopoverContent
        className="w-80 p-4 z-50"
        align="start"
        style={{
          borderColor: getLightColor(color),
          borderWidth: "1px",
        }}
      >
        <div className="space-y-3">
          <h4 className="font-semibold text-base" style={{ color: color }}>
            {format(date, "EEEE, MMMM d, yyyy")}
          </h4>
          <p className="text-sm text-muted-foreground -mt-2">
            {appointments.length} appointment
            {appointments.length > 1 ? "s" : ""}
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverComp;
