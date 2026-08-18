"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDeleteDoctor } from "../../api/hooks/delete-doctor.query";

type DeleteModalProps = {
  doctorId: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function DeleteModal({
  doctorId,
  isOpen,
  onOpenChange,
}: DeleteModalProps) {
    const router=useRouter()
    const {error,data,mutate}=useDeleteDoctor(doctorId)
    const handleDelete = () => {
      mutate(undefined, {
        onSuccess: () => {
          router.refresh();
          onOpenChange(false);
        },
        onError: () => {
          // optionally keep modal open or show error
        }
      });
    };
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Doctor</DialogTitle>

          <DialogDescription>
            Are you sure you want to delete this doctor?
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
          type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={handleDelete}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}