import { useState } from 'react'

export const useSelectedDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  return { selectedDate, setSelectedDate }
}