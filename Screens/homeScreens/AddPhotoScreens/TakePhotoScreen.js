import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { Camera } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";
import { TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
// import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


const TakePhotoScreen = ({navigation}) => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  const [selectedAlbum, setSelectedAlbum] = useState();
  console.log("selectedAlbum 17", selectedAlbum);

   const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync(false);
      console.log("status 17", status);

      // const mediaPermission = await MediaLibrary.requestPermissionsAsync();
      // console.log("mediaPermission", mediaPermission);

      setHasPermission(status === "granted");
    })();
  
  }, []);

  console.log("hasPermission 27", hasPermission, new Date());
  

  if (hasPermission === null) {
    return <View>
      <Text style={styles.errorText}>App needs to request the Camera Permissions</Text>
    </View>
  }
  
  if (hasPermission === false) {
    return <Text style={styles.errorText}>No access to camera</Text>
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
                console.log("uri 58", uri, new Date())
                console.log("photo 59", photo, new Date())
                // const asset = await MediaLibrary.createAssetAsync(uri);
                // console.log("asset", asset, Date.now().toString())
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
              console.log("type 77", type)
            }}
          >
            <Image style={styles.flipImg} source={require("../../../assets/images/icons8-rotate-camera-48.png")}
            />
          </TouchableOpacity>
        </View>
      </Camera>
      <View >
        <RNPickerSelect
          style={{
            inputIOSContainer: {
              ...styles.select,
            },
            placeholder: {
              color: '#BDBDBD',
              fontSize: 16,
              fontFamily: "RobotoRegular"
            },
            inputIOS: {
              color: '#212121',
              fontSize: 16,
              fontFamily: "RobotoRegular"
            },
          }}
          onValueChange={setSelectedAlbum}
          placeholder={{ label: "Выберите альбом" }}
          items={[
            { label: 'ДР Кристины', value: 'ДР Кристины' },
            { label: 'Новый год', value: 'Новый год' },
            { label: 'Вена', value: 'Вена' },
          ]}
        />
        <View>
          <View>
            <Button onPress={showDatepicker} title="Дата" />
          </View>
          <Text> {date.toLocaleString().slice(0, 10)}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
        <TouchableOpacity
          style={(photo && selectedAlbum) ? styles.sendBtn : { ...styles.sendBtn, ...styles.sendBtnDisabled }}
          disabled={photo && selectedAlbum ? false : true}
          onPress={() => {
            navigation.navigate("Albums", { photo, selectedAlbum, date })
          }}>
          <Text style={styles.btnText}>Отправить</Text>
        </TouchableOpacity>
        
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: {
    marginHorizontal: 10,
    height: "60%",
    justifyContent: "flex-end",
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
  errorText: {
    fontSize: 16,
    fontFamily: "RobotoRegular",
    color: "red"
  },
  sendBtn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    paddingBottom: 15,
    paddingTop: 15,
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
    
  },

  sendBtnDisabled: {
    opacity: 0.5
  },
  
  btnText: {
    fontSize: 16,
    fontFamily: "RobotoRegular",
    color: "#FFFFFF"
  },
  select: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 16,
    marginTop: 27,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 50,
    fontSize: 16,
  },

});




export default TakePhotoScreen;