import { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

import styles from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {

  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterPadaria, setFilterPadaria] = useState([]);
  const [filterAcougue, setFilterAcougue] = useState([]);
  const [filterHortiFruit, setFilterHortiFruit] = useState([]);
  const [filterBebidas, setFilterBebidas] = useState([]);
  const [filterLimpeza, setFilterLimpeza] = useState([]);

  // const apiURL = "http://10.88.194.76:4000/products";
  // const apiUrl2 = "http://10.88.194.76:4000/categorys";

  // const apiURL = "http://10.88.200.157:4000/products";
  // const apiUrl2 = "http://10.88.200.157:4000/categorys";

  // const apiURLPadaria = `http://10.88.200.157:4000/categorys/filter/Padaria`
  // const apiURLLimpeza = `http://10.88.200.157:4000/categorys/filter/Limpeza`

  const apiURL = "http://192.168.15.111:4000/products";
  const apiUrl2 = "http://192.168.15.111:4000/categorys"
  const apiURLPadaria = "http://192.168.15.111:4000/categorys/filter/Padaria"
  const apiURLAcougue = "http://192.168.15.111:4000/categorys/filter/Açougue"
  const apiURLHortiFruit = "http://192.168.15.111:4000/categorys/filter/Horti-Fruit"
  const apiURLBebidas = "http://192.168.15.111:4000/categorys/filter/Bebidas"
  const apiURLLimpeza = "http://192.168.15.111:4000/categorys/filter/Limpeza"

  const getIcon = (categoryName) => {
    switch (categoryName) {
      case 'Padaria':
        return <MaterialCommunityIcons name="cupcake" size={40} color="#103778" />;
      case 'Açougue':
        return <MaterialCommunityIcons name="knife" size={40} color="#103778" />
      case 'Horti-Fruit':
        return <FontAwesome name="leaf" size={40} color="#103778" />;
      case 'Bebidas':
        return <FontAwesome name="glass" size={40} color="#103778" />;
      case 'Limpeza':
        return <MaterialIcons name="cleaning-services" size={40} color="#103778" />
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

  const fetchPadariaFilter = async () => {
    try {
      const response = await axios.get(apiURLPadaria);
      setFilterPadaria(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAcougueFilter = async () => {
    try {
      const response = await axios.get(apiURLAcougue);
      setFilterAcougue(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchHortiFruitFilter = async () => {
    try {
      const response = await axios.get(apiURLHortiFruit);
      setFilterHortiFruit(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBebidasFilter = async () => {
    try {
      const response = await axios.get(apiURLBebidas);
      setFilterBebidas(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLimpezaFilter = async () => {
    try {
      const response = await axios.get(apiURLLimpeza);
      setFilterLimpeza(response.data.products);
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

  useEffect(() => {
    fetchPadariaFilter();
  }, []);

  useEffect(() => {
    fetchAcougueFilter();
  }, []);

  useEffect(() => {
    fetchHortiFruitFilter();
  }, []);

  useEffect(() => {
    fetchBebidasFilter();
  }, []);

  useEffect(() => {
    fetchLimpezaFilter();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.viewSearchLogo}>

        <View style={styles.viewSearch}>
          <TextInput style={styles.inputSearch} placeholder="O que você precisa?" />
          <FontAwesome name="search" size={17} color="black" />
        </View>

        <View style={styles.viewLogo}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Image style={styles.logo} source={require("../../../assets/logo.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerCategorys}>
        <ScrollView horizontal>
          {categories ? (
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


      <ScrollView style={styles.containerProductsDestaques}>
        <View style={styles.viewTextDestaques}>
          <Text style={styles.textDestaques}>Destaques</Text>
        </View>

        <View style={styles.viewDestaques}>
          <Text style={styles.textPadaria}>Padaria</Text>

          {filterPadaria ? (
            <View style={styles.viewProductDestaques}>
              {filterPadaria.slice(0, 3).map((product) => (
                <View key={product.id} style={styles.product}>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductDetails", { id: product.id })}>
                    <Image style={styles.productPhoto} source={{ uri: product.photo }} />
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>

          ) : (
            <Text style={styles.loading}>Carregando...</Text>
          )}

        </View >

        <View style={styles.viewDestaques}>
          <Text style={styles.textPadaria}>Açougue</Text>

          {filterAcougue ? (
            <View style={styles.viewProductDestaques}>
              {filterAcougue.slice(0, 3).map((product) => (
                <View key={product.id} style={styles.product}>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductDetails", { id: product.id })}>
                    <Image style={styles.productPhoto} source={{ uri: product.photo }} />
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>

          ) : (
            <Text style={styles.loading}>Carregando...</Text>
          )}

        </View >

        <View style={styles.viewDestaques}>
          <Text style={styles.textPadaria}>Horti-Fruit</Text>

          {filterHortiFruit ? (
            <View style={styles.viewProductDestaques}>
              {filterHortiFruit.slice(0, 3).map((product) => (
                <View key={product.id} style={styles.product}>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductDetails", { id: product.id })}>
                    <Image style={styles.productPhoto} source={{ uri: product.photo }} />
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>

          ) : (
            <Text style={styles.loading}>Carregando...</Text>
          )}

        </View >

        <View style={styles.viewDestaques}>
          <Text style={styles.textPadaria}>Bebidas</Text>

          {filterBebidas ? (
            <View style={styles.viewProductDestaques}>
              {filterBebidas.slice(0, 3).map((product) => (
                <View key={product.id} style={styles.product}>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductDetails", { id: product.id })}>
                    <Image style={styles.productPhoto} source={{ uri: product.photo }} />
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>

          ) : (
            <Text style={styles.loading}>Carregando...</Text>
          )}

        </View >

        <View style={styles.viewDestaques}>
          <Text style={styles.textPadaria}>Limpeza</Text>

          {filterLimpeza ? (
            <View style={styles.viewProductDestaques}>
              {filterLimpeza.slice(0, 3).map((product) => (
                <View key={product.id} style={styles.product}>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductDetails", { id: product.id })}>
                    <Image style={styles.productPhoto} source={{ uri: product.photo }} />
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>

          ) : (
            <Text style={styles.loading}>Carregando...</Text>
          )}
        </View >
      </ScrollView>

    </View >

  );
}
