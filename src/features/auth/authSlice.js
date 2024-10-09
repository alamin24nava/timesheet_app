import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { handleApiError } from "../../helpers/handleApiError";
const { REACT_APP_API_BASE_URL } = import.meta.env;
const initialState = {
	user:null,
	isLoading: false,
	isError: false,
};
export const postLogin = createAsyncThunk("auth/postLogin",
	async(payload, {rejectWithValue, signal})=>{
		try{
			const response = await axios.post(`${REACT_APP_API_BASE_URL}/login`, payload, {signal})
			return response.data
		}catch(error){
			return rejectWithValue(handleApiError(error))
		}
	}
);
export const postLoginOut = createAsyncThunk("auth/postLoginOut",
	async(payload, {rejectWithValue, signal})=>{
		try{
			const response = await axios.post(`${REACT_APP_API_BASE_URL}/logout`, payload, {signal})
			return response.data
		}catch(error){
			return rejectWithValue(handleApiError(error))
		}
	}
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      localStorage.setItem("token", action.payload.data.token);
      state.user = action.payload
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});
export const authUseSelector = (state) => state.auth;
export default authSlice.reducer;
