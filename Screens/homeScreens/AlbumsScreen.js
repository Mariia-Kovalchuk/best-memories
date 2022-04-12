import { StyleSheet, Text, View } from 'react-native';

const AlbumsScreen = ({ navigation, route }) => {
    console.log("route.params", route.params);
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