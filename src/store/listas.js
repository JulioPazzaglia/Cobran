import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getListas = createAsyncThunk("GET_LISTAS", () => {
  return axios
    .get("http://192.168.1.14:3001/api/listas")
    .then((res) => res.data);
});

export const postLista = createAsyncThunk("POST_LISTA", (props) => {
  return axios
    .post("http://192.168.1.14:3001/api/listas", props)
    .then((res) => res.data);
});

const listasReducer = createReducer([], {
  [getListas.fulfilled]: (state, action) => action.payload,
  [postLista.fulfilled]: (state, action) => action.payload,
});

export default listasReducer;
