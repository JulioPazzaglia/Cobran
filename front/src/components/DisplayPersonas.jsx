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
  const PagoHandler = props.PagoHandler;
  const edit = props.edit;
  const unlinkPersonas = props.unlinkPersonas;

  return (
    <View style={{height: 490}}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {personas.length > 0 &&
          personas.slice(0).reverse().map((persona) => {
            return (
              <View key={persona.id} style={Styles.personasItems}>
                <Text style={{fontSize:22}}>{persona.name}</Text>
                {edit?<TouchableOpacity style={Styles.unlink} onPress = {()=> unlinkPersonas(persona.id)}><Text>Eliminar de la lista</Text></TouchableOpacity>:persona.pagos.includes(listId)?<TouchableOpacity style={Styles.buttons} onPress = {()=> PagoHandler(persona.id)}><Text>✔️</Text></TouchableOpacity>:<TouchableOpacity style={Styles.buttonsX} onPress = {()=> PagoHandler(persona.id)}><Text>✖</Text></TouchableOpacity>}
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}

export default PersonasDisplay;