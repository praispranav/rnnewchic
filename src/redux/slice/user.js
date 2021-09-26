import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api"
import * as SecureStore from "expo-secure-store"

const getLocalToken = async ()=>{
  return await SecureStore.getItemAsync('token')
}

const initialState = {
  token: null,
  username: null,
  email: null,
  loading: undefined,
  error: null,
  data:[]
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addLocalToken: (state, action) => {
      state.token = action.payload
    },
    addToken: (state, action) => {
      state.token = action.payload
    },
    removeToken:( state, action ) => state.token = null,
    loading: (state, action)=>{
        state.loading = action.payload
    },
    error: ( state, action ) =>{
        state.error = action.payload
    }
  },
});

export const userAction = userSlice.actions;
const { loading, error, addToken , data } = userSlice.actions

export default userSlice;

export const loginUser = (data) => (dispatch, getState) => {
  const { password, url, email } = data
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  return dispatch(
    apiCallBegan({
      url,
      method:"POST",
      onStart: loading.type,
      onSuccess: addToken.type,
      onError: error.type,
      data:formData
    })
  );
};
