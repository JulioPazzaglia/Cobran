import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import Styles from "../styles/StylesSheet";

import DisplayPersonas from "../components/DisplayPersonas";
import SearchDisplay from "../components/SearchDisplay";

import { useSelector, useDispatch } from "react-redux";

import { getPersonasListadas, putPagos, putLink, deleteLink } from "../store/personasListadas";
import { getSearch, postPersona } from "../store/personas"

function ListaDePagos({ route }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [searching, setSearching] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [edit, setEdit] = React.useState(false);

  //Dispatch and retrieve stuff
  const { listId } = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersonasListadas(listId));
  }, [dispatch]);

  const lista = useSelector((state) => state.listaPersonas);

  // cuentas y funciones
  if (lista.personas) {
    var pagos = 0;
    lista.personas.map((persona) => {
      if (persona.pagos.includes(listId)) pagos++;
    });
  }
  const PagoHandler = (id) => {
    dispatch(putPagos({ id: id, listId: listId })).then(() =>
      dispatch(getPersonasListadas(listId))
    );
  };

  //Searchbar stuff

  const search = (focus) => {
    if (focus) {
      setSearching(true);
    } else {
      setSearching(false);
      setInput("")
    }
  };

  const searchDispatch = (name) => {
    dispatch(getSearch(name))
  }

  const searchPersonas = useSelector((state) => state.searchPersonas);

  //Add people stuff
  const linkPersonas = (idPersona) => {
    const body = {
      persona: idPersona,
      lista: listId
    }
    dispatch(putLink(body))
    .then(()=>dispatch(getPersonasListadas(listId)))
  }

  const unlinkPersonas = (idPersona) => {
    const body = {
      persona: idPersona,
      lista: listId
    }
    dispatch(deleteLink(body))
    .then(()=>dispatch(getPersonasListadas(listId)))
  }

  const postPersonas = () => {
    const body = {
      name: input
    }
    dispatch(postPersona(body))
    .then((persona) => linkPersonas(persona.payload.id))
    .then(()=>dispatch(getPersonasListadas(listId)))
    .then(search(false))
  }

  //Refresh stuff
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(getPersonasListadas(listId));
    wait(1).then(() => setRefreshing(false));
  }, []);

  //Render stuff
  return (
    <SafeAreaView style={Styles.background}>
      {lista.personas && (
        <View style={Styles.list}>
          <View style={Styles.titulo}>
            <View style={Styles.listaNombre}>
              <View>
                <Text style={Styles.textSpace}>
                  Monto total: {lista.gastosTotales}$
                </Text>
                <Text style={Styles.textSpace}>{`${
                  lista.personas.length
                } persona${lista.personas.length === 1 ? "" : "s"}`}</Text>
              </View>
              <View>
                <Text style={Styles.textSpace}>
                  Monto actual:{" "}
                  {pagos *
                    Math.round(lista.gastosTotales / lista.personas.length)}
                  $
                </Text>
                <Text style={Styles.textSpace}>
                  Monto per cápita:{" "}
                  {Math.round(lista.gastosTotales / lista.personas.length)}$
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={Styles.personasItems}>
              <TextInput
                style={Styles.textInput}
                onChangeText={(e) => {
                  setInput(e)
                  searchDispatch(e)
                }}
                value = {input}
                placeholder={"Agregar a la lista..."}
                onFocus={() => search(true)}
                onSubmitEditing = {()=> search(false)}
              />
              <TouchableOpacity style={Styles.buttons}>
                <Text>🔎</Text>
              </TouchableOpacity>
            </View>
            {searching &&
              <View>
                <SearchDisplay 
                refreshing={refreshing}
                onRefresh={onRefresh}
                list = {searchPersonas}
                linkPersonas = {linkPersonas}
                postPersona = {postPersonas}
                />
              </View>

            }
            {lista.personas.length > 0 ? (
              <DisplayPersonas
                personas={lista.personas}
                id={lista.id}
                refreshing={refreshing}
                onRefresh={onRefresh}
                PagoHandler={PagoHandler}
                edit = {edit}
                unlinkPersonas = {unlinkPersonas}
              />
            ) : (
              <Text style={{height: 490}}>No hay personas en esta lista</Text>
            )}
          </View>
            <TouchableOpacity style={Styles.ajustes} onPress = {()=> setEdit(!edit)}>
                <Text style={{fontWeight:"bold"}}>{edit?"Terminar ajustes":"Ajustes"}</Text>
            </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

export default ListaDePagos;
