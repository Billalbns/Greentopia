import { Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Index from "./screen";
import Login from "./screen/login";
import SignUp from "./screen/signUp";
import Home from "./screen/Home";
import Profile from "./screen/Profile"
import loadFonts from "./components/LoadFont";
import { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeApp from "./homeApp";

const tab = createBottomTabNavigator();
const LogoTitle = () => (
  <Image
    style={{ width: 70, height: 70, margin: 10 }}
    source={require("./assets/icon.png")} // Provide the path to your logo image
  />
);
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Load fonts when the app starts
    const loadAppFonts = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadAppFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={Index}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: "",
            headerRight: () => <LogoTitle />,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="homeApp"
          component={HomeApp}
          options={{ headerShown: false }}
          
        />
        
      </Stack.Navigator>

    </NavigationContainer>

  );
}
