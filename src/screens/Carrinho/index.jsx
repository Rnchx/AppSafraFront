import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function ShopCart() {
  return (
    <View style={styles.container}>
      <Title title="Carrinho" />

      <TouchButton route="Category" title="Go to Category" />

      <TouchButton route="Profile" title="Go to Profile" />
    </View>
  );
}