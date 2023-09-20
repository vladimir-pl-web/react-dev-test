import { useState } from "react"

export const useModal = () => {
  const [open, setOpen] = useState<boolean>(false)
  const onOpen = (data: boolean) => {
    setOpen(data)
  }
  return { open, onOpen }
}
