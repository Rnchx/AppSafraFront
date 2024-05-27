import { Image, Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Title title="detalhamento" />

      <TouchButton route="Home" title="Go to Home" />

      <TouchButton route="Category" title="Go to Category" />

      <View style={styles.product}>
        <Title title="Products" />
        <Image style={styles.logo} source={{ uri: data.photo }} />
        <Text style={styles.text}>Link: {data.photo}</Text>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{data.description}</Text>
        <Text style={styles.text}>{data.price}</Text>
        <Text style={styles.text}>{data.validity}</Text>
      </View>
    </View>
  );
}
