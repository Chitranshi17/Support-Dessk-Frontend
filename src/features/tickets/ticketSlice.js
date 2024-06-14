import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

const initialState = {
  ticket: null,
  tickets: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTickets.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.ticket = null;
        state.tickets = [];
        state.message = "";
      })
      .addCase(getAllTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.ticket = null;
        state.tickets = action.payload;
        state.message = "";
      })
      .addCase(getAllTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.ticket = null;
        state.tickets = [];
        state.message = action.payload;
      })

      .addCase(getSingleTicket.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.ticket = null;
        state.message = "";
      })
      .addCase(getSingleTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.ticket = action.payload;
        state.message = "";
      })
      .addCase(getSingleTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.ticket = null;
        state.message = action.payload;
      })

      .addCase(closeSingleTicket.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.ticket = null;
        state.message = "";
      })
      .addCase(closeSingleTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.ticket = action.payload;
        state.message = "";
      })
      .addCase(closeSingleTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.ticket = null;
        state.message = action.payload;
      })


      .addCase(getCreateTicket.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.ticket = null;
        state.message = "";
      })
      .addCase(getCreateTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.ticket = action.payload;
        state.message = "";
      })
      .addCase(getCreateTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.ticket = null;
        state.message = action.payload;
      })
  },
});

// Get All Ticket

export const getAllTickets = createAsyncThunk(
  "GET/ALLTICKETS",
  async (_, thunkAPI) => {
    try {
      // How to Get authSlice data in ticketSlice --> use thuckAPI Method (thunkAPI.getstate().sliceName(ex -> auth))

      const token = thunkAPI.getState().auth.user.token;
      // console.log(token)

      return await ticketService.getTickets(token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Single Ticket

export const getSingleTicket = createAsyncThunk(
  "GET/SINGLETICKET",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await ticketService.getTicket(id, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);


// Closed Ticket

export const closeSingleTicket = createAsyncThunk("CLOSED/TICKET", async(id, thunkAPI ) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await ticketService.closeTicket(id , token)
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
})


// Create Ticket
export const getCreateTicket = createAsyncThunk("CREATE/TICKET", async(formData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await ticketService.createTicket(formData , token)
   
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message)
  }
})

export default ticketSlice.reducer;
