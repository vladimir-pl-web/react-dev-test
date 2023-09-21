export enum IBtnVariant {
  A = "violet",
  B = "red",
  C = "white",
}

export interface IButtons {
  variant: IBtnVariant
  open: boolean
  title: string
  to: string
}

export interface IContact {
  id:number
  first_name: string
  last_name: string
  email: string | null
  phone_number: string
  address: string
  country: string
}
export interface IParams {
  companyId: number
  query: string | number |null
  page: number |null
  countryId: number | null
  noGroupDuplicates: number
}
