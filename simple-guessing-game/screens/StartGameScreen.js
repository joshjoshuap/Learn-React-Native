import { useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../util/color";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const choserNumber = parseInt(enteredNumber);

    if (isNaN(choserNumber) || choserNumber <= 0 || choserNumber > 99) {
      Alert.alert("Invalid Number", "Number must between 1 and 99", [
        { text: "Close", style: "destructive", onPress: resetInputHandler },
      ]);
    }

    props.onPickNumber(choserNumber); // props to app screen
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}> Reset </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}> Confirm </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blue,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 100,
    padding: 20,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 80,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    marginVertical: 10,
  },
});
