import { Clock, Calendar, CheckCircle, XCircle } from "lucide-react";
import { AvailableTimeSlot } from "./types";

const Schedule = ({ availableTimeSlots }: { availableTimeSlots: AvailableTimeSlot[] }) => {
  // Ensure we have a valid array
  const slots = Array.isArray(availableTimeSlots) ? availableTimeSlots : [];

  if (slots.length === 0) {
    return (
      <div className="animate-fadeIn bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Calendar className="w-12 h-12 text-gray-300 mb-3" />
          <h3 className="text-lg font-medium text-gray-700">No Time Slots Available</h3>
          <p className="text-sm text-gray-500 mt-1">
            There are currently no available time slots for this service.
          </p>
        </div>
      </div>
    );
  }

  const groupedSlots = slots.reduce((acc, slot) => {
    if (!acc[slot.date]) {
      acc[slot.date] = [];
    }
    acc[slot.date].push(slot);
    return acc;
  }, {} as Record<string, AvailableTimeSlot[]>);

  // Sort dates
  const sortedDates = Object.keys(groupedSlots).sort();

  return (
    <div className="animate-fadeIn bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Available Time Slots</h2>
        <span className="text-sm text-gray-500">
          {slots.length} slots available
        </span>
      </div>

      <div className="space-y-6">
        {sortedDates.map((date) => {
          const slotsForDate = groupedSlots[date];
          const availableSlots = slotsForDate.filter(
            (slot) => slot.appointmentId === null && slot.deleteAt === null
          );
          const bookedSlots = slotsForDate.filter((slot) => slot.appointmentId !== null);

          return (
            <div key={date} className="space-y-3">
              {/* Date Header */}
              <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                <Calendar className="w-4 h-4 text-blue-500" />
                <h3 className="font-medium text-gray-700">
                  {new Date(date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </h3>
                <span className="text-xs text-gray-400 ml-auto">
                  {availableSlots.length} available • {bookedSlots.length} booked
                </span>
              </div>

              {/* Time Slots */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {slotsForDate.map((slot) => {
                  const isAvailable = slot.appointmentId === null && slot.deleteAt === null;

                  return (
                    <div
                      key={slot.id}
                      className={`group relative flex items-center gap-3 rounded-xl border p-3 transition-all duration-200 ${
                        isAvailable
                          ? 'bg-blue-50 border-blue-200 hover:bg-blue-100 hover:shadow-md cursor-pointer'
                          : 'bg-gray-50 border-gray-200 opacity-60 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex items-center gap-2 flex-1">
                        <div
                          className={`p-1.5 rounded-full ${
                            isAvailable ? 'bg-blue-200' : 'bg-gray-200'
                          }`}
                        >
                          <Clock
                            size={14}
                            className={isAvailable ? 'text-blue-600' : 'text-gray-400'}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">{slot.time}</p>
                          <p className="text-xs text-gray-500">
                            {isAvailable ? 'Available' : 'Booked'}
                          </p>
                        </div>
                      </div>

                      {isAvailable ? (
                        <div className="absolute top-1 right-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                        </div>
                      ) : (
                        <div className="absolute top-1 right-1">
                          <XCircle className="w-3 h-3 text-red-400" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;