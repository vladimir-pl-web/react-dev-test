import { IContact, IParams } from "../../types"

export const SET_LOADING = "SET_LOADING"
export const SET_PARAMS = "SET_PARAMS"
export const SET_DETAILS = "SET_DETAILS"
export const SET_CONTACTS = "SET_CONTACTS"

export interface IContacts {
  isLoading: boolean
  contacts: IContact[]
  params: IParams
  currentContact: null | IContact
}
export interface setLoadingType {
  type: typeof SET_LOADING
  payload: boolean
}

export interface setParamsType {
  type: typeof SET_PARAMS
  payload: { value: string | number | null; key: keyof IParams }
}

export interface setDetailsType {
  type: typeof SET_DETAILS
  payload: IContact
}
export interface setContactsType {
  type: typeof SET_CONTACTS
  payload: IContact[]
}

export type contactsActionsType =
  | setLoadingType
  | setParamsType
  | setDetailsType
  | setContactsType
