import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SpotifyButton from "../SpotifyButton/SpotifyButton";

const LoginPage = () => {
  const Login = () => {
    console.log("Login");
  };
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>Login Page</Text>
      <View>
        <SpotifyButton
          title="Login to Spotify"
          onPress={Login}
          marginV={24}
          bgColor="#9290C3"
          textColor="#ffffffff"
          padH={24}
        ></SpotifyButton>
      </View>
    </View>
  );
};
/* #070F2B, #1B1A55 #788585, #535C91, #9290C3*/
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
export default LoginPage;
