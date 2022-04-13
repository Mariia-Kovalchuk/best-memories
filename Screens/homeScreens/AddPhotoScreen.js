import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import DefaultAddPhotoScreen from './AddPhotoScreens/DefaultAddPhotoScreen';
import AddFromLibraryScreen from './AddPhotoScreens/AddFromLibraryScreen';
import TakePhotoScreen from './AddPhotoScreens/TakePhotoScreen';


const AddPhotoStack = createStackNavigator();

const AddPhotoScreen = () => {
  return (

    <AddPhotoStack.Navigator initialRouteName='DefaultAddPhotoScreen'>
      <AddPhotoStack.Screen name='DefaultAddPhotoScreen' component={DefaultAddPhotoScreen} options={{ title:" ", headerShown: false} }/>
      <AddPhotoStack.Screen name='AddFromLibrary' component={AddFromLibraryScreen } options={ {}}/>
      <AddPhotoStack.Screen name='TakePhoto' component={TakePhotoScreen } options={{} }/>

    </AddPhotoStack.Navigator>
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

export default AddPhotoScreen;