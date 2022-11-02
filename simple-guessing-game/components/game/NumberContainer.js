import { View, Text, StyleSheet } from "react-native";
import Colors from "../../util/color";

const NumberContainer = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: Colors.blue,
    borderRadius: 10,
    marginTop: 20,
    padding: 30,
  },
  numberText: {
    fontSize: 25,
    fontFamily: "open-sans-bold",
    color: "white",
  },
});
