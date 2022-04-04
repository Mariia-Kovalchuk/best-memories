import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { TouchableOpacity } from 'react-native-gesture-handler';


const TakePhotoScreen = () => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
            const mediaPermission = await MediaLibrary.requestPermissionsAsync(true);
console.log("mediaPermission", mediaPermission);

      setHasPermission(status === "granted");
    })();
  
  }, [])

  if (hasPermission === null) {
    return <View />
  }
  
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={(ref) => {
        setCameraRef(ref);
      }} >

        <View style={styles.photoView}>
          <View style={styles.photoLibrary}>
            {photo && <Image source={{ uri: photo }}
              style={{ height: "100%", width: "100%" }}
            />}
          </View>
      
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                setPhoto(uri)
                // const asset = await MediaLibrary.createAssetAsync(uri);
              }
            }}
          >
            <View style={styles.takePhotoOut}>
              <View style={styles.takePhotoInner}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
              console.log("type", type)
            }}
          >
            <Image style={styles.flipImg} source={require("../../../assets/images/icons8-rotate-camera-48.png")}
            />
          </TouchableOpacity>
        </View>
      </Camera>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: {
    marginHorizontal: 10,
    height: "60%",
    justifyContent:  "flex-end", 
  },


  photoView: {
    flexDirection: "row",
    backgroundColor: "black",
    height: 55,
    justifyContent: "space-around",
    alignItems: "center",

  },


  flipContainer: {

    flex: 1, 
    justifyContent: "center",
    height: 50,

  },

  flipImg: {
    height: 40,
    width: 40
  },

  button: {
    height: 50,

  },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
  photoLibrary: {
    height: 40,
    width: 40

  },
});

export default TakePhotoScreen;