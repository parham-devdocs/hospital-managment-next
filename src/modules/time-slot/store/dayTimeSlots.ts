import { create } from 'zustand';
import { TimeSlot } from '../types';

export type DayTimeSlotState = {
  slots: TimeSlot[];
}

export type DayTimeSlotsActios = {
  setSlots: (slots: TimeSlot[]) => void;
}

export const useDayTimeSlots = create<DayTimeSlotState & DayTimeSlotsActios>((set) => ({
  slots: [],
  setSlots: (slots:TimeSlot[]) => set({ slots }),
}));
export type DayTimeStore = DayTimeSlotState|DayTimeSlotsActios
