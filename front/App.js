import React from "react";

import ListaDePagos from "./src/containers/ListaDePagos";
import ListsList from "./src/containers/ListsLIst";
import NewList from "./src/containers/NewList"

import { Provider } from "react-redux";
import store from "./src/store";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ListsList} />
          <Stack.Screen
            name="Lists"
            component={ListaDePagos}
          />
          <Stack.Screen name="NewList" component={NewList} options={{ title: "Crear nueva lista" }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
