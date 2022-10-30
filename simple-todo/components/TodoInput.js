import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const TodoInput = (props) => {
  const [newTodo, setNewTodo] = useState();

  const todoInputHandler = (newTodo) => {
    setNewTodo(newTodo);
  };

  const addTodoHandler = () => {
    props.onAddTodo(newTodo); // forward added todo to onAddTodo props
    setNewTodo("");
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.todoInput}
        onChangeText={todoInputHandler}
        placeholder="Input your Todo"
      />
      <Button
        style={styles.buttonSubmit}
        onPress={addTodoHandler}
        title="Add Todo"
      />
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  todoInput: {
    flex: 1,
    width: "70%",
    fontSize: 20,
    borderWidth: 3,
    borderColor: "#f1f3f5",
    padding: 5,
    marginRight: 8,
  },
  formContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "black",
    paddingBottom: 20,
    marginVertical: 20,
  },
});
