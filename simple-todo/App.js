import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoLists, setTodoLists] = useState([]);

  const todoInputHandler = (inputTodo) => {
    setNewTodo(inputTodo);
  };

  const addTodoHandler = () => {
    // get the previous array items and add the new item
    setTodoLists((currentTodoLists) => [...currentTodoLists, newTodo]);
  };

  return (
    <View style={styles.appContainer}>
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
      <View style={styles.listContainer}>
        {/* Loop Todo Lists Array */}
        {todoLists.map((todoItem) => (
          <View style={styles.todoItem} key={todoItem}>
            <Text style={styles.todoText}>{todoItem}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
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
  listContainer: {
    flex: 3,
  },
  titleHeading: {
    fontSize: 24,
    textAlign: "center",
  },
  todoItem: {
    backgroundColor: "#339af0",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  todoText: {
    fontSize: 16,
    color: 'white'
  }
});
