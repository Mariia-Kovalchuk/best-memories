import { createStackNavigator } from "@react-navigation/stack";
import DefaultAlbumsScreen from './AlbumsScreens/DefaultAlbumsScreen';
import AlbumsPhotosScreen from './AlbumsScreens/AlbumsPhotosScreen';


const AlbumsScreenStack = createStackNavigator();

const AlbumsScreen = () => {
  return (

    <AlbumsScreenStack.Navigator initialRouteName='DefaultAlbumsScreen'>
      <AlbumsScreenStack.Screen name='DefaultAlbumsScreen' component={DefaultAlbumsScreen} options={{ headerShown: false} }/>
      <AlbumsScreenStack.Screen name='AlbumsPhotosScreen' component={AlbumsPhotosScreen} options={ {}}/>

    </AlbumsScreenStack.Navigator>
  );
};


export default AlbumsScreen;