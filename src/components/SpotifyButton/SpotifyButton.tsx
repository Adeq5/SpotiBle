import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface SpotifyButtonProps {
  title: string;
  onPress: () => void;
}

const SpotifyButton = ({ title, onPress }: SpotifyButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <FontAwesome
          name="spotify"
          size={22}
          color="#fff"
          style={styles.icon}
        />
        <Text style={styles.buttonTitle}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default SpotifyButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1DB954",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 50,
    width: "80%",
  },
  icon: {
    marginRight: 10,
  },
  buttonTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    letterSpacing: 0.5,
  },
});
