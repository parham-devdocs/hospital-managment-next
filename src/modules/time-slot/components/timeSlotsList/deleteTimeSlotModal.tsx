import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2, X, AlertTriangle } from "lucide-react";
import { useState } from "react";

type DeleteTimeSlotModalType = {
  startTime: string;
  endTime: string;
  id: string;
  status: "Available" | "Reserved";
  onDelete?: (id: string) => void; // optional delete handler
};

const DeleteTimeSlotModal = ({
  startTime,
  endTime,
  id,
  status,
  onDelete,
}: DeleteTimeSlotModalType) => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    onDelete?.(id);
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          size="sm"
          disabled={status === "Reserved"}
          className="gap-1.5 text-xs font-medium rounded-full px-3 h-8"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="w-5 h-5" />
            Delete Time Slot
          </DialogTitle>
          <DialogDescription className="pt-2 space-y-1">
            <p>
              Are you sure you want to delete the availability slot{" "}
              <span className="font-medium text-foreground">
                {startTime} – {endTime}
              </span>
              ?
            </p>
            <p className="text-sm text-muted-foreground">
              This action cannot be undone.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={() => setOpen(false)}>
            <X className="w-4 h-4 mr-1.5" />
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            <Trash2 className="w-4 h-4 mr-1.5" />
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTimeSlotModal;