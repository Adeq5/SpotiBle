import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SpotifyButton from "../SpotifyButton/SpotifyButton";

const LoginPage = () => {
  const handleLogin = () => {
    console.log("Login To Spotify clicked");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoginPage</Text>

      <SpotifyButton title="Spotify" onPress={handleLogin} />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
});
