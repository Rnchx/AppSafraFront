import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";

export default function ProductDetails({ route }) {
  const { id } = route.params;
  const { idcategory } = route.params;

  const navigation = useNavigation();

  const [product, setProduct] = useState(null);
  const [filterProductByidCategory, setfilterProductByidCategory] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiURL = `http://192.168.15.111:4000/products/${id}`;
  const apiURL2 = `http://192.168.15.111:4000/products/idcategory/${idcategory}`;
  const apiURL3 = "http://192.168.15.111:4000/categorys";

  const fetchProduct = async () => {
    try {
      const response = await axios.get(apiURL);
      setProduct(response.data.product);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFilterProducts = async () => {
    try {
      const response = await axios.get(apiURL2);
      setfilterProductByidCategory(response.data.product);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategorie = async () => {
    try {
      const response = await axios.get(apiURL3);
      setCategories(response.data.categorys);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setProduct(null);
    setLoading(true);
    fetchProduct();
  }, [id]);

  useEffect(() => {
    setfilterProductByidCategory(null);
    setLoading(true);
    fetchFilterProducts();
  }, [idcategory]);

  useEffect(() => {
    setCategories(null);
    setLoading(true);
    fetchCategorie();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerImageCirculoAzul}>
          <View style={styles.containerButtonBack}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
              <MaterialIcons name="keyboard-arrow-left" size={45} color="#F58614" />
            </TouchableOpacity>
          </View>

          {product ? (
            <View style={styles.containerPhotoProduct}>
              <Image style={styles.logo} source={{ uri: product.photo }} />
            </View>
          ) : (
            <Text style={styles.loading}>Carregando...</Text>
          )}
        </View>

        {product ? (
          <View style={styles.containerproduct}>
            <View key={product.id} style={styles.product}>
              <View style={styles.containerNameAndPriceProduct}>
                <Text style={styles.texto}>{product.name + "- " + product.description}</Text>
                <Text style={styles.preco}>R$ {product.price}</Text>
              </View>
              <View style={styles.containerButtonAddShopCart}>
                <TouchableOpacity style={styles.buttonAddCart}>
                  <Text style={styles.textbuttonAddCart}>+ Adicione ao carrinho</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <Text style={styles.loading}>Carregando...</Text>
        )}

        <View style={styles.containerCards}>
          {categories ? (
            <View style={styles.containerButtonMoreProducts}>
              {categories
                .filter((category) => category.id === idcategory)
                .map((category) => (
                  <TouchableOpacity key={category.id} style={styles.button} onPress={() => navigation.navigate("CategoryProducts", { id: category.id, name: category.name })}>
                    <View style={styles.containerMoreProducts}>
                      <Text style={styles.textMoreProducts}>Mais produtos</Text>
                      <MaterialIcons style={styles.iconMoreProduct} name="arrow-forward-ios" size={18} color="#103778" />
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          ) : (
            <Text style={styles.loading}>Carregando...</Text>
          )}
          {filterProductByidCategory ? (
            <View style={styles.containerProducts}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {filterProductByidCategory.slice(1, 5).map((product) => (
                  <View key={product.id} style={styles.containerProductsItens}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductDetails", { id: product.id, idcategory: product.idcategory })}>
                      <View style={styles.containerPhotoProducts}>
                        <Image style={styles.productPhoto} source={{ uri: product.photo }} />
                      </View>
                      <Text style={styles.productName}>{product.name}</Text>
                      <Text style={styles.productPrice}>R$ {product.price}</Text>
                    </TouchableOpacity>
                    <View style={styles.containerButtonBuyProduct}>
                      <TouchableOpacity style={styles.buttonBuyProduct}>
                        <Text style={styles.textButtonBuyProduct}>Comprar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          ) : (
            <Text style={styles.loading}>Carregando...</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
