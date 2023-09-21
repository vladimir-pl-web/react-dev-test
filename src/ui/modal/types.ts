import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface IModal
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean
  setOpen: (data: boolean) => void
  title: string
}
