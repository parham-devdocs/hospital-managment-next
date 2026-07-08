import { useEffect, useState } from "react"

export function useRandomColorIndex() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const newIndex = Math.floor(Math.random() * 10) // 0-9
    setIndex(newIndex)
  }, [])

  return index
}