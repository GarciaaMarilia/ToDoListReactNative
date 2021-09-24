import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
  emptyText: {
    textAlign: 'center',
    width: "100%",
  },
  groupInputButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'transparent',
  },
  inputAdd: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    height: 40,
  },
  button: {
    backgroundColor: colors.primary,
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
});
