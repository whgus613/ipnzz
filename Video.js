import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import { render } from "react-dom";
import { Ionicons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";

export default class Video extends React.Component {
  componentDidMount() {
    (async () => {
      //카메라 권한받기
      const { status } = await Camera.requestCameraPermissionsAsync();
      this.setHasPermission(status === "granted");
    })();
  }

  //사진 찍기
  setSnap = async () => {
    if (this.camera) { 
      const options = { quality: 0.5, base64: true };
      let photo = await this.camera.takePictureAsync(options);
      this.setState({
        photo: photo.base64,
        scanning: false,
        uri: photo.uri,
      });
      if (photo.uri) {
        this.savePhoto(photo.uri);
      }
    }
  };

  //사진 저장하기 
  savePhoto = async (uri) => {
    try {
      // Request device storage access permission
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        // Save image to media library
        await MediaLibrary.saveToLibraryAsync(uri);

        console.log("Image successfully saved");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Camera
            style={{ borderRadius: 10, width: 300, height: 400 }}
            type={Camera.Constants.Type.front}
            ref={(ref) => {
              this.camera = ref;
            }}
          ></Camera>
        </View>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <TouchableOpacity onPress={this.setSnap}>
            <Text>
              <Ionicons name="camera" size={44} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    /*flex: 1,*/
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});