import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const TodoInput = (props) => {
  const [newTodo, setNewTodo] = useState();

  const todoInputHandler = (newTodo) => {
    setNewTodo(newTodo);
  };

  const addTodoHandler = () => {
    props.onAddTodo(newTodo); // forward added todo to onAddTodo props
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.formContainer}>
        <Image source={require("../assets/favicon.png")} />
        <TextInput
          style={styles.todoInput}
          onChangeText={todoInputHandler}
          placeholder="Input your Todo"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button
              style={styles.buttonSubmit}
              onPress={addTodoHandler}
              title="Add Todo"
            />
          </View>
          <View style={styles.buttons}>
            <Button title="Close" color="red" onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  todoInput: {
    width: "70%",
    fontSize: 20,
    backgroundColor: "#dee2e6",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginRight: 8,
  },
  buttons: {
    width: 100,
    marginHorizontal: 8,
  },
});
