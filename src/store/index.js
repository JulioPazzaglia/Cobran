import { configureStore } from "@reduxjs/toolkit";

import listasReducer from "./listas";
import personasListadasReducer from "./personasListadas";
import personasReducer from "./personas";

const store = configureStore({
  reducer: {
    listas: listasReducer,
    listaPersonas: personasListadasReducer,
    searchPersonas: personasReducer,
  },
});

export default store;
