import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
//import { ImageBackground } from 'react-native-web';

export default function Multipulation() {
  ///*
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
  //*/
  return (
    <View> 
        <ImageBackground source={back.src} style={{width:250 ,height:750}} >
          <View> 
            <Image source={item1.src} style={{width:230, height:150, marginLeft:10, marginBottom: 10, marginTop:11}} />
            <Image source={item2.src} style={{width:230, height:150, marginLeft:10, marginBottom: 14}} />
            <Image source={item3.src} style={{width:230, height:150, marginLeft:10, marginBottom: 10}} />
            <Image source={item4.src} style={{width:230, height:150, marginLeft:10, marginBottom: 10}} />
          </View> 
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});