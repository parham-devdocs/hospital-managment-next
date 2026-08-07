import { HTMLInputAutoCompleteAttribute } from "react";
import { Control, FieldValues, Path } from "react-hook-form";


export interface GeneralInputType<T extends FieldValues> {
    control: Control<T>; 
    fieldName:Path<T>
    fieldLabel:string
    placeHolder?:string
    autoComplete?:HTMLInputAutoCompleteAttribute;
    inputType?: React.HTMLInputTypeAttribute
    props?:any

  }

  export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface FormSelectProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    placeholder?: string;
    options: SelectOption[];
    className?: string;
    onValueChange?: (value: string) => void;
}


export interface TextAreaProps<T extends FieldValues> {
    control: Control<T>; 
    fieldName:Path<T>
    fieldLabel:string
    props?:any
  
  }
