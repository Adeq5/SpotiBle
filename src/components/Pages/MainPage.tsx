import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const MainPage = ({ route, navigation }) => {
  const { user } = route.params;
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>Main Page</Text>
      <Text style={styles.userText}>ID: {user.id}</Text>
      <Text style={styles.userText}>Name: {user.display_name}</Text>
      <Text style={styles.userText}>Email: {user.email}</Text>

      <Button title="Go Back to Login" onPress={() => navigation.goBack()} />
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
    gap: 24,
  },
  text: {
    color: "#ccd5daff",
    fontSize: 24,
  },
  userText: {
    color: "#ffffff",
    fontSize: 18,
  },
});
export default MainPage;
