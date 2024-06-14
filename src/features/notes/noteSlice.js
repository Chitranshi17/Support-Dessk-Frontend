import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import noteService from "./noteService";
// // import noteServices from "./noteService";
// // import noteService from "./noteService";

import noteService from "./noteService";



// const initialState = {
//   notes : [],
//   isLoading : false,
//   isSuccess : false,
//   isError : false,
//   message : ""
// }

// const noteSlice = createSlice({
//   name : "note",
//   initialState,
//   reducers : {},
//   extraReducers : (builder) => {

//   }
// })


// // Get All Notes

// export const getAllNotes = createAsyncThunk("GET/ALLNOTES", async(id , thunkAPI) => {
//   try {
//     const token = thunkAPI.getState().auth.user.token
//     console.log(token);
//     return await noteService.getNotes(id, token)
//   } catch (error) {
//     // const message = error.response.data.message;
//     // return thunkAPI.rejectWithValue(message);
//     console.log("Data Note Show Here")
//   }
// })


// export default noteSlice.reducer;


const initialState = {
  notes : [],
  isLoading : false,
  isSuccess : false,
  isError : false,
  message : ""
}

const noteSlice = createSlice({
  name : "note",
  initialState,
  reducers : {},
  extraReducers : (builder) => {
    builder
    .addCase(getAllNotes.pending, (state,action)=>{
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
      state.notes = []
      state.message = ""
    })
    .addCase(getAllNotes.fulfilled, (state,action)=>{
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
      state.notes = action.payload
      state.message = ""
    })
    .addCase(getAllNotes.rejected, (state,action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
      state.notes = []
      state.message = action.payload
    })
  }
})


export default noteSlice.reducer;



//  Get All Notes


export const getAllNotes = createAsyncThunk("GET/ALLNOTES", async(id , thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    console.log(token);
    return await noteService.getNotes(id, token)
  } catch (error) {
    // const message = error.response.data.message;
    // return thunkAPI.rejectWithValue(message);
    console.log("errorMessage")
  }
})