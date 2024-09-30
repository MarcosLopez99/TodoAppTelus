import { Text, View, TextInput, StyleSheet } from "react-native";
import React, { Component } from "react";

export const Input = ({ props }) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
  },
});

export default Input;
