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
  const edit = props.edit
  const delList = props.delList;

  return (
    <View style={{ height: 530, flexDirection: "column-reverse"}}>
      <ScrollView
        style={{flexDirection: "column"}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {Listas.length > 0? (
          Listas.slice(0).reverse().map((lista) => {
            return (
              <TouchableOpacity
                onPress={()=>touch(lista.id)}
                style={Styles.listItems}
                underlayColor={"#ff5733"}
                key={lista.id}
              >
                <Text style = {edit?{right:70, top:25,}:{right:0}} >{lista.name}</Text>
                <Text style = {edit?{right:70, top:25,}:{right:0}}>{lista.fecha}</Text>
                {edit?<TouchableOpacity style = {Styles.unlinkList} onPress = {()=> delList(lista.id)}><Text>Eliminar lista</Text></TouchableOpacity>:<View></View>}
              </TouchableOpacity>
            );
          })):(
            <Text>No hay listas!</Text>
          )}
      </ScrollView>
    </View>
  );
}

export default ListDisplay;
