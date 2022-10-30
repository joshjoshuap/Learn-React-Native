import { StyleSheet, View, Text, Pressable } from "react-native";

const TodoItem = (props) => {
  return (
    <Pressable
      android_ripple={{ color: "#0b7285" }}
      onPress={props.onDeleteTodo.bind(this, props.id)}
    >
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "#339af0",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  todoText: {
    fontSize: 16,
    color: "white",
  },
});
