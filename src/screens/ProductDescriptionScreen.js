import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles, ThemeColorPink } from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ShippingIcon } from "../svgicon/accounticons";
import { SvgXml } from "react-native-svg";
import GradientButton from "../components/GradientButton";
import { BrandIcon } from "../svgicon/bottomtabicons";
import Divider from "../components/Divider";
import ProductDescriptionHeader from "../components/ProductDescriptionHeader";
import ProductDescriptionContent from "../components/ProductDescriptionContent";
import ProductDescriptionReviewAndRatings from "../components/ProductDescriptionReviewAndRatings";
import ProductDescriptionSuggestion from "../components/ProductDescriptionSuggestion";
import Loading from "../components/loading";

const {
  flex1,
  bgWhite,
  paddingVertical,
  paddingHorizontal,
  paddingVerticalSame,
  marginLeft,
  justifyCenter,
  borderRounded,
  alignCenter,
  paddingHorizontal25,
  flex,
  evenly,
} = styles;

const ImageData = [
  {
    id: "1",
    image: require("../../assets/images/img3.jpg"),
  },
  {
    id: "1",
    image: require("../../assets/images/img2.jpg"),
  },
  {
    id: "1",
    image: require("../../assets/images/img1.jpg"),
  },
  {
    id: "1",
    image: require("../../assets/images/img3.jpg"),
  },
  {
    id: "1",
    image: require("../../assets/images/img2.jpg"),
  },
  {
    id: "1",
    image: require("../../assets/images/img1.jpg"),
  },
];

const headerDiscount = [
  {
    id: 1,
    discount: 20,
    above: 100,
  },
  {
    id: 2,
    discount: 70,
    above: 10,
  },
  {
    id: 3,
    discount: 50,
    above: 80,
  },
];

const suggestedImages = [
  { id: 1, image: require("../../assets/images/img2.jpg") },
  { id: 2, image: require("../../assets/images/img3.jpg") },
  { id: 3, image: require("../../assets/images/img1.jpg") },
];

const AddToButtonStyle = {
  width: 150,
  display: "flex",
  paddingVertical: 8,
  alignItems: "center",
};

const AddToBagIconsConatinerStyle = [
  flex,
  evenly,
  bgWhite,
  alignCenter,
  { borderTopWidth: 1, borderColor: "lightgrey" },
  paddingVerticalSame,
];

const RoundedCheckBoxStyle = [
  {
    marginLeft: 25,
    borderColor: ThemeColorPink,
    width: 25,
    height: 25,
    borderWidth: 2,
  },
  borderRounded,
  flex,
  alignCenter,
  justifyCenter,
];

const RoundedCheckBoxStyleWithoutMargin = [
  ...RoundedCheckBoxStyle,
  {
    marginLeft: 0,
  },
];

function FixedButton() {
  return (
    <View style={AddToBagIconsConatinerStyle}>
      <TouchableOpacity>
        <AntDesign name="hearto" size={20} />
      </TouchableOpacity>
      <TouchableOpacity>
        <SvgXml xml={BrandIcon} width="20" height="20" />
      </TouchableOpacity>

      <GradientButton style={AddToButtonStyle}>
        <Text style={[{ color: "white", fontWeight: "bold" }]}>Add To Bag</Text>
      </GradientButton>
    </View>
  );
}

export default function ProductDescriptionScreen({ route, navigation }) {
  const [ loadingPage, setPageLoaded ] = useState(false)
  useEffect(()=>{
    setPageLoaded(true)
  },[])

  if(!loadingPage) return <Loading />
  return (
    <SafeAreaView style={[flex1]}>
      <ScrollView style={[flex1, bgWhite]}>
        <ProductDescriptionHeader
          headerDiscount={headerDiscount}
          imagedata={ImageData}
        />
        {/* Rating and Price */}
        <ProductDescriptionContent />
        <Divider marginTop={true} />
        <View
          style={[
            paddingVertical,
            paddingHorizontal,
            alignCenter,
            bgWhite,
            flex,
          ]}
        >
          <View style={RoundedCheckBoxStyleWithoutMargin}>
            <AntDesign name="check" size={15} color={ThemeColorPink} />
          </View>
          <Text style={[paddingHorizontal]}>30 Days Return </Text>
          <View style={RoundedCheckBoxStyle}>
            <AntDesign name="check" size={15} color={ThemeColorPink} />
          </View>
        </View>
        <View
          style={[paddingHorizontal25, alignCenter, paddingVerticalSame, flex]}
        >
          <SvgXml xml={ShippingIcon} width={"30"} height={"30"} />
          <Text style={marginLeft}>Shipping:</Text>
        </View>
        <Divider marginTop={true} />
        <ProductDescriptionSuggestion suggestedImages={suggestedImages} />
        <Divider marginTop={false} />
        {/* Review */}
        <ProductDescriptionReviewAndRatings />
      </ScrollView>
      <FixedButton />
    </SafeAreaView>
  );
}
