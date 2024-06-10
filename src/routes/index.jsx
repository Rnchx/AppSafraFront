import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Cart } from '../components/Cart';

import DrawerRoutes from "./drawer.routes"

export default function Routes() {
  return (
    <Cart>
    <NavigationContainer>
      <DrawerRoutes />
      <StatusBar style="auto" />
    </NavigationContainer>
    </Cart>
  );
}
