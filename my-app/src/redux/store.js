import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, // Quản lý trạng thái xác thực
  },
});

export default store;
