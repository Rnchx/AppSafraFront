import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Popup = ({ icon1, message, icon2, type }) => {
  const colorStyle = type === 'success'? styles.success : styles.error;

  return (
    <View style={[styles.mainDiv, colorStyle]}>
      <Text style={styles.iconContainer}>
        {icon1}
        <Text style={styles.message}>{message}</Text>
        {icon2}
      </Text>
    </View>
  );
};

export default Popup;