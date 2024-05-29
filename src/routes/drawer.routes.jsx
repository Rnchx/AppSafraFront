import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Detalhamento";
import Category from "../screens/Category";
import Products from "../screens/Users";
import { product } from "../data/Profile";
import Carrinho from "../screens/Carrinho";
import Cadastro from "../screens/Cadastro";

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
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Inicial",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: product }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Category"
        component={Category}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Categorias",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="users"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Produtos",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="users"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Produtos",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#103778"
          },
          headerTintColor: "white",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="users"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Cadastro",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
