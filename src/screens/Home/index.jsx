import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { product } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />

      <TouchButton route="Profile" title="Go to Profile" data={product} />

      <TouchButton route="Category" title="Go to Category" />
    </View>
  );
}
