import { View, TouchableOpacity, Text } from "react-native";
import { useEffect, useState } from "react";

import axios from "axios";

import styles from "./styles";

export default function CategoryProducts({ route }) {
  const { id } = route.params;

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiURL2 = `http://10.88.194.76:4000/categorys/${id}`;

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

  useEffect(() => {
    setCategories(null);
    setLoading(true);
    fetchCategorie();
  }, [id]);

  return (
    <View style={styles.container}>
      
      <View style={styles.containerCategorys}>
          { categories ? (
            <View style={styles.containerCardCategory}>
                  <View key={categories.id} style={styles.containerCardCategory2}>
                        <Text style={styles.nameCategory}>{categories.name}</Text>
                  </View>
            </View>
          ) : (
            <Text style={styles.loading}>Carregando Setor</Text>
          )}
      </View>

    </View>
  );
}
