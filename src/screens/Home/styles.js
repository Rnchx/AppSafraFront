import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  viewSearchLogo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  viewSearch: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E3EEFCE5",
    padding: 8,
    borderRadius: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  containerCategorys: {
  },
  containerProductsDestaques: {
    marginTop: 10
  },
  viewTextDestaques: {
    marginTop: 30,
  },
  inputSearch: {
    width: 200,
    height: 25,
    fontSize: 14,
  },
  containerCardCategory: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  containerCardCategory2: {
    backgroundColor: "#E3EEFCE5",
    height: 90,
    width: 90,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  viewCategory: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  nameCategory: {
    textAlign: "center",
    margin: 5,
    color: "#103778"
  },
  containerCart: {
    display: "flex",
    marginTop: 20,
    marginLeft: 20
  },
  buttonContainerCart: {
    backgroundColor: "#F58614",
    width: 110,
    borderRadius: 5,
    padding: 4
  },
  textContainerCart: {
    color: "white",
  },
  viewTextDestaques: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 155
  },
  textDestaques: {
    fontWeight: "bold",
    color: "#F58614",
    fontSize: 20,
    marginLeft: 15
  },
  viewDestaques: {
    marginTop: 10,
    backgroundColor: "#E3EEFCE5",
    marginLeft: 10,
    marginRight: 8,
    borderRadius: 20,
    padding: 10
  },
  containerCategoryAndMore: {
    display: "flex",
    flexDirection: "row",
  },
  containerMoreProducts: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 220
  },
  containerMoreProductsAcougue: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 215
  },
  containerMoreProductsHortiFruit: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 190
  },
  containerMoreandIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textMoreProducts: {
    color: "#103778",
    fontWeight: "400",
    fontSize: 15
  },
  textPadaria: {
    color: "#103778",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 5,
  },
  viewProductDestaques: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E3EEFCE5",
    gap: 8,
    marginLeft: 10
  },
  product: {
    backgroundColor: "#103778",
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 20,
    width: 110,
    height: 180,
  },
  textCategory: {
    fontWeight: "bold",
    color: "#103778",
  },
  productPhoto: {
    marginBottom: 5,
    width: 110,
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
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
  },
});

export default styles;
