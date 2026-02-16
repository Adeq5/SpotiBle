import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import SpotifyButton from "../SpotifyButton/SpotifyButton";
import { useSpotifyAuth } from "../../hooks/useSpotifyAuth";

const LoginPage = () => {
  const { request, promptAsync, mutation } = useSpotifyAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoginPage</Text>

      {mutation.status === "pending" ? (
        <ActivityIndicator size="large" color="#1DB954" />
      ) : (
        <SpotifyButton title="Login To Spotify" onPress={() => promptAsync()} />
      )}

      {mutation.isSuccess && (
        <Text style={{ color: "#fff", marginTop: 20 }}>
          Token: {mutation.data.access_token}
        </Text>
      )}

      {mutation.isError && (
        <Text style={{ color: "red", marginTop: 20 }}>
          Error: {mutation.error?.message}
        </Text>
      )}
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
