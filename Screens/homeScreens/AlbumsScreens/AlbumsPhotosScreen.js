import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

const AlbumsPhotosScreen = ({ navigation, route }) => {
  
  const [photos, setPhotos]= useState([])
  
  useEffect(() => {
    if (route.params) {
      setPhotos(prevState=> [...prevState, route.params])
    }
  }, [route.params])
  
  console.log("photos", photos);
  
  return (
    <View style={styles.container}>
      <Text>AlbumsPhotosScreen!</Text>
    </View>
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

export default AlbumsPhotosScreen;