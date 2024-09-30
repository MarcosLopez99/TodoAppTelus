import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    widht: "100%",
    height: 40,
    backgroundColor: "#777",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
  },
});

export default Button;
