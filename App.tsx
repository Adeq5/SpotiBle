import LoginPage from "./src/components/Pages/LoginPage";
import MainPage from "./src/components/Pages/MainPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator id="rootStack" initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Main" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
