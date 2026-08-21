import { render, screen } from "@testing-library/react";
import CalendarGrid from "./index";

const mockEvents = [
  { id: "1", startingTime: new Date(2026, 8, 15, 10, 0) },
];

const mockProps = {
  currentMonth: new Date(2026, 8, 1),
  setCurrentMonth: jest.fn(),
  setSelectedDay: jest.fn(),
  selectedDay: null,
  days: 30,
  year: 2026,
  month: 8,
  events: mockEvents,
};

it("renders cells with correct event counts", () => {
  render(<CalendarGrid {...mockProps} />);
  // The cell for day 15 should have events={1}
  const cells = screen.getAllByText("15"); // assuming Cell shows day number
  // ... etc.
});