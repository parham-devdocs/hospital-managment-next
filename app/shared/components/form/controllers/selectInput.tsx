import React from 'react'
import {  Controller, FieldValues} from 'react-hook-form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { FormSelectProps } from './types'


const FormSelect = <T extends FieldValues>({
    control,
    name,
    label,
    placeholder = 'Select an option',
    options,
    className = '',
    onValueChange,
}: FormSelectProps<T>) => {

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    {label && (
                        <FieldLabel
                            htmlFor={name}
                            className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                        >
                            {label}
                        </FieldLabel>
                    )}
                    <Select
                        onValueChange={(value) => {
                            field.onChange(value);
                            onValueChange?.(value);
                        }}
                        defaultValue={field.value}
                    >
                        <SelectTrigger
                            id={name}
                            className={`border-primary/20 focus-visible:ring-primary/30 h-11 ${className}`}
                            aria-invalid={fieldState.invalid}
                        >
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {options.map((option) => (
                                <SelectItem 
                                    key={option.value} 
                                    value={option.value}
                                    disabled={option.disabled}
                                >
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} className="text-xs mt-1" />
                    )}
                </Field>
            )}
        />
    )
}

export default FormSelect