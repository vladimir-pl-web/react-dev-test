import { DetailedHTMLProps, HTMLAttributes } from "react"
import { IContact } from "../../types"

export interface IListItems {
  active: number
  setActive: (index: number) => void
}

export interface IDetail
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onClose: () => void
}
export interface IContactList{
  data: IContact[]
}