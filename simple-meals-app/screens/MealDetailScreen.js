import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import MetailDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const mealId = props.route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.mealDetailContainer}>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.imageMeal}
      />
      <Text style={styles.mealTitle}>{selectedMeal.title}</Text>
      <MetailDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.ingredientsContainer}>
        <Text style={styles.containerTitle}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredients) => (
          <Text
            key={ingredients}
            style={styles.containerDetail}
          >
            {ingredients}
          </Text>
        ))}
      </View>
      <View style={styles.procedureContainer}>
        <Text style={styles.containerTitle}>Procedure</Text>
        {selectedMeal.steps.map((step) => (
          <Text
            key={step}
            style={styles.containerDetail}
          >
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  mealDetailContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  imageMeal: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  mealTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1c7ed6",
  },
  containerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1c7ed6",
    marginBottom: 5,
  },
  containerDetail: {
    fontSize: 15,
    textAlign: "justify",
  },
  ingredientsContainer: {
    marginVertical: 15,
  },
  procedureContainer: {
    paddingBottom: 50,
  },
});
