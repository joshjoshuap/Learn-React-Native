import { useState } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const pickedNumberHandler = (pickedNumberHandler) => {
    setUserNumber(pickedNumberHandler);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dice-background.jpg")}
        style={styles.imageBackground}
        resizeMode="cover"
        imageStyle={styles.backgroundImageTransparent}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  backgroundImageTransparent: {
    opacity: 0.15,
  },
});
