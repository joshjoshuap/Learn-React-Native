import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todoLists, setTodoLists] = useState([]);

  const addTodoHandler = (newTodo) => {
    // get the previous array items and add the new item with unique key
    setTodoLists((currentTodoLists) => [
      ...currentTodoLists,
      { todo: newTodo, id: Math.random().toString() },
    ]);
  };

  const deleteTodoHandler = (id) => {
    setTodoLists((currentTodoLists) => {
      return currentTodoLists.filter((todo) => todo.id !== id);
    });
    console.log("Delete");
  };

  return (
    <View style={styles.appContainer}>
      <TodoInput onAddTodo={addTodoHandler} />
      {/* This view are only can scroll*/}
      <View style={styles.listContainer}>
        <FlatList
          data={todoLists} // Get the array of todoLists and loop
          renderItem={(itemData) => {
            return (
              <TodoItem
                text={itemData.item.todo}
                id={itemData.item.id}
                onDeleteTodo={deleteTodoHandler}
              />
            ); // pass props
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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
  listContainer: {
    flex: 3,
  },
});
