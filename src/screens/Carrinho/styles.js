import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerCirculoAzul: {
    backgroundColor: "#103778",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    height: 350,
  },

  containerButtonBack: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: 8,
    marginRight: 8
  },

  buttonContinueBuy: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F58614",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 4,
    borderRadius: 6
  },

  textContContinueBuy: {
    color: "white"
  },

  containerMessageAddSomethingInCart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 80
  },

  messageAddSomethingInCart: {
    color: "white",
    fontWeight: "400",
    fontSize: 16
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 30
  },

  containerCardProduct: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 15,
    width: 400
  },

  containerCardProductItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E3EEFC",
    padding: 5,
    borderRadius: 10,
    width: "75%",
    height: 75
  },

  productPhoto: {
    width: 60,
    height: 60,
    borderRadius: 10
  },

  productNameContainer: {
    flex: 1,
    overflow: "hidden",
    numberOfLines: 2,
    ellipsizeMode: "tail"
  },

  productName: {
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 6
  },

  productDescription: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 6,
    color: "#F58614"
  },

  productPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#F58614",
    marginLeft: 20
  },

  containerAddAndRemoveProduct: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40,
    marginTop: 5
  },

  containerButtonAddMoreProduct: {

  },

  containerButtonRemoveProduct: {

  },

  buttonAddMoreProduct: {
    backgroundColor: "#103778",
    padding: 3,
    borderRadius: 2,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonRemoveProduct: {
    backgroundColor: "#103778",
    padding: 3,
    borderRadius: 2,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center"
  },

  textbuttonAddMoreProduct: {
    color: "white",
  },

  textbuttonRemoveProduct: {
    color: "white",
  },

  containertextProductQuantity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "#10377833",
    width: 25,
    height: 25,
    borderRadius: 2
  },

  textProductQuantity: {
    color: "white"
  },


  containerSubtotal: {
    display: "flex",
    alignItems: "center",
    marginTop: 90
  },

  containerSubtotalItem: {
    display: "flex",
    gap: 20
  },

  containerSubtotalValues: {
    display: "flex",
    flexDirection: "row",
    gap: 160
  },

  textSubtotal: {
    color: "#103778",
    fontWeight: "300",
    fontSize: 16
  },

  textSubtotalValue: {
    color: "#F58614",
    fontWeight: "600"
  },

  containerLine: {
    display: "flex",
    alignItems: "center"
  },

  line: {
    fontWeight: "bold"
  },

  containerValueTotal: {
    display: "flex",
    alignItems: "center",
    marginTop: 15
  },

  containerValueTotalItem: {
    display: "flex",
    flexDirection: "row",
    gap: 160
  },

  containerValueTotalValues: {
  },

  textTotal: {
    color: "#103778",
    fontWeight: "800",
    fontSize: 18
  },

  textTotalValue: {
    color: "#F58614",
    fontWeight: "600"
  },

  containerButtonBuy: {
    display: "flex",
    alignItems: "center",
    marginTop: 30
  },

  buttonBuy: {
    backgroundColor: "#103778",
    borderRadius: 10,
    width: 250,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },

  textButtonBuy: {
    textAlign: "center",
    color: "white",
    fontWeight: "700",
    fontSize: 16
  }

});

export default styles;
