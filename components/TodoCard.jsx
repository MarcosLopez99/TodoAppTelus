import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const TodoCard = ({ title, onPressDelete }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={onPressDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#888",
    borderRadius: 8
  },
  deleteButton: {
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 8
  },
  deleteButtonText: {
    fontSize: 12,
    color: "#fff",
  },
});

export default TodoCard;
