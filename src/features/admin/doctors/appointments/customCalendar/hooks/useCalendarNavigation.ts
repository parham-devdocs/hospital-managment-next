import { useState } from 'react'

export const useCalendarNavigation = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const goToPreviousMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  return { currentDate, goToPreviousMonth, goToNextMonth, goToToday }
}