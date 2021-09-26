import { combineReducers } from '@reduxjs/toolkit';
import userReducer from "./slice/user"

export default combineReducers({
  user: userReducer.reducer
});