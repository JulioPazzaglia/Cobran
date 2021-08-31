import React from "react";
import ListaDePagos from "./src/containers/ListaDePagos";
import ListsList from "./src/containers/ListsLIst";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListsList} />
        <Stack.Screen name="Lists" options={{ title: 'Sabado 12/4' }} component={ListaDePagos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;