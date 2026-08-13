// components/GenderSelect.tsx
import { useForm, Controller, Control } from "react-hook-form";
import {
  Select as ShadSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormData } from "@/src/modules/doctors/validations";
interface SelectItem {
  value: string;
  label: string;
}
interface GenderSelectProps {
  control: Control<FormData>;
  selectItems: SelectItem[];
}

const GenderSelect = ({ control, selectItems }: GenderSelectProps) => {
  return (
    <Controller
      name="gender" // field name (must match your schema)
      control={control}
      render={({ field }) => (
        <ShadSelect onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger>
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            {selectItems.map((s) => {
              return <SelectItem value={s.value}>{s.label}</SelectItem>;
            })}
          </SelectContent>
        </ShadSelect>
      )}
    />
  );
};

export default GenderSelect;
