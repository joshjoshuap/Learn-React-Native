import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTitle}>Sample App</Text>
      <Text style={styles.description}>This is a sample description.</Text>
      <Button style={styles.button} title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    margin: 20,
    fontSize: 16,
  },
  headingTitle: {
    fontSize: 48,
    color: "red",
    borderBottomWidth: 2,
    borderBottomColor: "blue",
  },
  button: {
    borderRadius: 5,
  },
});
