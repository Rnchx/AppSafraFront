import { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import axios from "axios";

import styles from "./styles";
import Title from "../../components/Title";

export default function Products() {
  const [products, setProducts] = useState([]);

  const apiURL =
    "https://125a-201-63-78-210.ngrok-free.app/products";

  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiURL);
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Title title="Produtos" />

      {products ? (
        <View style={styles.products}>
          {products.map((product) => (
            <View key={product.id} style={styles.product}>
              <Image style={styles.logo} source={{ uri: product.photo }} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDescription}>{product.description}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.loading}>Carregando...</Text>
      )}
    </View>
  );
}
