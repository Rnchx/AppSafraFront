import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Register() {
  const navigation = useNavigation();

  const [name, setNome] = useState([]);
  const [price, setPreco] = useState([]);
  const [description, setDescricao] = useState([]);
  const [type, setTipo] = useState([]);
  const [validity, setValidade] = useState([]);
  const [photo, setFoto] = useState([]);


  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const apiURL = "http://10.88.200.157:4000/products";


  const fetchProduct = async () => {
    try {
      const response = await axios.get(apiURL);
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  

  const deleteProduct = async (id) => {
    console.log("id do delete", id)
    const url = `apiURL/${id}`;
    try {
      await axios.delete(url);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const editProduct = async (id) => {
    console.log("id do edit", id)

    router.push(`apiURL/${id}`);
  };

  // Define a função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("apiURL", { name, price, description, type, validity, photo });
      setProducts([...products, response.data.data]);
      setNome("");
      setPreco("");
      setDescricao("");
      setTipo("");
      setValidade("");
      setFoto("");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  



  return (
    <View style={styles.container}>

      <Image style={styles.cimaOnda} source={require('../../../assets/em_cima_onda3.png')}></Image>
      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.input}>
        <AntDesign name="inbox" size={24} color="black" />
        <TextInput
          placeholder="Nome do produto"
          style={styles.cadastroInput}
          value={name}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </View>

      <View style={styles.input}>
      <MaterialIcons name="attach-money" size={24} color="black" />
        <TextInput
          placeholder="Preço do produto"
          style={styles.cadastroInput}
          value={price}
          onChange={(e) => setPreco(e.target.value)}
          required
        />
      </View>

      <View style={styles.input}>
      <MaterialCommunityIcons name="menu" size={24} color="black" />
        <TextInput
          placeholder="Descrição do produto"
          style={styles.cadastroInput}
          value={description}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </View>

      <View style={styles.input}>
      <Ionicons name="fast-food-outline" size={24} color="black" />
        <TextInput
          placeholder="Tipo do produto"
          style={styles.cadastroInput}
          value={type}
          onChange={(e) => setTipo(e.target.value)}
          required
        />
      </View>

      <View style={styles.input}>
      <AntDesign name="calendar" size={24} color="black" />
        <TextInput
          placeholder="Validade do produto"
          style={styles.cadastroInput}
          value={validity}
          onChange={(e) => setValidade(e.target.value)}
          required
        />
      </View>

      <View style={styles.input}>
      <Entypo name="image" size={24} color="black" />
        <TextInput
          placeholder="Endereço de imagem"
          style={styles.cadastroInput}
          value={photo}
          onChange={(e) => setFoto(e.target.value)}
          required
        />
      </View>
      <TouchableOpacity style={styles.button}
      type="submit" onClick={handleSubmit}>
        <Text style={styles.textButton}>Registrar</Text>
      </TouchableOpacity>

      <Image style={styles.baixoOnda} source={require('../../../assets/embaixo_onda2.png')}></Image>

    </View>
  );
}