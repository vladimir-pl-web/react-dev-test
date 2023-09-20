import { IBtnVariant, IButtons } from "./types";

export const allButtons:IButtons[] = [
 { variant: IBtnVariant.A, open: true, title: "All Contacts" },
 { variant: IBtnVariant.B, open: true, title: "US Contacts" },
 {variant:IBtnVariant.C, open:false, title: "All Contacts"},
]