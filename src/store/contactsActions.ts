import { createAsyncThunk, } from "@reduxjs/toolkit";
import ContactsService from "../services/contactsService";

export const getData = createAsyncThunk(
 `GET_CONTACTS`,
 async (_, thunkApi) => {
   try {
     const res = await ContactsService.getContacts();
     return res;
   } catch (e) {
     return thunkApi.rejectWithValue(e);
   }
 }
); 