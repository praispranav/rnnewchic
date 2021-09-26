import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  ScrollView,
  Image, ImageBackground, TouchableOpacity
} from "react-native";
import { deviceWidth, styles, ThemeColorPink } from "../styles/styles";

import { SliderBox } from "react-native-image-slider-box";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";
import AntDesign from "react-native-vector-icons/AntDesign";

const ImageList = [
  require("../assets/images/discountbanner.jpg"),
  require("../assets/images/discountbanner.jpg"),
  require("../assets/images/discountbanner.jpg"),
];

const ProductsAboveBanner = [
  {
    id: 1,
    image: require("../assets/images/suit.jpg"),
    price: "2300",
    discount: 10,
  },
  {
    id: 2,
    image: require("../assets/images/girl.jpg"),
    price: "2300",
  },
  {
    id: 3,
    image: require("../assets/images/girl.jpg"),
    price: "2300",
    discount: 12,
  },
];

const CategoryChip = [
  {
    id: 1,
    text: "ALL",
  },
  {
    id: 2,
    text: "WOMEN",
  },
  {
    id: 3,
    text: "MEN",
  },
  {
    id: 4,
    text: "BAGS",
  },
  {
    id: 5,
    text: "SHOES",
  },
  {
    id: 6,
    text: "BEAUTY",
  },
  {
    id: 7,
    text: "JEWELLRY & WATCH",
  },
  {
    id: 8,
    text: "HOME & GARDEN",
  },
  {
    id: 9,
    text: "ACCESSORIES",
  },
];

function Chip(props) {
  return (
    <ButtonFeedBackAndOpacity onPress={() => props.handlePress(props.text)}>
      <View
        key={props.id}
        style={[
          styles.bgpink,
          styles.paddingHorizontal,
          styles.paddingVerticalSmall,
          { margin: 8 },
          styles.borderRadius_0,
          props.active === props.text ? null : styles.bgGrey,
        ]}
      >
        <Text
          style={
            props.active === props.text ? styles.textWhite : styles.textBlack
          }
        >
          {props.text.toUpperCase()}
        </Text>
      </View>
    </ButtonFeedBackAndOpacity>
  );
}

export default function BrandScreen({ navigation }) {
  const [activeChip, setactiveChip] = useState("ALL");
  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        <SliderBox
          images={ImageList}
          parentWidth={deviceWidth}
          sliderBoxHeight={125}
          autoplay
          circleLoop
          resizeMethod={"resize"}
          resizeMode={"cover"}
          dotColor={ThemeColorPink}
        />
        {/* Chip */}
        <View style={[styles.flex, styles.flexWrap, styles.marginVerticalSmall, { marginBottom: 0}]}>
          {CategoryChip.map((item) => (
            <Chip
              active={activeChip}
              text={item.text}
              key={item.id}
              handlePress={(event) => setactiveChip(event)}
            />
          ))}
        </View>
       
        <View style={[styles.marginTop, styles.position_relative]}>
        <ImageBackground
          source={require("../assets/images/banner.jpg")}
          imageStyle={{
            height: 220,
          }}
          style={[styles.fullWidth]}
        >
          <View style={{ marginTop: 175 }}></View>
          <View style={[styles.position_absolute, { top: 75, right: 10 }]}>
            <TouchableOpacity onPress={() => console.log("hello")}>
              <View
                style={[
                  { backgroundColor: "rgba(0,0,0,0.7)" },
                  styles.paddingHorizontal,
                  styles.paddingVerticalSmall,
                ]}
              >
                <Text style={[styles.bold, styles.textWhite]}>
                  SEE ALL <AntDesign name="right" size={15} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.paddingHorizontal]}>
            <View
              style={[
                styles.bgWhite,
                styles.flex1,
                { padding: 10 },
                styles.flex,
              ]}
            >
              {ProductsAboveBanner.map((item) => (
               <ButtonFeedBackAndOpacity key={item.id} onPress={() => console.warn("Hello")}>
               <View style={[styles.position_relative]}>
                 <Image
                   source={require("../assets/images/suit.jpg")}
                   style={{
                     width: (deviceWidth - 40) / 3,
                     height: 160,
                   }}
                 />
                 <Text
                   style={[
                     styles.textCenter,
                     styles.marginVerticalSmall,
                     styles.textBlack,
                     styles.bold,
                   ]}
                 >
                   <MaterialIcons name="currency-inr" size={13} />
                   {item.price}
                 </Text>
                 {item.discount ? (
                   <View
                     style={[
                       { padding: 2, paddingHorizontal: 5 },
                       styles.position_absolute,
                       {
                         borderTopRightRadius: 30,
                         borderBottomRightRadius: 30,
                         backgroundColor: "#42a5f5",
                       },
                     ]}
                   >
                     <Text style={[styles.textWhite]}>
                       -{item.discount}%
                     </Text>
                   </View>
                 ) : null}
               </View>
             </ButtonFeedBackAndOpacity>
              ))}
            </View>
          </View>
        </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}
