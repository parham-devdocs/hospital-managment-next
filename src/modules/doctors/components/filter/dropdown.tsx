import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ItemType } from ".";
import { Filter } from "lucide-react";

export function DropdownMenuContentComp({
  items,
  addFilter,
}: {
  items: ItemType[];
  addFilter: (newFilter: ItemType) => void;
}) {
 
  return (
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Add Filter</DropdownMenuLabel>
      <DropdownMenuSeparator />
      {items.map((item) => {
       
        return (
          <DropdownMenuItem key={item.value} onClick={() => addFilter(item)}>
            <span>{item.label}</span>
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuContent>
  );
}

export function FilterDropDown({
  items,
  addFilter,
}: {
  items: ItemType[];
  addFilter: (newFilter: ItemType) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {" "}
          <Filter />
          Add Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContentComp items={items} addFilter={addFilter} />
    </DropdownMenu>
  );
}
