import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";

export default function Cadastro() {
  return (
    <View style={styles.container}>

      <Image style={styles.cimaOnda} source={require('../../../assets/em_cima_onda3.png')}></Image>
      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.input}>
        <AntDesign name="inbox" size={24} color="black" />
        <TextInput
          placeholder="Nome do produto"
          style={styles.cadastroInput}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Preço do produto"
          style={styles.cadastroInput}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Descrição do produto"
          style={styles.cadastroInput}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Validade do produto"
          style={styles.cadastroInput}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Endereço de imagem"
          style={styles.cadastroInput}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Registrar</Text>
      </TouchableOpacity>

      <Image style={styles.baixoOnda} source={require('../../../assets/embaixo_onda.png')}></Image>

    </View>
  );
}