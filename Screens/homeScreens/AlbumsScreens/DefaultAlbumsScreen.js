import React, { Component } from 'react';
import {
  ActionSheetIOS,
  ScrollView,
  Platform,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';



export default class DefaultAlbumsScreen extends Component {
  static navigationOptions = {
    title: 'Photo Browser Examples',
  };

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      albums:[]
    }

  }

  componentDidUpdate(prevProps, prevState) {
    
    if (!prevProps.route.params || this.props.route.params.photo !== prevProps.route.params.photo) {
      // console.log("prevState.albums.includes",prevState.albums.includes(this.props.route.params.selectedAlbum));
      this.setState(prevState => {
        return {
          photos: [...prevState.photos, this.props.route.params],
          albums: prevState.albums.includes(this.props.route.params.selectedAlbum) ? prevState.albums : [...prevState.albums, this.props.route.params.selectedAlbum],
        };
      });
    
    }

  }


  _onSelectionChanged(media, index, selected) {
    alert(`${media.photo} selection status: ${selected}`);
  }

  _onActionButton(media, index) {
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
  }

  renderAlbums = album => {
    const { navigate } = this.props.navigation;
    const {photos} = this.state
    // console.log("this.state.photos", photos);
    // console.log("this.state.albums", albums);


    const media = photos.reduce((media, item) => {
      if (item.selectedAlbum === album) {
        media.push({ photo: item.photo, caption: item.date, selected: false })
        return media
      } else {
        return media
      }
    }, []);
    
    return (
      <TouchableOpacity
        key={`example_${album}`}
        onPress={() => {
          navigate('AlbumsPhotosScreen', {
            media,
          });
        }}
      >
        <View style={styles.row}>
          <Text style={styles.rowTitle}>
            {album}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {

    return (
      <ScrollView style={styles.container}>
        {this.state.albums.length?
          this.state.albums.map(this.renderAlbums)
          : <Text>Альбомов пока нет</Text> }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  list: {
    flex: 1,
    paddingTop: 54,
    paddingLeft: 16,
  },
  row: {
    flex: 1,
    padding: 8,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
  },
  rowTitle: {
    fontSize: 14,
  },
  rowDescription: {
    fontSize: 12,
  },
});



// Functional component

// import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
// import { useEffect, useState } from 'react';

// const DefaultAlbumsScreen = ({ navigation, route }) => {

  
//   const [photos, setPhotos]= useState([])
  
//   useEffect(() => {
//     if (route.params) {
//       setPhotos(prevState=> [...prevState, route.params])
//     }
//   }, [route.params])
  
//   console.log("photos", photos);

//   const albums = photos.reduce((albums, item) => {
//     if (albums.indexOf(item.selectedAlbum) < 0) {
//       albums.push(item.selectedAlbum)
//       return albums
//     } else {
//       return albums
//     }
//   }, []);
//   console.log("albums", albums);

//    const renderAlbums = album => {
//     const { navigate } = navigation;
//     // const { selectedAlbum, date } = photo;
//      const media = photos.reduce((media, item) => {
//        if (item.selectedAlbum === album) {
//          media.push({ photo: item.photo, caption: item.date, selected: false })
//          return media
//        } else {
//          return media
//        }
//      }, []);
// console.log("media", album, "-->",  media);
//     return (
//       <TouchableOpacity
//         key={`example_${album}`}
//         onPress={() => {
//           navigate('AlbumsPhotosScreen', {
//             media,
//           });
//         }}
//       >
//         <View style={styles.row}>
//           <Text style={styles.rowTitle}>
//             {album}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

  
//   return (
//       <ScrollView style={styles.container}>
//       {albums.length?
//         albums.map(renderAlbums)
//       : <Text>Альбомов пока нет</Text> }
//       </ScrollView>
//   );
// };


// export default DefaultAlbumsScreen;