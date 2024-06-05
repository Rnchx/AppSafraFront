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
    marginLeft: 30,
  },
  viewSearch: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E3EEFCE5",
    padding: 8,
    borderRadius: 20,
  },
  logo: {
    width: 130,
    height: 130,
    borderRadius: 100,
    margin: 5,
  },
  containerCategorys: {
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
  },
  viewTextDestaques: {
    marginTop: 20
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
    marginRight: 10,
    borderRadius: 20,
    padding: 10
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
    gap: 8
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
    fontSize: 20,
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
    fontSize: 14,
    fontWeight: "400",
  },
  productPrice: {
    color: "#F58614",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    margin: 5
  },
  textDetalhes: {
    color: "white",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center"
  }
});

export default styles;
