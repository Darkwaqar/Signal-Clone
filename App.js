import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";

const Stack = createStackNavigator();

export default function App() {
  const globalScreenOptions = {
    // headerStyle: {
    //   backgroundColor: "#2C6BED",
    //   headerTitleStyle: { color: "white" },
    //   headerTintColor: "white",
    // },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="AddChat" component={AddChatScreen}></Stack.Screen>
        <Stack.Screen name="Chat" component={ChatScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
