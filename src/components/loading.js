import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { ThemeColorPink, styles } from "../styles/styles";

export default function Loading(){
    return (
        <View style={[styles.flex1,styles.bgWhite, styles.flex, styles.justifyCenter, styles. alignCenter ]}>
            <ActivityIndicator color={ThemeColorPink} size={24} />
        </View>
    )
}
