import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialIcons, FontAwesome5, Fontisto } from '@expo/vector-icons';
import AlbumsScreen from './homeScreens/AlbumsScreen';
import AddPhotoScreen from './homeScreens/AddPhotoScreen';
import ProfileScreen from './homeScreens/ProfileScreen';



const Tabs = createBottomTabNavigator();


const HomeScreen = ({ navigation }) => {
  const signOut = () => {
    navigation.navigate("LoginScreen")
  }
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = 24

          if (route.name === "Albums") {
            return <Fontisto name="photograph" size={iconSize} color={color} />
          } else if (route.name === "Add Photo") {
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

    >
      <Tabs.Screen name='Albums' component={AlbumsScreen} options={{ headerShown: false  }} />
      <Tabs.Screen name='Add Photo' component={AddPhotoScreen} options={{ headerShown: false }} />
      <Tabs.Screen name='Profile' component={ProfileScreen} options={{
        title: null,
        headerRight: () => {
         return <MaterialIcons.Button name="logout" size={24} color="blue" backgroundColor='transparent' onPress={signOut}/>
      } }} />
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
