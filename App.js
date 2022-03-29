import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen"
import LoginScreen from "./Screens/LoginScreen"
import HomeScreen from "./Screens/HomeScreen"
import { useFonts } from 'expo-font';


const MainStack = createStackNavigator();


export default function App() {
  
  const [loaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });


  
  if (!loaded) {
    return null;
    
  }
  
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false
          }} />
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            headerShown: false
          }} />
         <MainStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false
          }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

