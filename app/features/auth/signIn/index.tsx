"use client";

import SelectInput from "../../../shared/components/form/controllers/selectInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Header from "./header";
import ControllerComp from "@/app/shared/components/form/controllers/general";
import TextArea from "@/app/shared/components/form/controllers/textArea";
import { FieldGroup } from "@/components/ui/field";
import { useLogin } from "./useLogin";



export default function Page() {
const {onSubmit,form,isSubmitting}=useLogin()
  return (
    <Card className="w-full max-w-2xl mx-auto border-0 shadow-none bg-transparent flex flex-col">
      <Header />
      <CardContent className="flex-1 px-0 pt-6 overflow-y-auto">
        <form id="registration-form" onSubmit={onSubmit}>
          <FieldGroup className="space-y-4 px-1">
         
            <ControllerComp
              fieldLabel="email"
              fieldName="email"
              control={form.control}
              autoComplete="email"
              placeHolder="ex. John Doe@gmail.com"
            />
            <ControllerComp
              fieldLabel="password"
              fieldName="password"
              control={form.control}
              inputType="password"
              autoComplete="password"
              placeHolder="ex. John Doe"
            />
            
            {/* Address */}
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="border-t border-primary/5 bg-gradient-to-l from-primary/5 to-transparent pt-4 px-1">
        <div className="w-full flex flex-col sm:flex-row justify-between gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            className="border-primary/20 hover:bg-primary/5 w-full sm:w-auto"
          >
            Reset Form
          </Button>
          <Button
            type="submit"
            form="registration-form"
            className="bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? "waiting":"Login" }
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
