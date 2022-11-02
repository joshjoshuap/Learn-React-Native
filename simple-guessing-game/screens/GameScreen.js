import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

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
  const guessNumber = generateRandomBetween(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(guessNumber);
  const [guessRounds, setGuessRounds] = useState([guessNumber]);

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.onGameOver(guessRounds.length);
    }
  }, [currentGuess, props.userNumber, props.onGameOver]);

  useEffect(() => {
    minNumber = 1;
    maxNumber = 100;
  }, []);

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
    setGuessRounds((previousGuessRounds) => [
      newRandomNumber,
      ...previousGuessRounds,
    ]);
  };

  const guessRoundListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title> Guess Opponent </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Card>
          <Text style={styles.textTitle}>Higher or Lower</Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons
                name="md-remove"
                size={20}
              />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons
                name="md-add"
                size={20}
              />
            </PrimaryButton>
          </View>
        </Card>
      </View>
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}

        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - itemData.index}
              guessNumber={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
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
  textTitle: {
    fontSize: 20,
    color: "white",
  },
  listContainer: {
    flex: 1,
    padding: 5,
  },
});
