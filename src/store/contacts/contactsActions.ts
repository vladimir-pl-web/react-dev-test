import { Dispatch } from "redux"
import { IContact, IParams } from "../../types"
import {
  SET_CONTACTS,
  SET_DETAILS,
  SET_LOADING,
  SET_PARAMS,
  SET_SCROLL,
  setContactsType,
  setDetailsType,
  setLoadingType,
  setParamsType,
  setScrollType,
} from "./types"
import ContactsService from "../../services/contactsService"

export const setLoading = (loading: boolean): setLoadingType => {
  return { type: SET_LOADING, payload: loading }
}
export const setScroll = (scroll: boolean): setScrollType => {
  return { type: SET_SCROLL, payload: scroll }
}

export const setParams = (payload: {
  value: string | number | null
  key: keyof IParams
}): setParamsType => {
  return { type: SET_PARAMS, payload }
}

export const setDeatils = (payload: IContact): setDetailsType => {
  return { type: SET_DETAILS, payload }
}

export const setContacts = (data: IContact[]): setContactsType => {
  return { type: SET_CONTACTS, payload: data }
}

export const fetchContacts = () => async (dispatch: Dispatch) => {
  dispatch(setLoading(true))
  try {
    const res = await ContactsService.getContacts()
    if (res) {
      dispatch(setContacts(res))
    }
  } catch (e) {
    console.log(e)
  }
  dispatch(setLoading(false))
  dispatch(setScroll(false))
}
