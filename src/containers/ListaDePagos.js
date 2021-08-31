import React from "react";
import { SafeAreaView, Text, Button, View } from "react-native";
import Styles from "../styles/StylesSheet";

function ListaDePagos() {
  return (
    <SafeAreaView style={Styles.background}>
      <View style={Styles.list}>
        <View style={Styles.titulo}>
          <View style={Styles.subtitulos}>
            <Text style={Styles.subtitulos}>Monto total: 25000$</Text>
            <Text style={Styles.subtitulos}>20 personas</Text>
          </View>
          <View style={Styles.subtitulos}>
            <Text>Monto actual: 12500</Text>
            <Text>Precio por persona: 1250</Text>
          </View>
        </View>
      </View>
      <Text style={Styles.display}> Gaspar | ✔️ </Text>
      <Text style={Styles.display}> Tito | ✔️ </Text>
      <Text style={Styles.display}> Pocha | ❌ </Text>
      <Text style={Styles.display}> Leke | ✔️ </Text>
      <Text style={Styles.display}> Tona | ✔️ </Text>
      <Text style={Styles.display}> Lata | ❌ </Text>
      <Text style={Styles.display}> Jero | ❌ </Text>
      <Text style={Styles.display}> Chepo | ✔️ </Text>
      <Text style={Styles.display}> Elsho | ✔️ </Text>
      <Text style={Styles.display}> Fela | ❌ </Text>
      <Text style={Styles.display}> La Faca | ✔️ </Text>
      <Text style={Styles.display}> El Escalan | ❌ </Text>
      <Text style={Styles.display}> La Grulla | ❌ </Text>
      <Text style={Styles.display}> Coco | ✔️ </Text>
      <Text style={Styles.display}> Mau | ✔️ </Text>
      <Text style={Styles.display}> Afre | ❌ </Text>
      <Text style={Styles.display}> El Pela | ✔️ </Text>
      <Text style={Styles.display}> Jaso | ❌ </Text>
      <Text style={Styles.display}> Martain | ❌ </Text>
      <Text style={Styles.display}> Berna | ❌ </Text>
    </SafeAreaView>
  );
}

export default ListaDePagos;
