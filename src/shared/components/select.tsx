import { Controller, FieldValues} from "react-hook-form";
import {
  Select as ShadSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectionProps } from "../types";
import { Field, FieldLabel } from "@/components/ui/field";


const Selection = ({ control, selectItems, name, placeholder = "Select..."  }: SelectionProps) => {
  return (
    <Controller
      name={name}
      control={control}
      
      render={({ field }) => (
        <ShadSelect
  value={field.value} 
  onValueChange={ field.onChange}
> 
  
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent defaultValue={selectItems[0].value} >
            {selectItems.map((s) => (
              <SelectItem key={s.value} value={s.value} >
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </ShadSelect>
      )}
    />
  );
};

export default Selection;