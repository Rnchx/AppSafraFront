import { View, TouchableOpacity, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

export default function CategoryProducts({ route }) {
  const { id } = route.params;
  const { name } = route.params;
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterProductsType, setFilterProductsType] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState(null);

  const apiURL2 = `http://10.88.200.157:4000/categorys/${id}`;
  const apiURLFilterCategoryProducts = `http://10.88.200.157:4000/categorys/filter/${name}`;
  const apiURLFilterProductsType = `http://10.88.200.157:4000/products/type/`;

  const fetchCategorie = async () => {
    try {
      const response = await axios.get(apiURL2);
      setCategories(response.data.category);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategoryFilter = async () => {
    try {
      const response = await axios.get(apiURLFilterCategoryProducts);
      setProducts(response.data.products || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFilterProductsType = async (type) => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiURLFilterProductsType}${type}`);
      setFilterProductsType(response.data.product || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCategorie();
    fetchCategoryFilter();
    setSelectedType(null);
  }, [id]);

  useEffect(() => {
    if (selectedType) {
      fetchFilterProductsType(selectedType);
    } else {
      setFilterProductsType([]);
    }
  }, [selectedType]);

  const getUniqueTypes = (products) => {
    const types = products.map(product => product.type);
    return [...new Set(types)];
  };

  const uniqueTypes = getUniqueTypes(products);

  return (
    <View style={styles.container}>
      <View style={styles.containerArrowAndIconSafra}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name="keyboard-arrow-left" size={45} color="#103778" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Image style={styles.logo} source={require("../../../assets/logo.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerCategorys}>
        {categories ? (
          <View key={categories.id} style={styles.containerCardCategory}>
            <View style={styles.containerCardCategory2}>
              <Text style={styles.nameCategory}>{categories.name}</Text>
            </View>
          </View>
        ) : (
          <Text style={styles.loading}>Carregando Setor</Text>
        )}
      </View>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <View style={styles.containerTypeProducts}>
          {products.length ? (
            <View style={styles.viewTypeProducts}>
              <TouchableOpacity
                style={[
                  styles.buttonType,
                  selectedType === null && { backgroundColor: "#103778" }
                ]}
                onPress={() => setSelectedType(null)}
              >
                <Text style={[styles.textType, selectedType === null && { color: "white" }]}>Todos</Text>
              </TouchableOpacity>
              {uniqueTypes.map((type, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.buttonType,
                    selectedType === type && { backgroundColor: "#103778" }
                  ]}
                  onPress={() => setSelectedType(type)}
                >
                  <Text style={[styles.textType, selectedType === type && { color: "white" }]}>{type}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Text style={styles.loading}>Carregando...</Text>
          )}
        </View>
      </ScrollView>

      <ScrollView style={styles.containerScrollView}>
        <View style={styles.containerProductsCategory}>
          {loading ? (
            <Text style={styles.loading}>Carregando...</Text>
          ) : (
            <View style={styles.viewProductDestaques}>
              {(selectedType ? filterProductsType : products).map((product) => (
                <View key={product.id} style={styles.product}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("ProductDetails", { id: product.id, idcategory: product.idcategory })}
                  >
                    <Image style={styles.productPhoto} source={{ uri: product.photo }} />
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>R$ {product.price}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
