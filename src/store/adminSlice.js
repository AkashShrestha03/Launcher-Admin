
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  admin: null,
  error: null,
  loading: false,
};

const adminSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
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
      state.currentUser = null;
      state.admin = null;
      localStorage.removeItem("user");
    },
  },
});

export const {
  signInFailure,
  signInSuccessAdmin,
  signInStart,
  signInSuccess,
  signOut,
} = adminSlice.actions;
export { adminSlice };