import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/src/shared/components/date-picker";
import { Pen, X, Save } from "lucide-react";

type EditTimeSlotModalType = {
  startTime: string;
  endTime: string;
  id: string;
  status: "Available" | "Reserved";
  onSave?: (id: string, newStart: string, newEnd: string, newDate: Date) => void;
};

const EditTimeSlotModal = ({
  startTime,
  endTime,
  id,
  status,
  onSave,
}: EditTimeSlotModalType) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [newStart, setNewStart] = useState(startTime);
  const [newEnd, setNewEnd] = useState(endTime);

  const handleSave = () => {
    onSave?.(id, newStart, newEnd, date);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          disabled={status === "Reserved"}
          className="gap-1.5 text-xs font-medium rounded-full px-3 h-8 border-primary/50 text-primary hover:bg-primary/10"
        >
          <Pen className="w-3.5 h-3.5" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Pen className="w-5 h-5 text-primary" />
            Edit Time Slot
          </DialogTitle>
          <DialogDescription>
            Update the availability slot for <strong>{startTime} – {endTime}</strong>.
          </DialogDescription>
        </DialogHeader>

    <DatePicker
      setDate={(selectedDate) => setDate(selectedDate || new Date())}
      date={date}
      className="h-10 w-full cursor-pointer"
      placeholder="Select date"
    />

        <DialogFooter className="gap-2 sm:gap-2 flex sm:flex-col flex-row justify-end">
        <Button onClick={handleSave} className="h-11 cursor-pointer">
            <Save className="w-4 h-4 mr-1.5" />
            Save Changes
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)} className=" h-10 cursor-pointer">
            <X className="w-4 h-4 mr-1.5" />
            Cancel
          </Button>
        
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditTimeSlotModal;


















