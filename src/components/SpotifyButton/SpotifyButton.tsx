import React from "react";
import { Pressable, Text, View } from "react-native";
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
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

export default SpotifyButton;
