import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../util/color";

const PrimaryButton = (props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={props.onPress}
        android_ripple={{ color: "#38d9a9" }}
      >
        <Text style={styles.buttonText}> {props.children} </Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 20,
    margin: 5,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.green,
    padding: 12,
    margin: 4,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
