import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  background: {
    alignItems: "center",
  },
  titulo: {
    width: "100%",
    height: "10%",
    backgroundColor: "#c8c8c8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 5,
  },
  listItems: {
    width: 330,
    height: "20%",
    backgroundColor: "#c8c8c8",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    borderRadius: 10,
  },
  list: {
    width: "90%",
    height: "90%",
    backgroundColor: "#eaeaea",
    alignItems: "center",
    marginVertical: 40,
    borderRadius: 10,
  },
  subtitulos: {
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: "5%",
    paddingVertical: "1%",
    fontSize: 15,
    fontWeight: "bold",
    width: "90%",
    borderWidth: 1,
    borderColor: "#bcbcbc",
  },
});

export default Styles;
