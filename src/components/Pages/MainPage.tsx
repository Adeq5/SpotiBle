import React from "react";
import { View, Text, StyleSheet } from "react-native";
const MainPage = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>MainPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "#070F2B",
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  text: {
    color: "#ccd5daff",
    fontSize: 24,
  },
});
export default MainPage;
