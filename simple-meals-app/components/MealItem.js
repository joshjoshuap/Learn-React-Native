import { Text, View } from "react-native";

const MealItem = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default MealItem;
