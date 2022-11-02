import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import ViewShot, {captureRef, captureScreen} from 'react-native-view-shot';
import * as MediaLibrary from "expo-media-library";

const item1 =  {
  title: "Item 1",
  text: "Text 1",
  src: require("../img/A.png"),
}
const item2 =  {
  title: "Item 2",
  text: "Text 2",
  src: require("../img/B.png"),
}
const item3 =  {
  title: "Item 3",
  text: "Text 3",
  src: require("../img/C.jpg"),
}
const item4 =  {
  title: "Item 4",
  text: "Text 4",
  src: require("../img/D.png"),
}
const back = {
  title: "Frame",
  text: "Frame",
  src: require("../img/Frame.png"),
}


export default class Multipulation extends React.Component {
  save = async (uri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    this.refs.viewShot.capture().then(uri => {
    console.log("do something with ", uri);
    MediaLibrary.saveToLibraryAsync(uri);
  });
}

  render(){
    return (
      <View>
        <ViewShot ref="viewShot" options={{ format: 'jpg', quality: 0.9 }}>
          <ImageBackground source={back.src} style={{width:250 ,height:750}} >
            <View> 
              <Image source={item1.src} style={{width:230, height:150, marginLeft:10, marginBottom: 10, marginTop:11}} />
              <Image source={item2.src} style={{width:230, height:150, marginLeft:10, marginBottom: 14}} />
              <Image source={item3.src} style={{width:230, height:150, marginLeft:10, marginBottom: 10}} />
              <Image source={item4.src} style={{width:230, height:150, marginLeft:10, marginBottom: 10}} />
            </View> 
          </ImageBackground>
        </ViewShot> 
        <TouchableOpacity onPress={this.save}>
          <Text>Take this</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});