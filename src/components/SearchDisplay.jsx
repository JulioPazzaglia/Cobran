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
  const search = props.search

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
                <TouchableOpacity style={Styles.buttons} onPress = {()=>search(persona.id)}><Text>➕</Text></TouchableOpacity>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}

export default SearchDisplay;
