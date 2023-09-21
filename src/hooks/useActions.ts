import { useDispatch } from "react-redux"
import { AppThunk } from "../store/store"
import { useMemo } from "react"
import { bindActionCreators } from "redux"
import * as contactsActions from "../store/contacts/contactsActions"
const actions = {
  ...contactsActions,
}

export const useAppDispatch = () => useDispatch<AppThunk>()
export const useActions = () => {
  const dispatch = useDispatch<AppThunk>()

  return useMemo(() => {
    return bindActionCreators(actions, dispatch)
  }, [dispatch])
}
