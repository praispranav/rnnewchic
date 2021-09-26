import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Divider from "../components/Divider";
import FullWidthButton from "./FullWidthButton";

const {
  bgWhite,
  paddingVerticalSame,
  marginLeft,
  alignCenter,
  paddingHorizontal25,
  flex,
  bold,
  space_between,
  boldText,
  textgrey,
  textTheme,
} = styles;

export default function ProductDescriptionSuggestion({ suggestedImages }) {
  return (
    <>
      <View>
        <FullWidthButton
          label={"Description"}
          rightText={"Cotton,Rayon"}
          handlePress={() => console.warn("Hello")}
        />
        <FullWidthButton
          label={"Size Chart"}
          rightText={null}
          handlePress={() => console.warn("Hello")}
        />
      </View>
      {/* Below one is divider make a separate component */}
      <Divider marginTop={false} />

      <View style={[paddingHorizontal25, bgWhite]}>
        <View style={[flex, space_between, paddingVerticalSame]}>
          <Text style={[bold]}>Wear with</Text>
          <Entypo name="ccw" size={15} color={"grey"} />
        </View>
        <View style={[flex, alignCenter, space_between]}>
          {suggestedImages.map(({ image, id }) => (
            <Image
              key={id}
              source={image}
              style={{ width: "30%", height: 150, resizeMode: "cover" }}
            />
          ))}
        </View>
      </View>

      <Divider marginTop={true} />

      <View style={[paddingHorizontal25, flex, paddingVerticalSame]}>
        <View style={flex}>
          <Text style={[boldText, bold]}>ChAr</Text>
          <Text style={[textTheme, boldText, bold]}>mkpR</Text>
        </View>
        <View style={[marginLeft, flex, space_between, alignCenter]}>
          <Text style={[styles.smalltext, textgrey, { width: "75%" }]}>
            Some text SOme Text Some Text SOme text Some text Some Text SOme
            Text Some text Some text
          </Text>
          <AntDesign name="right" size={16} color="grey" />
        </View>
      </View>
    </>
  );
}
