import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ItemType } from '.'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const FilterInput = ({ filterItem }: { filterItem: ItemType }) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  // Update URL with new filter value (preserve other params)
  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value && value.trim() !== '') {
      params.set(key, value)
    } else {
      params.delete(key) // Remove filter if value is empty
    }
    const queryString = params.toString()
    const url = queryString ? `${pathname}?${queryString}` : pathname
    router.push(url)
  }

  const containerClass =
    "flex items-center w-full lg:w-72 rounded-md border border-gray-300 bg-white overflow-hidden"

  const labelClass = "text-sm font-medium text-gray-700 whitespace-nowrap pl-3 py-2"

  const dividerClass = "w-px h-6 bg-gray-300 mx-2"

  // Text input (string or number)
  if (filterItem.type === "string" || filterItem.type === "number") {
    return (
      <div className={containerClass}>
        <span className={labelClass}>{filterItem.label}</span>
        <div className={dividerClass} />
        <Input
          type={filterItem.type === "number" ? "number" : "text"}
          placeholder={`Search ${filterItem.label}...`}
          className="flex-1 border-0 ring-0 outline-none focus-visible:ring-offset-0 px-0 py-2 pr-3 bg-transparent"
          onChange={(e) => updateFilter(filterItem.value, e.target.value)}
          // Optionally debounce or use onBlur to reduce URL updates
        />
      </div>
    )
  }

  // Select dropdown
  if (filterItem.type === "select") {
    if (!filterItem.options || filterItem.options.length === 0) {
      return (
        <div className={containerClass}>
          <span className={labelClass}>{filterItem.label}</span>
          <div className={dividerClass} />
          <span className="flex-1 text-sm text-gray-400 px-0 py-2 pr-3">No options</span>
        </div>
      )
    }

    return (
      <div className={containerClass}>
        <span className={labelClass}>{filterItem.label}</span>
        <div className={dividerClass} />
        <Select onValueChange={(value) => updateFilter(filterItem.value, value)}>
          <SelectTrigger className="flex-1 border-0 ring-0 outline-none focus:ring-offset-0 shadow-none bg-transparent px-0 py-2 pr-3 h-auto">
            <SelectValue placeholder={`Select ${filterItem.label}`} />
          </SelectTrigger>
          <SelectContent>
            {filterItem.options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  }

  return null
}

export default FilterInput