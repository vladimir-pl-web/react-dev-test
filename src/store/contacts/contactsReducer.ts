import {
  AnyAction,
  PayloadAction,
  Reducer,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit"
import ContactsService from "../../services/contactsService"
import { IContact, IParams } from "../../types"
import {
  IContacts,
  SET_CONTACTS,
  SET_DETAILS,
  SET_LOADING,
  SET_PARAMS,
  contactsActionsType,
} from "./types"


export const initialState = {
  isLoading: false,
  contacts: [] as IContact[],
  currentContact: null as IContact | null,
  params: {
    companyId: 560,
     //query: null as { name: string; number: string } | null,
    query: "11",
    page: 1,
    noGroupDuplicates: 1,
    countryId: null as number | null,
  },
}

export const contactsReducer: Reducer<IContacts, any> = (
  state = initialState,
  action: contactsActionsType
): IContacts => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.payload }
    case SET_DETAILS:
      return { ...state, currentContact: action.payload }
    case SET_CONTACTS:
      return { ...state, contacts: action.payload }
    case SET_PARAMS:
      const { key, value } = action.payload
      const v = value as never
      const updatedParams = { ...state.params }
      updatedParams[key] = v
      return { ...state, params: { ...updatedParams } }
    default:
      return state
  }
}
