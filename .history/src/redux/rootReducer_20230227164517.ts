import authReducer from '@/app/(auth)/authSlice';
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
