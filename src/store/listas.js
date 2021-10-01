import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getListas = createAsyncThunk("GET_LISTAS", () => {
  return axios
    .get("http://192.168.1.7:3001/api/listas")
    .then((res) => res.data);
});

export const postLista = createAsyncThunk("POST_LISTA", (props) => {
  return axios
    .post("http://192.168.1.7:3001/api/listas", props)
    .then((res) => res.data);
});

export const deleteLista = createAsyncThunk("DELETE_LISTA", (props) => {
  return axios
    .delete(`http://192.168.1.7:3001/api/listas/delete/${props}`)
    .then((res) => res.data);
});

const listasReducer = createReducer([], {
  [getListas.fulfilled]: (state, action) => action.payload,
  [postLista.fulfilled]: (state, action) => action.payload,
  [deleteLista.fulfilled]: (state,action) => action.payload,
});

export default listasReducer;
