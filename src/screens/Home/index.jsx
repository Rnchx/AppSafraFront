import { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

import styles from "./styles";
import Title from "../../components/Title";

export default function Home() {

  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const apiURL = "http://10.88.194.121:4000/products";
  const apiUrl2 = "http://10.88.194.121:4000/categorys";


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

        {categories ? (
           <ScrollView horizontal>
          <View style={styles.containerCategories}>
            {categories.map((categorie) => (
              <View key={categorie.id} style={styles.product}>
                <Text>Teste</Text>
              </View>
            ))}
          </View>
          </ScrollView>
        ) : (
          <Text style={styles.loading}>Carregando...</Text>
        )
        }

      <Title title="Produtos" />

      {products ? (
        <View style={styles.containerProduct}>
          {products.map((product) => (
            <View key={product.id} style={styles.product}>
              <Image style={styles.logo} source={{ uri: product.photo }} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductsDetails", { id: product.id })}>
                <Text>Detalhes</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.loading}>Carregando...</Text>
      )}
    </View>
  );
}
