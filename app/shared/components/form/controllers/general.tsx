

import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { HTMLInputAutoCompleteAttribute } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { GeneralInputType } from './types';

  const ControllerComp = <T extends FieldValues>({control,inputType="text",fieldName,fieldLabel,placeHolder,...props}:GeneralInputType<T>) => {
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
                  <Input
                    {...field}
                    {...props}
                    id={fieldName}
                    type={inputType}
                    aria-invalid={fieldState.invalid}
                    placeholder={placeHolder}
                    className="border-primary/20 focus-visible:ring-primary/30 h-11"
                    onChange={(e) => {
                      const value = e.target.value;
                      // ✅ Convert to number if input type is number
                      if (inputType === 'number') {
                        field.onChange(value === '' ? '' : Number(value));
                      } else {
                        field.onChange(value);
                      }
                    }}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-xs mt-1" />
                  )}
                </Field>
              )}
            />  )
}

export default ControllerComp