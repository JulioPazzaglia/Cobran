import React from "react";
import {
  SafeAreaView,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Styles from "../styles/StylesSheet";

function ListsList({ navigation }) {
  const touch = () => navigation.navigate("Lists");

  return (
    <SafeAreaView style={Styles.background}>
      <View style={Styles.list}>
        <View style={Styles.titulo}>
          <Text>Aca la lista de listas</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={touch}
            style={Styles.listItems}
            underlayColor={"#ff5733"}
          >
            <Text>Beer garden</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={touch}
            style={Styles.listItems}
            underlayColor={"#ff5733"}
          >
            <Text>Sabado 12/04</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ListsList;
