import { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";

import { FontAwesome } from '@expo/vector-icons';

export default function Home() {

  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const apiURL = "http://10.88.194.121:4000/products";
  const apiUrl2 = "http://10.88.194.121:4000/categorys";

  // const apiURL = "http://10.88.200.157:4000/products";
  // const apiUrl2 = "http://10.88.200.157:4000/categorys";


  const fetchProduct = async () => {
    try {
      const response = await axios.get(apiURL);
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategorie = async () => {
    try {
      const response = await axios.get(apiUrl2);
      setCategories(response.data.categorys);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    fetchCategorie();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.viewSearchLogo}>

        <View style={styles.viewSearch}>
          <TextInput style={styles.inputSearch} placeholder="O que você precisa?" />
          <FontAwesome name="search" size={17} color="black" />
        </View>

        <View style={styles.viewLogo}>
          <Image style={styles.logo} source={require("../../../assets/logo.jpg")} />
        </View>
      </View>

      <View style={styles.containerCategorys}>
        <ScrollView horizontal>
          {categories ? (
            <View style={styles.containerCardCategory}>
              {
                categories.map((category) => (
                  <View style={styles.containerCardCategory2}>
                    <Text></Text>
                  </View>
                ))
              }
            </View>
          ) : (
            <Text style={styles.loading}>Carregando...</Text>
          )}
        </ScrollView>
      </View>

      <View style={styles.viewTextDestaques}>
        <Text style={styles.textDestaques}>Destaques</Text>
      </View>

      <View style={styles.viewDestaques}>
        <Text style={styles.textPadaria}>Padaria</Text>
        <ScrollView horizontal>

          {products ? (
            <View style={styles.viewProductDestaques}>
              {products.map((product) => (
                <View key={product.id} style={styles.product}>
                  <Image style={styles.productPhoto} source={{ uri: product.photo }} />
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productPrice}>{product.price}</Text>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductDetails", { id: product.id })}>
                    <Text style={styles.textDetalhes}>Detalhes</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.loading}>Carregando...</Text>
          )}

        </ScrollView>
      </View >

    </View >

  );
}
