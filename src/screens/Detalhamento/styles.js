import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  containerImageCirculoAzul: {
    display: "flex",
    backgroundColor: "#103778",
    // Width: "100%",
    borderBottomRightRadius: 180,
    borderBottomLeftRadius: 180
  },

  containerButtonBack: {
  },

  containerPhotoProduct: {
    display: "flex",
    alignItems: "center",
    },

  containerproduct: {
    margin: 20
  },

  containerNameAndPriceProduct: {
    width: "100%"
  },

  logo: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },

  texto:{
    fontSize: 20,
    margin: 2
  },

  preco: {
    fontSize: 30,
    color: "#F58614",
    fontWeight: "bold",
  },

  containerButtonAddShopCart: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },

  buttonAddCart: {
    backgroundColor: "#103778",
    padding: 10,
    borderRadius: 10,
    width: 300,
    shadowOffset: {width: 3,height: 3},
    shadowOpacity: 0.3,
  },

  buttonPageCart: {
    padding: 10,
    borderRadius: "100%",
    shadowOffset: {width: 2,height: 3},
    shadowOpacity: 0.3,
  },

  containerQuatityProductsInCart: {
    width: 15,
    backgroundColor: "red",
    marginLeft: 20,
    padding: 2,
    borderRadius: 10,
    top: 5,
    zIndex: 1
  },

  quatityProductsInCart: {
    color: "white",
    textAlign: "center"
  },

  textbuttonAddCart: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  },

  product: {
    justifyContent: "center",
    alignItems: "center",
  },

  textoBotao: {
    color: "white",
    fontSize: 20,
    marginLeft: 35,
    fontWeight: "bold",
  },

  containerCards: {
    backgroundColor: "#E3EEFC",
  },

  containerCards: {
  },

  containerButtonMoreProducts: {
  },

  containerMoreProducts: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 30,
    backgroundColor: "#E3EEFC",
  },

  textMoreProducts: {
    color: "#103778",
    fontWeight: "600",
    fontSize: "15",
    left: 6
  },

  iconMoreProduct: {
    marginLeft: 6
  },

  containerProducts: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E3EEFC",
    height: 250,
    // top: 50
  },

  containerProductsItens: {
    backgroundColor: "#103778",
    alignItems: "center",
    borderRadius: 20,
    width: 130,
    margin: 10,
    height: 230,
  },

  containerPhotoProducts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  productPhoto: {
    marginBottom: 5,
    width: 130,
    height: 120,
    borderRadius: 20,
  },

  productName: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
  },

  productPrice: {
    color: "#F58614",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
  },

  containerButtonBuyProduct: {
    margin: 10
  },

  buttonBuyProduct: {
    backgroundColor: "#F58614",
    padding: 8,
    borderRadius: 5
  },

  textButtonBuyProduct: {
    color: "white",
    fontWeight: "500"
  }


});

export default styles;
