import { Camera } from "expo-camera";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { useState, useRef, useEffect } from "react";
import usePermission from "./usePermisson";
import Button from "./Button";
import ViewShot from "react-native-view-shot";

export default function Cam({ navigation, route }) {
  const hasCameraPermissions = usePermission(Camera);
  const type = Camera.Constants.Type.front;
  const cameraRef = useRef(null);
  const timer = 3;
  const [timerOn, setTimerOn] = useState(false);
  const [displayTimer, setDisplayTimer] = useState(timer);

  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const bg = [
    require("../img/1.png"),
    require("../img/2.png"),
    require("../img/3.png"),
    require("../img/4.png"),
  ];

  const ref = useRef();

  useEffect(() => {
    if (!timerOn) {
      return;
    }
    setDisplayTimer(timer);

    const interval = setInterval(() => {
      setDisplayTimer((prevTimer) =>
        prevTimer > 1 ? prevTimer - 1 : clearInterval(interval)
      );
    }, 1000);
  }, [timerOn, setTimerOn, timer]);

  const start = async () => {
    setTimerOn(true);
    takePicture();
  };

  const takePicture = async () => {
    setTimerOn(true);
    setTimeout(async function () {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setImage(data.uri);
      setTimerOn(false);
      setTimerOn(true);
    }, 3500);
    setTimeout(async function () {
      const options = { quality: 0.5, base64: true, skipProcessing: false };
      const data = await cameraRef.current.takePictureAsync(options);
      setImage2(data.uri);
      setTimerOn(false);
      setTimerOn(true);
    }, 8000);
    setTimeout(async function () {
      const options = { quality: 0.5, base64: true, skipProcessing: false };
      const data = await cameraRef.current.takePictureAsync(options);
      setImage3(data.uri);
      setTimerOn(false);
      setTimerOn(true);
    }, 12000);
    setTimeout(async function () {
      const options = { quality: 0.5, base64: true, skipProcessing: false };
      const data = await cameraRef.current.takePictureAsync(options);
      setImage4(data.uri);
      setTimerOn(false);
    }, 16000);
  };

  const savePicture = async (uri) => {
    ref.current.capture().then((uri) => {
      MediaLibrary.saveToLibraryAsync(uri);
    });
  };

  if (hasCameraPermissions === false) {
    return <Text>No permission to access camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 360,
          marginVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 30 }}>PHOTO BOOTH</Text>
        {timerOn && <Text style={styles.displayTimerText}>{displayTimer}</Text>}
      </View>
      {!image4 ? (
        <Camera style={styles.camera} type={type} ref={cameraRef} />
      ) : (
        <View>
          <ViewShot ref={ref} options={{ format: "jpg", quality: 0.9 }}>
            <View>
              <ImageBackground
                style={{ width: 400, height: 600 }}
                source={bg[route.params.frame]}
              >
                <View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItem: "center",
                      flexDirection: "row",
                      marginTop: 97,
                    }}
                  >
                    <Image
                      style={{
                        width: 170,
                        height: 227,
                        transform: [{ scaleX: -1 }],
                        marginRight: 8,
                      }}
                      source={{ uri: image }}
                    />
                    <Image
                      style={{
                        width: 170,
                        height: 227,
                        transform: [{ scaleX: -1 }],
                        marginLeft: 8,
                      }}
                      source={{ uri: image2 }}
                    />
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItem: "center",
                      flexDirection: "row",
                      marginTop: 15,
                    }}
                  >
                    <Image
                      style={{
                        width: 170,
                        height: 227,
                        transform: [{ scaleX: -1 }],
                        marginRight: 8,
                      }}
                      source={{ uri: image3 }}
                    />
                    <Image
                      style={{
                        width: 170,
                        height: 227,
                        transform: [{ scaleX: -1 }],
                        marginLeft: 8,
                      }}
                      source={{ uri: image4 }}
                    />
                  </View>
                </View>
              </ImageBackground>
            </View>
          </ViewShot>
        </View>
      )}

      <View>
        {image4 ? (
          <View style={styles.takenImage}>
            <Button
              icon="retweet"
              color="#000"
              onPress={() => setImage4(null)}
            />
            <Button icon="check" color="#000" onPress={savePicture} />
          </View>
        ) : (
          <View style={{ marginTop: 20 }}>
            <Button icon={"camera"} color="#000" onPress={start} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: 360,
    height: 480,
    position: "relative",
  },
  takenImage: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  displayTimerText: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
