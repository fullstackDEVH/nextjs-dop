import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  currentUser: {
    displayName: string;
    avatar: string;
  };
}

const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: {
    displayName: '',
    avatar: '',
  },
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.currentUser = {
        displayName: '',
        avatar: '',
      };
      state.isLoggedIn = false;
    },
  },
});
