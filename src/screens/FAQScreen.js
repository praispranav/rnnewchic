import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from "../components/ButtonFeedBackAndOpacity"

const {
  paddingHorizontal25,
  paddingVerticalSame,
  flex,
  alignCenter,
  space_between,
  flex1,
  bgWhite,
} = styles;

export default function FAQScreen() {
  return (
    <View style={[paddingHorizontal25, flex1, bgWhite]}>
      <Button onPress={() => console.warn("hello")}>
        <View style={[flex, alignCenter, space_between, paddingVerticalSame]}>
          <Text>Where and How Do Affiliate Get paid</Text>
          <AntDesign name="right" size={13} />
        </View>
      </Button>

      <Button onPress={() => console.warn("hello")}>
        <View style={[flex, alignCenter, space_between, paddingVerticalSame]}>
          <Text>Is it A Necessary To Build an Affilate Website</Text>
          <AntDesign name="right" size={13} />
        </View>
      </Button>

      <Button onPress={() => console.warn("hello")}>
        <View style={[flex, alignCenter, space_between, paddingVerticalSame]}>
          <Text>How Long is The Cookie Duration</Text>
          <AntDesign name="right" size={13} />
        </View>
      </Button>
    </View>
  );
}
