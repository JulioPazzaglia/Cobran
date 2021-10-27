import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

var direccionIp = "192.168.1.10"

export const getSearch = createAsyncThunk("GET_SEARCH", (name) => {
  return axios
    .get(`http://${direccionIp}:3001/api/personas/search/${name}`)
    .then((res) => res.data);
});

export const postPersona = createAsyncThunk("POST_PERSONA", (props) => {
  return axios
    .post(`http://${direccionIp}:3001/api/personas/`, props)
    .then((res) => res.data);
});

const personasReducer = createReducer([], {
    [getSearch.fulfilled]: (state, action) => action.payload,
    [postPersona.fulfilled]: (state, action) => action.payload,
});
  
export default personasReducer;