import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  currentUser: {
    displayName: string;
    avatar: string;
  };
}
interface User {
  displayName: string;
  avatar: string;
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
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    logout(state) {
      state.currentUser = {
        displayName: '',
        avatar: '',
      };
      state.isLoggedIn = false;
    },
  },
});
export const authActions = authSlice.actions;
export const selectCurrentUser = (state: any) => state.auth.currentUser;
const authReducer = authSlice.reducer;
export default authReducer;
