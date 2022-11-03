import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

const CategoryGridTitle = (props) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: props.color }]}>
      <Pressable
        android_ripple={{ color: "#dee2e6" }}
        style={styles.button}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 0,
    elevation: 3,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
