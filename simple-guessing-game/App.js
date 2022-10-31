import { StyleSheet, View, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.appBackground}>
      <ImageBackground
        source={require("./assets/images/dice-background.jpg")}
        style={styles.imageBackground}
        resizeMode="cover"
        imageStyle={styles.backgroundImageTransparent}
      >
        <StartGameScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  appBackground: {
    flex: 1,
    backgroundColor: "#d0ebff",
  },
  imageBackground: {
    flex: 1,
  },
  backgroundImageTransparent: {
    opacity: 0.15,
  },
});
