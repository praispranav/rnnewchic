import React from "react";
import { View, Text } from "react-native";
import { deviceWidth, deviceHeight } from "../styles/styles";

export default function Divider({ marginTop, height, color }) {
  return (
    <View
      style={[
        {
          backgroundColor: color ? color : "lightgrey",
          height: height ? height : 2,
          width: deviceWidth,
          marginTop: marginTop ? 15 : 0,
        },
      ]}
    ></View>
  );
}
