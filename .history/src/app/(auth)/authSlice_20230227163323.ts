import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {}

const initialState: AuthState = {
  isShowAuthForm: false,
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  error: undefined,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});
