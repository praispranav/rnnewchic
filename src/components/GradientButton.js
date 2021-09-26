import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeColorPink } from "../styles/styles";
import ButtonFeedBackAndOpacity from "./ButtonFeedBackAndOpacity";
import { GradientColor } from "../styles/styles";

export default function GradientButton(props) {
  return (
    <ButtonFeedBackAndOpacity onPress={()=> props.handlePress? props.handlePress() : console.log('Hello')}>
      <LinearGradient
        colors={GradientColor}
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 1 }}
        style={props.style}
      >
        {props.children}
      </LinearGradient>
    </ButtonFeedBackAndOpacity>
  );
}
