import React from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  View,
} from "react-native";
import Styles from "../styles/StylesSheet";

function ListDisplay(props) {
  
  const Listas = props.Listas;
  const touch = props.touch;
  const refreshing = props.refreshing;
  const onRefresh = props.onRefresh;

  return (
    <View style={{ height: 570, flexDirection: "column-reverse"}}>
      <ScrollView
        style={{flexDirection: "column"}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {Listas.length > 0 &&
          Listas.slice(0).reverse().map((lista) => {
            return (
              <TouchableOpacity
                onPress={()=>touch(lista.id)}
                style={Styles.listItems}
                underlayColor={"#ff5733"}
                key={lista.id}
              >
                <Text>{lista.name}</Text>
                <Text>{lista.fecha}</Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}

export default ListDisplay;
