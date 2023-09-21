import { createSlice } from "@reduxjs/toolkit"
import { getData } from "./contactsActions"



export const contactSlice = createSlice({
 name: "contacts",
 initialState: { 
  isLoading: false,
  contacts: [] as any,
  currentContact: null,
  params: {
   companyId: 171,
   query: null,
   page: 1,
   countryId: 226
 }
 },
  reducers: {
   
 },
 extraReducers: (builder) => {
   builder
     .addCase(getData.pending, (state) => {
       state.isLoading = true;
     })
     .addCase(getData.fulfilled, (state, { payload }) => {
      state.contacts = payload;
      state.isLoading=false
     })

 },
});