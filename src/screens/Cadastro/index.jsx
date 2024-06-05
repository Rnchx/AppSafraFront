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

import Product from "../../models/Product";
import productRepository from "../../models/listProducts";

export default function Register({ route }) {
  const navigation = useNavigation();

  // Garante que produtos e edit tenham valores padrão caso route.params seja undefined
  let { produtos, edit } = route.params || {};


  const [name, setNome] = useState('');
  const [price, setPreco] = useState(0);
  const [description, setDescricao] = useState('');
  const [type, setTipo] = useState('');
  const [validity, setValidade] = useState('');
  const [photo, setFoto] = useState('');
  const [idCategory, setCategorias] = useState(0);

  const [showPopup, setShowPopup] = useState(false);
  const [popupIcon1, setPopupIcon1] = useState(null);
  const [popupIcon2, setPopupIcon2] = useState(null);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');

  const [isUpdate, setIsUpdate] = useState(edit);

  const [products, setProducts] = useState([]);
  const [categorys, setCategories] = useState([]);

  const apiURL = "http://10.88.194.76:4000/products";
  const apiUrl2 = "http://10.88.194.76:4000/categorys";


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

  const handleShowPopup = (icon1, message, icon2, type, time) => {
    setPopupMessage(message)
    setPopupIcon1(icon1)
    setPopupIcon2(icon2)
    setPopupType(type)
    setShowPopup(true)
    setTimeout(() => {
      setShowPopup(false)
    }, time)
  }

  useEffect(() => {
    if (edit) {
      setNome(produtos.name);
      setPreco(produtos.price);
      setTipo(produtos.type);
      setValidade(produtos.validity);
      setDescricao(produtos.description);
      setFoto(produtos.photo);
      setCategorias(produtos.idCategory);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [produtos, edit]);

  // Define a função para lidar com o envio do formulário
  const handleProductAction = () => {
    if (isUpdate) {
      productRepository.updateInDatabase( name, price, type, validity, description, photo, idCategory);
      clearInputs();
    } else {
      const newProduct = new Product(name, name, price, type, validity, description, photo, idCategory);
      productRepository.saveToDatabase(newProduct);
      handleShowPopup(null, 'Agente cadastrado', 'sucess', 3000)
      clearInputs();
    }
  };

  const clearInputs = () => {
    setIsUpdate(false);
    edit = false;
    setNome("");
    setPreco("");
    setDescricao("");
    setTipo("");
    setValidade("");
    setFoto("");
    setCategorias('');
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    fetchCategorie();
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
          onChangeText={setNome}
          required
        />
      </View>

      <View style={styles.input}>
        <MaterialIcons name="attach-money" size={24} color="black" />
        <TextInput
          placeholder="Preço do produto"
          style={styles.cadastroInput}
          value={price}
          onChangeText={setPreco}
          required
        />
      </View>

      <View style={styles.input}>
        <MaterialCommunityIcons name="menu" size={24} color="black" />
        <TextInput
          placeholder="Descrição do produto"
          style={styles.cadastroInput}
          value={description}
          onChangeText={setDescricao}
          required
        />
      </View>

      <View style={styles.input}>
        <Ionicons name="fast-food-outline" size={24} color="black" />
        <TextInput
          placeholder="Tipo do produto"
          style={styles.cadastroInput}
          value={type}
          onChangeText={setTipo}
          required
        />
      </View>

      <View style={styles.input}>
        <AntDesign name="calendar" size={24} color="black" />
        <TextInput
          placeholder="Validade do produto"
          style={styles.cadastroInput}
          value={validity}
          onChangeText={setValidade}
          required
        />
      </View>

      <View style={styles.input}>
        <Entypo name="image" size={24} color="black" />
        <TextInput
          placeholder="Endereço de imagem"
          style={styles.cadastroInput}
          value={photo}
          onChangeText={setFoto}
          required
        />
        </View>

        <View style={styles.input}>
          <Entypo name="image" size={24} color="black" />
          <TextInput
            placeholder="Categoria do produto"
            style={styles.cadastroInput}
            value={idCategory}
            onChangeText={setCategorias}
            required
          />
        </View>

        <TouchableOpacity style={styles.button} type="submit" onPress={handleProductAction}>
          <Text style={styles.textButton}>{isUpdate ? "Salvar Alterações" : "Criar Usuário"}</Text>
        </TouchableOpacity>

        {isUpdate && (
          <TouchableOpacity style={styles.button} onPress={clearInputs}>
            <Text>Cancelar Edição</Text>
          </TouchableOpacity>
        )}
        <Image style={styles.baixoOnda} source={require('../../../assets/embaixo_onda2.png')}></Image>

      </View>
      );
}