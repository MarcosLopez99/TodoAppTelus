import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useTodoTask } from "../hooks/useTodoTask";

export default function AddTaskScreen({ navigation }) {
  const { value, setValue } = useTodoTask();
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Back" />
      <TextInput
        style={styles.input}
        placeholder="Tast"
        value={value}
        onChangeText={(text) => {
          setValue(value);
        }}
      />
      <Button onPress={() => {}} title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    width: "100%",
    height: 50,
  },
});
