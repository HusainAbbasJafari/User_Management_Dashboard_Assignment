import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "@/services/user";



export const fetchUsersData = createAsyncThunk("users/fetchUsersData", async () => {
  if (localStorage.getItem("UserData")) {
    return JSON.parse(localStorage.getItem("UserData"));
  }
  const data = await fetchUsers();
  localStorage.setItem("UserData", JSON.stringify(data));
  return data;  
});

const getLocalUserData = () => {
  const stored = localStorage.getItem("UserData");
  return stored ? JSON.parse(stored) : [];
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: getLocalUserData(),
    status: "idle", 
    error: null,
  },
  reducers: {
    addNewUser: (state, action) => {
      state.users = [action?.payload, ...state.users];
      localStorage.setItem("UserData", JSON.stringify(state.users));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsersData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addNewUser } = userSlice.actions;
export default userSlice.reducer;
