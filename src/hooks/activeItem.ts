import { useState } from "react"

export const useActive = () => {
  const [active, setActive] = useState<number>()
  return { active, setActive }
}
