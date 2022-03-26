import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { Fontisto } from '@expo/vector-icons';
import AlbumsScreen from './AlbumsScreen';
import CreateAlbumScreen from './CreateAlbumScreen';
import ProfileScreen from './ProfileScreen';



const Tabs = createBottomTabNavigator();


const HomeScreen = () => {
  return (
    <Tabs.Navigator
      // tabBarOptions={{
      //   activeTintColor: "yellow",
      //   inactiveTintColor: "gray",
      //   showLabel: false
      // }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = 24

          if (route.name === "Albums") {
            return <Fontisto name="photograph" size={iconSize} color={color} />
          } else if (route.name === "Create") {
            return <MaterialIcons name="add-photo-alternate" size={30} color={color} />;
          }
          else if (route.name === "Profile") {
            iconName = focused ? "user" : "user-alt";
            return <FontAwesome5 name={iconName} size={iconSize} color={color} />;
          }
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false

      })}

    // screenOptions={({ route }) => ({
    //     tabBarIcon: ({ focused, color, size }) => {
    //       let iconName;

    //       if (route.name === 'Home') {
    //         iconName = focused
    //           ? 'ios-information-circle'
    //           : 'ios-information-circle-outline';
    //       } else if (route.name === 'Settings') {
    //         iconName = focused ? 'ios-list-box' : 'ios-list';
    //       }

    //       // You can return any component that you like here!
    //       return <Ionicons name={iconName} size={size} color={color} />;
    //     },
    //     tabBarActiveTintColor: 'tomato',
    //     tabBarInactiveTintColor: 'gray',
    //   })}
    >
      <Tabs.Screen name='Albums' component={AlbumsScreen} options={{ headerShown: false }} />
      <Tabs.Screen name='Create' component={CreateAlbumScreen} options={{ headerShown: false }} />
      <Tabs.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
    </Tabs.Navigator>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
