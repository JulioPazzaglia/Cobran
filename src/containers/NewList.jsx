import React, { useState } from "react";
import { SafeAreaView, TextInput, View, Text, TouchableOpacity } from "react-native";
import Styles from "../styles/StylesSheet";

import { postLista } from "../store/listas";
import { useDispatch } from "react-redux"

import NumericInput from "react-native-numeric-input";

function ListsList({navigation}) {

  const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [monto, setMonto] = useState(0)

  let date = new Date

  const [dia, setDia] = useState(date.getDay.toString())
  const [mes, setMes] = useState(date.getMonth.toString())

  const createLista = () => {
    const body = {
      name: name,
      gastosTotales: monto,
      fecha: `${dia}/${mes}`
    }
    if(name){
      dispatch(postLista(body))
      .then(()=>{
        alert("Lista creada")
        navigation.goBack()
      })
    }
  }

  return (
    <SafeAreaView style={Styles.background}>
      <View style={Styles.listNew}>
        <View style={Styles.newListName}>
          <View style={Styles.newListItems}>
            <TextInput
              style={Styles.textInput}
              onChangeText={(e) => setName(e)}
              placeholder={"Nombre de la lista"}
            />
          </View>
          <View style={Styles.newListItems}>
            <Text>Fecha:</Text>
            <View style={Styles.datePicker}>
              <NumericInput
                minValue={0}
                maxValue={31}
                type="up-down"
                rounded
                totalWidth={75}
                totalHeight={40}
                borderColor={"#c8c8c8"}
                onChange={(e) => {
                  setDia(e)
                }}
              />
              <NumericInput
                minValue={0}
                maxValue={12}
                type="up-down"
                rounded
                totalWidth={75}
                totalHeight={40}
                borderColor={"#c8c8c8"}
                onChange={(e) => {
                  setMes(e)
                }}
              />
            </View>
          </View>
        </View>
        <View style={Styles.newListinput}>
          <Text>Monto total:</Text>
          <NumericInput
            minValue={0}
            type="up-down"
            rounded
            totalWidth={250}
            totalHeight={40}
            borderColor={"#bababa"}
            onChange={(e) => setMonto(e)}
            separatorWidth={2}
          />
        </View>
        <TouchableOpacity
              onPress={()=> createLista()}
              style={Styles.buttonInput}
              underlayColor={"#77e681"}
            >
          <Text>Crear</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ListsList;
