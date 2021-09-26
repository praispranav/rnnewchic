import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles, ThemeColorPink, deviceWidth } from "../styles/styles";
import { Rating } from "react-native-ratings";
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from "../components/ButtonFeedBackAndOpacity";
import { SvgXml } from "react-native-svg";
// import Button from "./ButtonFeedBackAndOpacity";
import { discounticon as DiscountIcon } from "../svgicon/productdescriptiondiscount";

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

function SelectColorImage({ image, active, handlePress }) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        {
          borderColor: active ? ThemeColorPink : "white",
          borderWidth: active ? 2 : 0,
          marginRight: 5,
        },
      ]}
    >
      <Image
        source={image}
        style={{ width: 40, height: 60, resizeMode: "cover" }}
      />
    </TouchableOpacity>
  );
}

function ItemSizeButton({ handlePress, label }) {
  return (
    <Button onPress={handlePress}>
      <View
        style={[
          paddingHorizontal,
          marginTop,
          { marginRight: 15 },
          paddingVerticalSmall,
          border,
        ]}
      >
        <Text>{label}</Text>
      </View>
    </Button>
  );
}

const INITIAL_COLOR_STATE = {
  color1: false,
  color2: false,
  color3: false,
};

export default function ProductDescriptionContent() {
  const [selectedColor, setSelectedColor] = useState(INITIAL_COLOR_STATE);

  const handleColor1 = () =>
    setSelectedColor({ ...INITIAL_COLOR_STATE, color1: true });
  const handleColor2 = () =>
    setSelectedColor({ ...INITIAL_COLOR_STATE, color2: true });
  const handleColor3 = () =>
    setSelectedColor({ ...INITIAL_COLOR_STATE, color3: true });
  return (
    <>
      <View
        style={[
          paddingHorizontal25,
          paddingVertical,
          flex,
          space_between,
          alignCenter,
        ]}
      >
        <View style={[flex, alignCenter]}>
          <Text style={[{ color: ThemeColorPink, fontSize: 20 }, bold]}>
            ₹ 8500
          </Text>
          <Text
            style={[
              textgrey,
              marginLeft,
              { textDecorationLine: "line-through" },
            ]}
          >
            ₹ 8500
          </Text>
        </View>
        <View style={[flex, alignCenter]}>
          <Rating
            type="custom"
            ratingCount={5}
            startingValue={2}
            imageSize={16}
            ratingColor={ThemeColorPink}
            ratingBackgroundColor="lightgrey"
            selectedColor={ThemeColorPink}
            readonly={true}
            disabled={true}
            showRating={false}
            onFinishRating={() => console.warn("Hello")}
          />
          <Text style={[textgrey, marginLeft]}>(261)</Text>
          <AntDesign
            name="right"
            size={17}
            color={"grey"}
            style={{ marginLeft: 5 }}
          />
        </View>
      </View>
      <Text style={[paddingHorizontal25, textgrey]}>
        Order and Earn 32 points
      </Text>
      {/* Coupon Code */}
      <View style={[paddingHorizontal25, marginTop, flex]}>
        <View
          style={[
            { borderWidth: 1, borderColor: ThemeColorPink },
            paddingHorizontal,
            flex,
            alignCenter,
          ]}
        >
          <Text style={[bold, textTheme, boldText]}>Charminar</Text>
        </View>
        <Text style={[marginLeft, { width: "70%" }]}>
          Mens 55% Cotton Fun Newspaper Print Casul Holiday Short Sleeve Shirt{" "}
        </Text>
      </View>
      {/* Svg Space */}

      <View style={[paddingHorizontal25, marginTop, position_relative]}>
        <SvgXml xml={DiscountIcon} width={deviceWidth - 40} height={80} />
        <View
          style={[
            flex,
            space_between,
            alignCenter,
            position_absolute,
            { width: deviceWidth - 40, left: 20, height: 80 },
          ]}
        >
          <View
            style={[
              { flex: 8.9 / 12, },
              flex,
              justifyCenter,
              alignCenter,
            ]}
          >
            <Text style={[bold, boldText, textWhite]}>{"20% OFF Only for \nnew users"}</Text>
          </View>
          <View
            style={[
              { flex: 3.1 / 12 },
              flex,
              justifyCenter,
              alignCenter,
            ]}
          >
              <Button>
                  <View style={[paddingHorizontal, borderRounded, bgWhite]}>
                  <Text>Get It</Text>
                  </View>
              </Button>
          </View>
        </View>
      </View>

      {/* Size Select */}
      <View style={[paddingHorizontal25, marginTop]}>
        <Text style={[bold]}>Color: Green</Text>

        <View style={[flex, alignCenter, marginTop]}>
          <SelectColorImage
            handlePress={handleColor1}
            active={selectedColor.color1}
            image={require("../../assets/images/img2.jpg")}
          />
          <SelectColorImage
            active={selectedColor.color2}
            handlePress={handleColor2}
            image={require("../../assets/images/img1.jpg")}
          />
          <SelectColorImage
            handlePress={handleColor3}
            active={selectedColor.color3}
            image={require("../../assets/images/img3.jpg")}
          />
        </View>

        <Text style={[marginTop, bold]}>Size(In):</Text>

        <View style={[flex, flexWrap]}>
          <ItemSizeButton label={"IN M"} />
          <ItemSizeButton label={"IN l"} />
          <ItemSizeButton label={"IN Xl"} />
          <ItemSizeButton label={"IN 2XL"} />
          <ItemSizeButton label={"IN 3XL"} />
          <ItemSizeButton label={"IN 4XL"} />
          <ItemSizeButton label={"IN S"} />
          <ItemSizeButton label={"IN XS"} />
          <ItemSizeButton label={"IN XXS"} />
          <ItemSizeButton label={"IN M"} />
        </View>
      </View>
    </>
  );
}
