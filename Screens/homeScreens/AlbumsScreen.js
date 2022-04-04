import { StyleSheet, Text, View } from 'react-native';

const AlbumsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AlbumsScreen!</Text>
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

export default AlbumsScreen;