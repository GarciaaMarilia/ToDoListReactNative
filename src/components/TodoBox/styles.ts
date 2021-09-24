import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  box: {
    width: 26,
    height: 26,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.primary,
    marginRight: 10,
    justifyContent: "center",
    alignItems: 'center',
  },
  label: {
    color: "#000000",
    fontSize: 16,
    flex: 1,
  },
  labelMaked: {
    textDecorationLine: "line-through",
    color: "#c3c3c3"
  },
});
