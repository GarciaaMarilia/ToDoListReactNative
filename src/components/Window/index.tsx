import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface WindowProps {
  children: React.ReactNode;
}

export function Window({ children }: WindowProps) {
  return <View style={styles.container}>{children}</View>;
}
