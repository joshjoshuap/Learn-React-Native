import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = (props) => {
  const pressedHandler = () => {};

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={pressedHandler}
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
    backgroundColor: "#12b886",
    padding: 12,
    margin: 4,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
