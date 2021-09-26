import React from "react";
import { ScrollView, Text, View } from "react-native";
import GradientButton from "../components/GradientButton";
import YouMightLike from "../components/YouMightLike";
import { styles } from "../styles/styles";
import { SvgXml } from "react-native-svg";
import { NoOrderImage } from "../svgicon/noordericon";

export default function AllOrderScreen() {
  const Button = [
    styles.borderRadius_0,
    { paddingHorizontal: 20 },
    styles.paddingVerticalSmall,
    styles.textWhite,
    { fontSize: 13.5 },
  ];
  return (
    <ScrollView style={styles.flex1}>
      <View style={[styles.marginBottomSmall, styles.marginTop]}>
        <View style={[styles.flexColumn, styles.alignCenter]}>
          <SvgXml xml={NoOrderImage} height="140" width="250" />
          <Text style={[styles.textgrey, styles.marginTop]}>
            You have no order now.
          </Text>
          <View style={styles.marginTop}>
            <GradientButton>
              <Text style={Button}>FD</Text>
            </GradientButton>
          </View>
        </View>
      </View>
      <YouMightLike />
    </ScrollView>
  );
}
