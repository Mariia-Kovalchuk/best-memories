import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';



const DefaultAddPhotoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.btn} onPress={() => {navigation.navigate("AddFromLibrary") }}>
        <Text style={styles.btnText}>Добавить из библиотеки</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btn} onPress={() => {navigation.navigate("TakePhoto") }}>
        <Text style={styles.btnText}>Сделать фото</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    paddingBottom: 16,
    paddingTop: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 16,
    fontFamily: "RobotoRegular",
    color: "#FFFFFF"
  },

});

export default DefaultAddPhotoScreen;