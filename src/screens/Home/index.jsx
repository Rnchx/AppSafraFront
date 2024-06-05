import { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

import styles from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {

  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const apiURL = "http://10.88.194.76:4000/products";
  const apiUrl2 = "http://10.88.194.76:4000/categorys";

  // const apiURL = "http://10.88.200.157:4000/products";
  // const apiUrl2 = "http://10.88.200.157:4000/categorys";

  const getIcon = (categoryName) => {
    switch (categoryName) {
      case 'Padaria':
        return <MaterialCommunityIcons name="cupcake" size={40} color="#103778" />;
      case 'Açougue':
        return <MaterialCommunityIcons name="knife" size={40} color="#103778" />
      case 'Horti-fruit':
        return <FontAwesome name="leaf" size={40} color="#103778" />;
      case 'Bebidas':
        return <FontAwesome name="glass" size={40} color="#103778" />;
      case 'Limpeza':
        return <FontAwesome name="trash" size={40} color="#103778" />;
      default:
        return null;
    }
  };

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
          <Image style={styles.logo} source={require("../../../assets/logo.png")} />
        </View>
      </View>

      <View style={styles.containerCategorys}>
        <ScrollView horizontal>
          { categories ? (
            <View style={styles.containerCardCategory}>
              {
                categories.map((category) => (
                  <View key={category.id} style={styles.containerCardCategory2}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CategoryProducts", { id: category.id })}>
                      <View style={styles.viewCategory}>
                        {getIcon(category.name)}
                        <Text style={styles.nameCategory}>{category.name}</Text>
                      </View>
                    </TouchableOpacity>
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
        {/* <ScrollView horizontal> */}

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

        {/* </ScrollView> */}
      </View >

    </View >

  );
}
