import { Dispatch } from "redux"
import { IContact, IParams } from "../../types"
import { SET_CONTACTS, SET_DETAILS, SET_LOADING, SET_PARAMS, setContactsType, setDetailsType, setLoadingType, setParamsType } from "./types"
import ContactsService from "../../services/contactsService"

export const setLoading = (loading: boolean): setLoadingType => {
 return { type: SET_LOADING, payload:loading }
}

export const setParams = (payload:{value:string |number,key:keyof IParams}):setParamsType=> {
 return { type: SET_PARAMS, payload}
}

export const setDeatils = (payload:IContact):setDetailsType=> {
 return { type: SET_DETAILS, payload}
}

export const setContacts = (data:IContact[])=> {
 return { type: SET_CONTACTS, payload:data}
}

export const fetchContacts = () => async (dispatch:Dispatch)=> {

 dispatch(setLoading(true))
 try {
  const res = await ContactsService.getContacts()
  if (res) {
   dispatch(setContacts(res))
  }
 }
 catch (e) {
  console.log(e)
 }
 dispatch(setLoading(false))
}