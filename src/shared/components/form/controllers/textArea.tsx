


import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group'
import React from 'react'
import { Control, Controller, FieldValue, FieldValues, Path } from 'react-hook-form'
import { TextAreaProps } from './types'

const TextArea = <T extends FieldValues>({control,fieldLabel,fieldName}:TextAreaProps<T>) => {
  return (
    <Controller
    name={fieldName}
    control={control}
    render={({ field, fieldState }) => (
      <Field data-invalid={fieldState.invalid}>
        <FieldLabel 
          htmlFor={fieldName}
          className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          {fieldLabel}
        </FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            {...field}
            id={fieldName}
            placeholder="123 Medical Center Dr, Suite 200, City, State, ZIP"
            rows={3}
            className="min-h-24 resize-none border-primary/20 focus-visible:ring-primary/30"
            aria-invalid={fieldState.invalid}
          />
          <InputGroupAddon align="block-end">
            <InputGroupText className="tabular-nums text-[10px] text-muted-foreground">
              {field.value.length}/200 characters
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription className="text-[10px] text-muted-foreground/70 mt-1">
          Street address, city, state, and ZIP code.
        </FieldDescription>
        {fieldState.invalid && (
          <FieldError errors={[fieldState.error]} className="text-xs mt-1" />
        )}
      </Field>
    )}
  />  )
}

export default TextArea