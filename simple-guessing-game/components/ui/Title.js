import { StyleSheet, Text } from "react-native";
import Colors from "../../util/color";

const Title = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
    textAlign: "center",
    color: "white",
    backgroundColor: Colors.blue,
    borderRadius: 10,
    padding: 10,
  },
});
