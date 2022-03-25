import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";
import AlbumsScreen from './AlbumsScreen';
import CreateAlbumScreen from './CreateAlbumScreen';
import ProfileScreen from './ProfileScreen';



const Tabs = createBottomTabNavigator();


const HomeScreen = () => {
  return (
    <NavigationContainer style={styles.container} independent={true}>
      <Tabs.Navigator>
        <Tabs.Screen name='Albums' component={AlbumsScreen} />
        <Tabs.Screen name='Create' component={CreateAlbumScreen} />
        <Tabs.Screen name='Profile' component={ProfileScreen} />
      </Tabs.Navigator>
    </NavigationContainer>


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
