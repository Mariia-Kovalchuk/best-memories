import { StyleSheet, Text, View } from 'react-native';

const CreateAlbumScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreateAlbumScreen!</Text>
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

export default CreateAlbumScreen;