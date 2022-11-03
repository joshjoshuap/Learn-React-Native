import { Text, View, StyleSheet } from "react-native";

const MetailDetails = (props) => {
  return (
    <View style={styles.mealDescription}>
      <Text style={styles.mealDetail}>{props.duration}</Text>
      <Text style={styles.mealDetail}>{props.complexity.toUpperCase()}</Text>
      <Text style={styles.mealDetail}>{props.affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MetailDetails;

const styles = StyleSheet.create({
  mealDescription: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  mealDetail: {
    marginTop: 5,
    marginHorizontal: 5,
  },
});
