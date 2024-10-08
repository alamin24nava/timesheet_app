import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const { REACT_APP_API_BASE_URL } = import.meta.env;
const initialState = {
	userEmail:'',
	password:'',
	isLoading: false,
	isError: false,
	message:null,
	status:null
};
export const postLogin = createAsyncThunk("login/postLogin",
	async (userLogin) => {
		try{
			const response = await fetch(`${REACT_APP_API_BASE_URL}/login`, {
			method:"POST",
			headers:{
				'Content-Type': 'application/json',
				"accept": "/",
			},
				body:JSON.stringify(userLogin)
			});
			return response.json();
		}catch(error){

		}
	}
);
export const loginSlice = createSlice({
  name: "login",
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
      state.status = action.payload.status
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});
export const loginGetuseSelector = (state) => state.login;
export default loginSlice.reducer;
