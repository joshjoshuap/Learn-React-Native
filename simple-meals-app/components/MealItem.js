import { Text, Pressable, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MetailDetails from "./MealDetails";

const MealItem = (props) => {
  const navigation = useNavigation();

  const selectMealHandler = () => {
    navigation.navigate("MealDetail", {
      mealId: props.id,
    });
  };

  return (
    <View style={styles.mealItemContainer}>
      <Pressable onPress={selectMealHandler}>
        <View>
          <Image
            source={{ uri: props.imageUrl }}
            style={styles.image}
          />
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <MetailDetails
          duration={props.duration}
          complexity={props.complexity}
          affordability={props.affordability}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItemContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    elevation: 5,
    overflow: "hidden",
    margin: 15,
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
