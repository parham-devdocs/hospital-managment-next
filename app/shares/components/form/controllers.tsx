

import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Control, Controller, FieldValues } from 'react-hook-form'
interface MyComponentProps {
    control: Control<FieldValues>; 
    fieldName:string
    fieldLabel:string
    placeHolder:string
    autoComplete:string

  }
  const Controllers = ({control,fieldName,fieldLabel,placeHolder,autoComplete}:MyComponentProps) => {
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
                    id="fullName"
                    aria-invalid={fieldState.invalid}
                    placeholder={placeHolder}
                    autoComplete={autoComplete}
                    className="border-primary/20 focus-visible:ring-primary/30 h-11"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-xs mt-1" />
                  )}
                </Field>
              )}
            />  )
}

export default Controllers