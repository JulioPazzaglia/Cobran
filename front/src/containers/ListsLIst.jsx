import React, { useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import Styles from "../styles/StylesSheet";

import { getListas, deleteLista } from "../store/listas";
import { useSelector, useDispatch } from "react-redux";

import ListDisplay from "../components/ListDisplay";

function ListsList({ navigation }) {

  const [refreshing, setRefreshing] = React.useState(false);
  const [edit, setEdit] = React.useState(false)

  const touch = (id) => {
    navigation.navigate("Lists", {listId: id});
  };
  const NewList = ()=>{
    navigation.navigate("NewList");
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListas());
  }, [dispatch]);

  const Listas = useSelector((state) => state.listas);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const delList = (id) => {
    dispatch(deleteLista(id))
    .then(()=>dispatch(getListas()))
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(getListas())
    wait(1).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={Styles.background}>
      <View style={Styles.list}>
        <View style={Styles.titulo}>
          <Text style= {Styles.subtitulos}>Listas existentes:</Text>
          <TouchableOpacity style={Styles.buttons} onPress={NewList}>
            <Text>➕</Text>
          </TouchableOpacity>
        </View>
        <View>
          {Array.isArray(Listas)? <ListDisplay Listas={Listas} touch={touch} refreshing ={refreshing} onRefresh = {onRefresh} edit = {edit} delList = {delList}/>:<Text style={{height: 530}}>no hay listas!</Text>}
        </View>
        <TouchableOpacity style={Styles.ajustesList} onPress = {()=> setEdit(!edit)}>
          <Text style={{fontWeight:"bold", color: "#000000"}}>{edit?"Terminar ajustes":"Ajustes"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ListsList;
