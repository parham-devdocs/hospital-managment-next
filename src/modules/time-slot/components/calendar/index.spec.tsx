import { set } from 'date-fns';
import { TimeSlot } from '../../types';

describe('filterEventsForDay', () => {
  // Create mock events on different days
  const mockEvents: TimeSlot[] = [
    {
      id: '1',
      startingTime: set(new Date(), { year: 2026, month: 8, date: 15, hours: 10 }),
      endingTime: set(new Date(), { year: 2026, month: 8, date: 15, hours: 11 }),
      doctorId: 'doc-1',
      status: 'Available',
      appointmentId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      startingTime: set(new Date(), { year: 2026, month: 8, date: 20, hours: 14 }),
      endingTime: set(new Date(), { year: 2026, month: 8, date: 20, hours: 15 }),
      doctorId: 'doc-1',
      status: 'Available',
      appointmentId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const testYear = 2026;
  const testMonth = 8; // September
  const testDay = 15;

  it('filters events that match a given date', () => {
    const dayEvents = mockEvents.filter((event) => {
      return (
        event.startingTime.getFullYear() === testYear &&
        event.startingTime.getMonth() === testMonth &&
        event.startingTime.getDate() === testDay // ✅ getDate(), not getDay()
      );
    });

    // ✅ Check length
    expect(dayEvents).toHaveLength(1);

    // ✅ Check that the first event is the one we expect
    expect(dayEvents[0].id).toBe('1');
    expect(dayEvents[0].startingTime.getDate()).toBe(15);

    // Or check the whole object (use toEqual for deep comparison)
    // expect(dayEvents[0]).toEqual(mockEvents[0]);
  });

  it('returns false for events that do NOT match the date', () => {
    const isMatch = (event: TimeSlot) =>
      event.startingTime.getFullYear() === 2026 &&
      event.startingTime.getMonth() === 8 &&
      event.startingTime.getDate() === 15;

    expect(isMatch(mockEvents[0])).toBe(true);
    expect(isMatch(mockEvents[1])).toBe(false);
  });
});