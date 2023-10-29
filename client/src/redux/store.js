import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice.js';

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
