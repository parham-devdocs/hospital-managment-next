import { create } from 'zustand';
import { TimeSlot } from '../types';

export type DayTimeSlotState = {
  slots: TimeSlot[];
  dayDate:Date
}

export type DayTimeSlotsActios = {
  setSlots: (slots: TimeSlot[]) => void;
  setDayDate:(date:Date)=>void

  
}

export const useDayTimeSlots = create<DayTimeSlotState & DayTimeSlotsActios>((set) => ({
  slots: [],
  setSlots: (slots:TimeSlot[]) => set({ slots }),
  dayDate:new Date(),
  setDayDate:(date:Date)=>set({dayDate:date}),

}));
export type DayTimeStore = DayTimeSlotState|DayTimeSlotsActios
