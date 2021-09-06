import React from "react";
import {
  Text,
  ScrollView,
  RefreshControl,
  View,
  TouchableOpacity,
} from "react-native";
import Styles from "../styles/StylesSheet";

function PersonasDisplay(props) {

  const personas = props.personas;
  const listId = props.id
  const refreshing = props.refreshing;
  const onRefresh = props.onRefresh;
  const PagoHandler = props.PagoHandler

  return (
    <View style={{ height: 570 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {personas.length > 0 &&
          personas.slice(0).reverse().map((persona) => {
            return (
              <View key={persona.id} style={Styles.personasItems}>
                <Text style={{fontSize:25}}>{persona.name}</Text>
                <TouchableOpacity style={Styles.buttons} onPress = {()=> PagoHandler(persona.id)}><Text>{persona.pagos.includes(listId)?"✔️":"❌"}</Text></TouchableOpacity>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}

export default PersonasDisplay;
