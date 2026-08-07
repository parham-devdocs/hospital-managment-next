import { Appointment } from "../../../types";

const EventIndicators = ({ events, color }: { events: Appointment[]; color: string }) => {
    if (events.length === 0) return null;
    
    return (
      <div className="flex gap-0.5 pointer-events-none">
        {events.slice(0, 3).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
        ))}
        {events.length > 3 && (
          <span className="text-[8px] font-medium text-muted-foreground">
            +{events.length - 3}
          </span>
        )}
      </div>
    );
  };

  export default EventIndicators