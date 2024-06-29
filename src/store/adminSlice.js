import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employer: null,
  admin: null,
  error: null,
  loading: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccessAdmin: (state, action) => {
      state.admin = action.payload;
      state.loading = false;
      state.error = null;
    },

    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    signOut: (state, action) => {
      state.admin = null;
      localStorage.removeItem("admin");
    },
    employerProfile: (state, action) => {
      state.employer = action.payload;
      
    },
  },
});

export const {
  signInFailure,
  signInSuccessAdmin,
  signInStart,
  signOut,
  employerProfile,
} = adminSlice.actions;
export { adminSlice };
