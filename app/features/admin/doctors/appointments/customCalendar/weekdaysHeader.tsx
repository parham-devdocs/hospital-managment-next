import { WEEKDAYS } from "../data";

const WeekdaysHeader = () => {
  return (
    <div className="grid grid-cols-7 gap-1 mb-2">
      {WEEKDAYS.map((day) => (
        <div
          key={day}
          className="text-center text-sm font-medium text-muted-foreground py-2 "
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default WeekdaysHeader;
