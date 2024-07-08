import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null,
  registerSuccess: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    signInSuccessAdmin: (state, action) => {
      const { expires_in } = action.payload;
      state.admin = action.payload;
      state.tokenExpiry = (expires_in - 60) * 1000;
    },
    signOut: (state) => {
      state.admin = null;
      localStorage.removeItem("admin");
    },
    registerSuccessful: (state) => {
      state.registerSuccess = true;
    },
    registerComplete: (state) => {
      state.registerSuccess = false;
    },
  },
});

export const {
  registerComplete,
  signInSuccessAdmin,
  signOut,
  registerSuccessful,
} = adminSlice.actions;
export { adminSlice };
