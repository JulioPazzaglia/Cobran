import React from "react";
import {
  Text,
  ScrollView,
  RefreshControl,
  View,
  TouchableOpacity,
} from "react-native";
import Styles from "../styles/StylesSheet";

function SearchDisplay(props) {

  const refreshing = props.refreshing;
  const onRefresh = props.onRefresh;

  const personas = props.list

  const linkPersonas = props.linkPersonas
  const postPersona = props.postPersona

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
                <TouchableOpacity style={Styles.buttons} onPress = {()=>linkPersonas(persona.id)}><Text>➕</Text></TouchableOpacity>
              </View>
            );
          })}
        <TouchableOpacity 
        style={Styles.personasButon}
        onPress = {()=> postPersona()}>
          <Text>Crear usuario</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default SearchDisplay;
