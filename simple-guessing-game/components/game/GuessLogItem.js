import { View, Text, StyleSheet } from "react-native";
import Colors from "../../util/color";

const GuessLogItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>Rounds: {props.roundNumber}</Text>
      <Text style={styles.listText}>Opponent's Guess {props.guessNumber}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    width: "100%",
    elevation: 10,
    textAlign: "center",
    backgroundColor: Colors.blue,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  listText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    color: "white",
  },
});
