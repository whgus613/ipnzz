import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FrameSelect() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItem: "center",
        paddingVertical: 70,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItem: "center",
          flexDirection: "row",
          marginVertical: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cam", {
              frame: 0,
            });
          }}
        >
          <Image
            style={{ width: 170, height: 252, marginHorizontal: 10 }}
            source={require("../img/frame1.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cam", {
              frame: 1,
            });
          }}
        >
          <Image
            style={{ width: 170, height: 252, marginHorizontal: 10 }}
            source={require("../img/frame2.png")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItem: "center",
          flexDirection: "row",
          marginVertical: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cam", {
              frame: 2,
            });
          }}
        >
          <Image
            style={{ width: 170, height: 252, marginHorizontal: 10 }}
            source={require("../img/frame3.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cam", {
              frame: 3,
            });
          }}
        >
          <Image
            style={{ width: 170, height: 252, marginHorizontal: 10 }}
            source={require("../img/frame4.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
