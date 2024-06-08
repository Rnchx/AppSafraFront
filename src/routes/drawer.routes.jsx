import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

import Home from "../screens/Home";
import ProductDetails from "../screens/Detalhamento";
import CategoryProducts from "../screens/Category";
import ShopCart from "../screens/Carrinho";
import Register from "../screens/Cadastro";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#103778" : "gray"}
            />
          ),
          headerStyle: { backgroundColor: "#10377B" },
          drawerLabel: "Início",
          drawerActiveTintColor: "#103778",
          drawerInactiveTintColor: "gray",
        }}
      />
      <Drawer.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          drawerItemStyle: { display: "none" },
          headerTitle: "",
          drawerBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerBarLabel: "Perfil",
          drawerBarActiveTintColor: "#131313",
          drawerBarInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="CategoryProducts"
        component={CategoryProducts}
        options={{
          drawerItemStyle: { display: "none" },
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          headerStyle: { backgroundColor: "#10377B" },
          drawerLabel: "Categorias",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="ShopCart"
        component={ShopCart}
        options={{
          drawerItemStyle: { display: "none" },
          drawerBarIcon: ({ focused }) => (
            <Feather
              name="users"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          headerStyle: { backgroundColor: "#10377B" },
          drawerBarLabel: "Produtos",
          drawerBarActiveTintColor: "#131313",
          drawerBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <FontAwesome5 name="newspaper" size={24} color={focused ? "#103778" : "gray"} />
          ),
          headerStyle: { backgroundColor: "#10377B" },
          drawerLabel: "Cadastro de Produtos",
          drawerBarActiveTintColor: "#103778",
          drawerBarInactiveTintColor: "gray",
        }}
      />

    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
