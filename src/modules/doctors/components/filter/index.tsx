"use client"

import { useState } from 'react'
import { FilterDropDown } from './dropdown'
import FilterInput from './filterInput'

export type ItemType = {
  index: number
  label: string
  value: string
  type: "string" | "select" | "number"
  options?: { label: string; value: string }[] // for select type
}

// Example initial filters – store them in a Map keyed by `value`
const fakeFilters: ItemType[] = [
  { label: "Fullname", value: "fullName", type: "string", index: 1 },
  {
    label: "Specialty",
    value: "specialty",
    type: "select",
    index: 2,
    options: [
      { label: "Cardiology", value: "cardiology" },
      { label: "Neurology", value: "neurology" },
    ],
  },
  {
    label: "Status",
    value: "status",
    type: "select",
    index: 3,
    options: [
      { label: "Active", value: "active" },
      { label: "Not Active", value: "not active" },
    ],
  },
]

const FilterComp = () => {
  // Initialize with empty Map
  const [openFilters, setOpenFilters] = useState<Map<string, ItemType>>(new Map())
console.log(openFilters)
  const addFilter = (newFilter: ItemType) => {
    setOpenFilters((prev) => {
      const updated = new Map(prev)
      updated.set(newFilter.value, newFilter)
      return updated
    })
  }

  return (
    <div className="w-full h-full p-4 card-container">
      <div className="flex flex-wrap items-center gap-3">
        <FilterDropDown addFilter={addFilter} items={fakeFilters} />
        {Array.from(openFilters.values()).map((f) => (
          <FilterInput key={f.value} filterItem={f} />
        ))}
      </div>
    </div>
  )
}

export default FilterComp