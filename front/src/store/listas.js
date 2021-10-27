import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

var direccionIp = "192.168.1.10"

export const getListas = createAsyncThunk("GET_LISTAS", () => {
  return axios
    .get(`http://${direccionIp}:3001/api/listas`)
    .then((res) => res.data);
});

export const postLista = createAsyncThunk("POST_LISTA", (props) => {
  return axios
    .post(`http://${direccionIp}:3001/api/listas`, props)
    .then((res) => res.data);
});

export const deleteLista = createAsyncThunk("DELETE_LISTA", (props) => {
  return axios
    .delete(`http://${direccionIp}:3001/api/listas/delete/${props}`)
    .then((res) => res.data);
});

const listasReducer = createReducer([], {
  [getListas.fulfilled]: (state, action) => action.payload,
  [postLista.fulfilled]: (state, action) => action.payload,
  [deleteLista.fulfilled]: (state,action) => action.payload,
});

export default listasReducer;
