import React from "react";
import { tabHeaderType } from "./types";
import { tabs } from "./data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TabHeader = ({ activeTab, onChange }: tabHeaderType) => {
  return (
    <div className="w-full flex justify-center items-center gap-6 border-b pb-2.5">
      {tabs.map((t) => (
        <Button
          key={t.id}
          variant="ghost"
          onClick={() => onChange(t.id)}
          className={cn(
            "relative rounded-none px-4 py-6 flex items-center gap-2",
            "hover:bg-transparent",
            activeTab === t.id
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {t.icon}
          {t.label}

          <span
            className={cn(
              "absolute bottom-0 left-0 h-[2px] w-full bg-primary",
              "transition-all duration-300 ease-in-out",
              activeTab === t.id
                ? "scale-x-100"
                : "scale-x-0"
            )}
          />
        </Button>
      ))}
    </div>
  );
};

export default TabHeader;