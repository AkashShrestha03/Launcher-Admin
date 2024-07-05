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
      state.tokenExpiry = Date.now() + expires_in * 1000;
      localStorage.setItem("tokenExpiry", state.tokenExpiry);
    },
    signOut: (state) => {
      state.admin = null;
      localStorage.removeItem("admin");
      localStorage.removeItem("tokenExpiry");
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
