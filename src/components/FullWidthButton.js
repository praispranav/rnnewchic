import React from "react";
import { View, Text } from "react-native";
import Button from "./ButtonFeedBackAndOpacity";
import { styles } from "../styles/styles";
import AntDesign from "react-native-vector-icons/AntDesign";

const FullWidthButtonStyle = [
  styles.paddingVerticalSame,
  styles.paddingHorizontal25,
  styles.flex,
  styles.space_between,
];

export default function FullWidthButton({ label, handlePress, rightText }) {
  return (
    <Button onPress={handlePress}>
      <View style={FullWidthButtonStyle}>
        <Text style={styles.bold}>{label}</Text>
        <View style={[styles.flex]}>
          <Text style={styles.textgrey}>{rightText}</Text>
          <AntDesign
            name="right"
            size={15}
            color={"grey"}
            style={[styles.marginLeft]}
          />
        </View>
      </View>
    </Button>
  );
}
