import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { styles, ThemeColorPink, deviceWidth } from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Rating } from "react-native-ratings";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Button from "../components/ButtonFeedBackAndOpacity";
import { ShippingIcon } from "../svgicon/accounticons";
import { SvgXml } from "react-native-svg";
import Entypo from "react-native-vector-icons/Entypo";
import GradientButton from "../components/GradientButton";
import { BrandIcon } from "../svgicon/bottomtabicons";
import Divider from "../components/Divider";
import ProductDescriptionHeader from "../components/ProductDescriptionHeader";
import ProductDescriptionContent from "../components/ProductDescriptionContent";

const {
  flex1,
  bgWhite,
  paddingVertical,
  paddingHorizontal,
  text18,
  marginTop,
  paddingVerticalSame,
  position_relative,
  border,
  position_absolute,
  marginLeft,
  justifyCenter,
  flexColumn,
  marginRight,
  bgpink2,
  borderRounded,
  alignCenter,
  textWhite,
  paddingHorizontalSmall,
  paddingHorizontal25,
  flex,
  bold,
  space_between,
  boldText,
  textgrey,
  flexWrap,
  evenly,
  paddingVerticalSmall,
  textTheme,
} = styles;

function ProgressBarCustom({ progress }) {
  return (
    <View style={[flex, alignCenter]}>
      <View
        style={[
          {
            width: 100,
            height: 5,
            backgroundColor: "lightgrey",
            borderRadius: 2,
            overflow: "hidden",
          },
          marginLeft,
        ]}
      >
        <View
          style={{
            backgroundColor: ThemeColorPink,
            height: "100%",
            width: progress,
          }}
        ></View>
      </View>
      <Text style={[textgrey, { marginLeft: 7 }]}>{progress}</Text>
    </View>
  );
}

const UserContainerStyle = [
  borderRounded,
  flex,
  alignCenter,
  justifyCenter,
  {
    borderWidth: 0.5,
    borderColor: "lightgrey",
    height: 40,
    width: 40,
  },
];

export default function ProductDescriptionReviewAndRatings() {
  const smallProgress = "10%";
  const TruetoSizeProgress = "85%";
  const LargePregress = "50%";
  return (
    <>
      <View style={[paddingHorizontal25, paddingVerticalSame]}>
        <Text style={[boldText, bold]}>Review (143)</Text>
        <View style={[marginTop, flex, alignCenter, space_between]}>
          <Rating
            type="custom"
            ratingColor={ThemeColorPink}
            ratingBackgroundColor="lightgrey"
            ratingCount={5}
            startingValue={2}
            imageSize={16}
            disabled={true}
            showRating={true}
            onFinishRating={() => console.warn("Hello")}
          />
          <View style={flex}>
            <View>
              <Text style={[styles.textgrey]}>Small</Text>
              <Text style={[styles.textgrey]}>True to Size</Text>
              <Text style={[styles.textgrey]}>Small</Text>
            </View>
            <View>
              <ProgressBarCustom progress={smallProgress} />
              <ProgressBarCustom progress={TruetoSizeProgress} />
              <ProgressBarCustom progress={LargePregress} />
            </View>
          </View>
        </View>
      </View>
      {/* Customer Rating */}
      <Divider marginTop={false} />

      <View style={[paddingVerticalSame, paddingHorizontal25]}>
        <View style={[flex, space_between]}>
          <View style={[flex, alignCenter]}>
            <View style={UserContainerStyle}>
              <AntDesign name="user" size={13} />
            </View>
            <Text style={{ marginLeft: 10 }}>Some Name</Text>
          </View>
          <Rating
            type="custom"
            ratingColor={ThemeColorPink}
            ratingBackgroundColor="lightgrey"
            style={{ alignSelf: "flex-end" }}
            imageSize={16}
            ratingCount={5}
            disabled={true}
          />
        </View>
        <Text style={marginTop}>Great Fit..</Text>
        <View style={[flex]}>
          <Image
            style={{ width: 150, height: 100, marginRight: 10 }}
            source={require("../../assets/images/img2.jpg")}
          />
          <Image
            source={require("../../assets/images/img1.jpg")}
            style={{ width: 150, height: 100, marginRight: 10 }}
          />
        </View>
        <Text style={textgrey}>Size: XL {"   "} Color: XL</Text>
      </View>
    </>
  );
}
