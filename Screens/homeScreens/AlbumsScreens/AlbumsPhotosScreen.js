import React, { Component } from 'react';
import { ActionSheetIOS, Platform, Button } from 'react-native';

import PhotoBrowser from 'react-native-photo-browser';

export default class AlbumsPhotosScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    mediaList: this.props.route.params.media,
    selected: new Set(),
  }

  onSelectionChanged = (media, index, selected) => {
    this.setState(prevState => {
      const copy = new Set(prevState.selected);
      if (selected) {
        copy.add(index);
      } else {
        copy.delete(index);
      }
      return { 
        selected: copy, 
      };
    });
  };

  onActionButton = (media, index) => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showShareActionSheetWithOptions(
        {
          url: media.photo,
          message: media.caption,
        },
        () => {},
        () => {},
      );
    } else {
      alert(`handle sharing on android for ${media.photo}, index: ${index}`);
    }
  };

  render() {

    const { mediaList, selected } = this.state;
    return (
      <>
        <PhotoBrowser
          displayNavArrows={true}
          displayActionButton={true}
          displaySelectionButtons={true}
          startOnGrid={true}
          enableGrid={true}
          initialIndex={0}
          alwaysDisplayStatusBar={false}
          customTitle={(index, rowCount) => `${index} из ${rowCount}`}
         onBack={navigator.pop}
          mediaList={mediaList}
          onSelectionChanged={this.onSelectionChanged}
          onActionButton={this.onActionButton}
        />
        {selected.size > 0 && (
          <Button
            title="Удалить"
            onPress={() =>
              this.setState(prevState => ({
                mediaList: prevState.mediaList.filter((_, i) => !prevState.selected.has(i)),
                selected: new Set(),
              }))
            }
          />
        )}
      </>
    );
  }
}


// Functional component

// import { StyleSheet, Text, View, ActionSheetIOS, Platform, Button } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { useEffect, useState } from 'react';
// import PhotoBrowser from 'react-native-photo-browser';

//  const AlbumsPhotosScreen = ({ navigation, route }) => {
  
//     const [mediaList, setMediaList]= useState([])
//     const [selected, setSelected]= useState(new Set())
  
//     console.log("route.params.media 13", route.params.media);
//   useEffect(() => {
//     if (route.params) {
//       setMediaList(route.params.media)
//     }
//   }, [route.params])
  
//   console.log("mediaList", mediaList);
  
//    const onSelectionChanged = (media, index, selected) => {
//      console.log("media in selectedFn", media);
//      console.log("index in selectedFn", index);
//      console.log("selected in selectedFn", selected);
     
//      setSelected(prevState => {
//        const copy = new Set(prevState);
//        console.log("copy in setSelected", copy);
//        console.log("selected in setSelected", selected);
       
//        if (selected) {
//          copy.add(index);
//         } else {
//           copy.delete(index);
//         }
        
//         console.log("modified copy in setSelected", copy);
//       return copy
//     });
//   };
   
//    const  onActionButton = (media, index) => {
//     console.log("media in onActionButton", media);


//     if (Platform.OS === 'ios') {
//       ActionSheetIOS.showShareActionSheetWithOptions(
//         {
//           url: media.photo.uri,
//           message: media.caption,
//         },
//         () => {},
//         () => {},
//       );
//     } else {
//       alert(`handle sharing on android for ${media.photo}, index: ${index}`);
//     }
//   };


//     return (
//       <View>
//         <PhotoBrowser
//           displayNavArrows={true}
//           displayActionButton={true}
//           displaySelectionButtons={true}
//           startOnGrid={true}
//           enableGrid={true}

//           onBack={navigator.pop}
//           mediaList={mediaList}
//           initialIndex={0}
//           onSelectionChanged={onSelectionChanged}
//           onActionButton={onActionButton}
//           alwaysDisplayStatusBar={false}
//           customTitle={(index, rowCount) => `${index} из ${rowCount}`}
//         />
//         {selected.size > 0 && (
//           <TouchableOpacity
//           style={styles.deleteBtn}
//             title="Delete"
//             onPress={() => {
//               setMediaList(prevState=> prevState.filter((_, i) => !selected.has(i)))
//               setSelected(new Set())
              
//             }
            
//               // this.setState(prevState => ({
//               //   mediaList: prevState.mediaList.filter((_, i) => !prevState.selected.has(i)),
//               //   selected: new Set(),
//               // }))
//             }
          
//           >
//             <Text style={styles.btnText}>Удалить</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };

  
//   export default AlbumsPhotosScreen;


