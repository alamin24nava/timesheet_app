import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const { REACT_APP_API_AUTH_URL } = import.meta.env;
const { REACT_APP_API_BASE_URL } = import.meta.env;
import axios from "axios";
import { handleApiError } from "../../helpers/handleApiError";

const initialState = {
    users:[],
	isLoading: false,
	isError: false,
};

export const getUserManagement = createAsyncThunk("user/management",
	async(payload,{rejectWithValue})=>{
		try{
			const response = await axios.get(`${REACT_APP_API_AUTH_URL}/user/management`,{
                headers: {
                    "x-Authorization": localStorage.getItem("token")
                  },
            })
			return response.data
		}catch(error){
			return rejectWithValue(handleApiError(error))
		}
	}
);

export const getProductHours = createAsyncThunk("timesheet/getProductHours",
	async(payload,{rejectWithValue, signal})=>{
		try{
			const response = await axios.get(`${REACT_APP_API_BASE_URL}/time-sheet/get-product-hours`,{
                headers: {
                    "x-Authorization": localStorage.getItem("token")
                  },
                  signal:signal
            })
            console.log(response)
			return response.data
		}catch(error){
            console.log("nooooo")
			return rejectWithValue(handleApiError(error))
		}
	}
);
export const timesheetSlice = createSlice({
    name: 'timesheet',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getUserManagement.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
          });
          builder.addCase(getUserManagement.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.users = action.payload
          });
          builder.addCase(getUserManagement.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
          });
    }
})

// Action creators are generated for each case reducer function
// export const { } = timesheetSlice.actions

export const timesheetUseSelector = (state) => state.timesheet;
export default timesheetSlice.reducer