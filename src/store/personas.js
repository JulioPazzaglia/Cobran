import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getSearch = createAsyncThunk("GET_SEARCH", (name) => {
  return axios
    .get(`http://192.168.1.14:3001/api/personas/search/${name}`)
    .then((res) => res.data);
});

const personasReducer = createReducer([], {
    [getSearch.fulfilled]: (state, action) => action.payload,
});
  
export default personasReducer;