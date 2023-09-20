import { IBtnVariant, IButtons } from "./types"

export const allButtons: IButtons[] = [
  { variant: IBtnVariant.A, open: true, title: "All Contacts", to: "/all" },
  { variant: IBtnVariant.B, open: true, title: "US Contacts", to: "/usa" },
  { variant: IBtnVariant.C, open: false, title: "Close", to: "/" },
]
