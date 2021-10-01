import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getPersonasListadas = createAsyncThunk("GET_PERSONASLISTADAS", (id) => {
  return axios
    .get(`http://192.168.1.7:3001/api/listas/find/${id}`)
    .then((res) => res.data);
});

export const putLink = createAsyncThunk("PUT_LINK", (props) => {
  return axios
    .put(`http://192.168.1.7:3001/api/link`, props)
    .then((res) => res.data);
});

export const deleteLink = createAsyncThunk("DELETE_LINK", (props) => {
  return axios
    .delete(`http://192.168.1.7:3001/api/link/${props.persona}/${props.lista}`, (props))
    .then((res) => res.data);
});

export const putPagos = createAsyncThunk("GET_PERSONASLISTADAS", (props) => {
  return axios
    .put(`http://192.168.1.7:3001/api/personas/pago/${props.id}`,{listId: props.listId})
    .then((res) => res.data);
});

const personasListadasReducer = createReducer([], {
  [getPersonasListadas.fulfilled]: (state, action) => action.payload,
  [putPagos.fulfilled]: (state, action) => action.payload,
  [putLink.fulfilled]: (state, action) => action.payload,
  [deleteLink.fulfilled]: (state, action) => action.payload,
});

export default personasListadasReducer;