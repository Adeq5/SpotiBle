import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
interface SpotifyButtonProps {
  title: string;
  bgColor?: string;
  textColor?: string;
  padV?: number;
  padH?: number;
  marginV?: number;
  marginH?: number;
  onPress: () => void;
}
const SpotifyButton = ({
  title,
  bgColor,
  textColor,
  padV = 12,
  padH = 12,
  marginH = 0,
  marginV = 0,
  onPress,
}: SpotifyButtonProps) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      marginVertical: marginV,
      marginHorizontal: marginH,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: padV,
      paddingHorizontal: padH,
      backgroundColor: bgColor,
      borderRadius: 64,
    },
    buttonTitle: {
      fontWeight: "bold",
      fontSize: 16,
      color: textColor,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default SpotifyButton;
