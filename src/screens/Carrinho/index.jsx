import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useCart } from "../../components/Cart";
import { useNavigation } from "@react-navigation/native";

export default function ShopCart() {
  const { cart, removeProductFromCart, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantities, setQuantities] = useState({});

  const navigation = useNavigation();

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      total += parseFloat(product.price) * (quantities[product.id] || 1);
    });
    setTotalPrice(total);
  };

  const addMoreToCart = (productId) => {
    setQuantities({ ...quantities, [productId]: (quantities[productId] || 1) + 1 });
  };

  const removeFromCart = (productId) => {
    if (quantities[productId] > 1) {
      setQuantities({ ...quantities, [productId]: quantities[productId] - 1 });
    } else if (quantities[productId] === 1) {
      const updatedQuantities = { ...quantities };
      delete updatedQuantities[productId];
      setQuantities(updatedQuantities);
      removeProductFromCart(productId);
    }
  }

  const alertBuyProducts = () => {
    return clearCart();
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cart, quantities]);

  useEffect(() => {
    const initialQuantities = {};
    cart.forEach(product => {
      initialQuantities[product.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerCirculoAzul}>
          <ScrollView>
            {cart.length === 0 ? (
              <View style={styles.containerMessageAddSomethingInCart}>
                <Text style={styles.messageAddSomethingInCart}>Adicione produtos ao carrinho...</Text>

                <Image style={styles.logo} source={require("../../../assets/cart.gif")} />
              </View>
            ) : (
              cart.map((product, index) => (
                <View key={index} style={styles.containerCardProduct}>
                  <View style={styles.containerCardProductItem}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductDetails", { id: product.id, idcategory: product.idcategory })}>
                      <Image style={styles.productPhoto} source={{ uri: product.photo }} />
                    </TouchableOpacity>
                    <View style={styles.containerNamePrice}>
                      <Text style={styles.productName}>{product.name} -</Text>
                      <Text style={styles.productDescription}>{product.description}</Text>
                      <View style={styles.containerAddAndRemoveProduct}>
                        <TouchableOpacity onPress={() => addMoreToCart(product.id)} style={styles.buttonAddMoreProduct}>
                          <Text style={styles.textbuttonAddMoreProduct}> + </Text>
                        </TouchableOpacity>
                        <View style={styles.containertextProductQuantity}>
                          <Text style={styles.textProductQuantity}>{quantities[product.id] || 1}</Text>
                        </View>
                        <TouchableOpacity onPress={() => removeFromCart(product.id)} style={styles.buttonRemoveProduct}>
                          <Text style={styles.textbuttonRemoveProduct}> - </Text>
                        </TouchableOpacity>
                        <Text style={styles.productPrice}>{product.price}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))
            )}
          </ScrollView>
        </View>

        <View style={styles.containerSubtotal}>
          <View style={styles.containerSubtotalItem}>
            <View style={styles.containerSubtotalValues}>
              <Text style={styles.textSubtotal}>Subtotal</Text>
              <Text style={styles.textSubtotalValue}>R$ {totalPrice.toFixed(2)}</Text>
            </View>
            <View style={styles.containerSubtotalValues}>
              <Text style={styles.textSubtotal}>Cupom</Text>
              <Text style={styles.textSubtotalValue}>R$ -----</Text>
            </View>
          </View>
        </View>

        <View style={styles.containerLine}>
          <Text style={styles.line}>────────────────────────</Text>
        </View>

        <View style={styles.containerValueTotal}>
          <View style={styles.containerValueTotalItem}>
            <Text style={styles.textTotal}>Total:</Text>
            <Text style={styles.textTotalValue}>R$ {totalPrice.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.containerButtonBuy}>
          <TouchableOpacity style={styles.buttonBuy} onPress={alertBuyProducts}>
            <Text style={styles.textButtonBuy}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
