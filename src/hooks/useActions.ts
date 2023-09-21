import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { contactSlice } from "../store/contactsReducer";
import * as contactsActions from '../store/contactsActions'

const allActions = {
 ...contactsActions,
 ...contactSlice.actions,
};

export const useActions = () => {
 const dispatch = useDispatch();

 return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}