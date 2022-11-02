import { StyleSheet, View } from "react-native";
import Colors from "../../util/color";

const Card = (props) => {
  return <View style={styles.inputContainer}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blue,
    fontFamily: "open-sans",
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 50,
    padding: 20,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
});
