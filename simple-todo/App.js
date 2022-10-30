import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [todoLists, setTodoLists] = useState([]);

  const startAddTodoHandler = () => {
    setModalIsVisible(true);
  };

  const endAddTodoHandler = () => {
    setModalIsVisible(false);
  };

  const addTodoHandler = (newTodo) => {
    // get the previous array items and add the new item with unique key
    setTodoLists((currentTodoLists) => [
      ...currentTodoLists,
      { todo: newTodo, id: Math.random().toString() },
    ]);
    endAddTodoHandler();
  };

  const deleteTodoHandler = (id) => {
    setTodoLists((currentTodoLists) => {
      return currentTodoLists.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        {/* Modal aadd todo*/}
        <Button
          title="Add new Todo"
          color="#37b24d"
          onPress={startAddTodoHandler}
        />
        {modalIsVisible && (
          <TodoInput
            onAddTodo={addTodoHandler}
            visible={modalIsVisible}
            onClose={endAddTodoHandler}
          />
        )}

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
    </>
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
