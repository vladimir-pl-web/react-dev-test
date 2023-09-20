import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"
import { IBtnVariant } from "../../types"

export interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: IBtnVariant
  onClick: () => void
  title: string
}
