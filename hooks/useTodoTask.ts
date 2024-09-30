import { useState } from "react";

export const useTodoTask = () => {
  const [listOfTask, setListOfTask] = useState("");
  const [value, setValue] = useState("");

  const hanldeAddTask = () => {

  }

  return {
    value,
    setValue,
  };
};
