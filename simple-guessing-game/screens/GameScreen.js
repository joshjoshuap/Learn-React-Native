import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

// exclude - exclude the current guess/user guess
const generateRandomBetween = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

// setting mix max number
let minNumber = 1;
let maxNumber = 100;

const GameScreen = (props) => {
  const guessNumber = generateRandomBetween(
    minNumber,
    maxNumber,
    props.userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(guessNumber);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userNumber) ||
      (direction === "greater" && currentGuess > props.userNumber)
    ) {
      Alert.alert("Wrong Number", "Your Guess is Wrong", [
        { text: "Try Again", style: "cancel" },
      ]);
    }

    if (direction === "lower") {
      maxNumber = currentGuess; // max number will the current guess
    } else {
      minNumber = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      minNumber,
      maxNumber,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title> Guess Opponent </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 20,
    padding: 30,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
