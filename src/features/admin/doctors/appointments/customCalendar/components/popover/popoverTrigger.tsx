import { PopoverTrigger } from "@/components/ui/popover";

const PopoverTriggerComp = ({ color, getLightColor }: { color: string; getLightColor: (c: string) => string }) => (
    <PopoverTrigger asChild className="cursor-pointer">
      
      <div
        className="absolute inset-0 w-full h-full cursor-pointer"
        style={{
          backgroundColor: getLightColor(color),
          borderRadius: "inherit",
        }}
      />
    </PopoverTrigger>
  )
  export default PopoverTriggerComp