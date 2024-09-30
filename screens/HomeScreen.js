import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import TodoCard from "../components/TodoCard";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate("AddTask")} title="Add Task" />
      <FlatList data={[]} renderItem={() => <></>} />
      <TodoCard title="hola" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginHorizontal: 24,
  },
});
