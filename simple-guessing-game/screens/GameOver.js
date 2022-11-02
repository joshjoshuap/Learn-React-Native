import { View, Text, StyleSheet } from "react-native";
import Colors from "../util/color";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const GameOver = (props) => {
  return (
    <View style={styles.textContainer}>
      <Title>Game Over</Title>
      <View style={styles.gameOverTextContainer}>
        <Text style={styles.gameOverText}>Rounds: {props.roundNumber}</Text>
        <Text style={styles.gameOverText}>
          Guess Number: {props.userNumber}
        </Text>
      </View>
      <PrimaryButton onPress={props.onStartNewGame}>Try Again</PrimaryButton>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    marginTop: 50,
  },
  gameOverTextContainer: {
    alignItems: "center",
    backgroundColor: Colors.blue,
    marginTop: 50,
    padding: 10,
  },
  gameOverText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    color: "white",
  },
});
