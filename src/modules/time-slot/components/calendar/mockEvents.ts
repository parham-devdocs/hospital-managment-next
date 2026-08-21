import { getDaysInMonth } from "date-fns";

interface MockEvent {
  id: string;
  title: string;
  time: string;
  date: Date;
}

export const generateMockEvents = (year: number, month: number): MockEvent[] => {
  const eventDays = [3, 7, 12, 18, 22, 27, 30];
  const eventTitles = [
    "Team meeting",
    "Doctor's appointment",
    "Lunch with Sarah",
    "Project deadline",
    "Gym session",
    "Call with client",
    "Review quarterly report",
    "Board meeting",
    "Coffee with John",
    "Training session",
  ];

  const maxDays = getDaysInMonth(new Date(year, month));

  return eventDays
    .filter((day) => day <= maxDays)
    .map((day) => {
      const date = new Date(year, month, day);
      const count = Math.floor(Math.random() * 3) + 1;
      return Array.from({ length: count }).map((_, i) => ({
        id: `${year}-${month}-${day}-${i}`,
        title: eventTitles[(day + i) % eventTitles.length],
        time: `${8 + i * 2}:00`,
        date: date,
      }));
    })
    .flat();
};
import { format, addDays } from 'date-fns';

const today = new Date();
export const mockEvents = [
  {
    id: "7d21d3f7-3a3f-4764-94a5-d087943dcfb2",
    date: format(addDays(today, 30), 'yyyy-MM-dd'),
    time: "14:30-15:30",
    createdAt: today.toISOString(),
  },
  {
    id: "7d21d3f7-3a3f-4764-94a5-d087943dcfb2",
    date: format(addDays(today,5), 'yyyy-MM-dd'),
    time: "14:30-15:30",
    createdAt: today.toISOString(),
  },
  // ... repeat for others
];
