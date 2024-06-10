import { StyleSheet } from "react-native";
import { HoverEffect } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerArrowAndIconSafra: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  logo: {
    width: 130,
    height: 130,
    marginLeft: 230
  },

  containerCategorys: {},

  containerCardCategory: {},

  containerCardCategory2: {
    marginLeft: 5,
  },

  nameCategory: {
    fontSize: 32,
    color: "#103778",
  },

  containerTypeProducts: {
    minHeight: 45,
    margin: 10,
    marginTop: 15
  },

  viewTypeProducts: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  type: {
  },

  buttonType: {
    backgroundColor: "#E3EEFC",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  textType: {
    color: "#103778",
  },

  containerScrollView: {
    marginTop: 20,
  },

  containerProductsCategory: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  viewProductDestaques: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 8
  },

  product: {
    backgroundColor: "#103778",
    borderRadius: 20,
    width: '30%',
    marginBottom: 10,
  },

  textCategory: {
    fontWeight: "bold",
    color: "#103778",
  },

  productPhoto: {
    marginBottom: 5,
    width: "100%",
    height: 100,
    borderRadius: 20,
  },

  productName: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
  },

  productPrice: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    margin: 5,
  },
});

export default styles;