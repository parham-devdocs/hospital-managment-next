import { useCalendarNavigation } from './useCalendarNavigation'
import { useSelectedDate } from './useSelectedDate'

export const useCalendar = () => {
  const navigation = useCalendarNavigation()
  const selection = useSelectedDate()

  return {
    ...navigation,
    ...selection,
  }
}