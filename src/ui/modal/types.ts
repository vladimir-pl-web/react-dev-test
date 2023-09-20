import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export interface IModal
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  isOpen: boolean
  setOpen: (data: boolean) => void
}
