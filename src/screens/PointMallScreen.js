import React from "react";
import {
  View,
  Text,
  ScrollView,
  Switch,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  styles,
  ThemeColorPink,
  GradientColor,
  deviceWidth,
} from "../styles/styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ButtonFeedbackAndOpacity from "../components/ButtonFeedBackAndOpacity";
import YouMightLike from "../components/YouMightLike";
import { LinearGradient } from "expo-linear-gradient";
import { DollarIconBallon, GiftIconBallon } from "../svgicon/pointmall"
import { SvgXml } from "react-native-svg"

const LineWidth = 15;
const paddingDefault = { paddingHorizontal: 15 };
function CustomImage({ image }) {
  return (
    <Image
      source={image}
      style={{
        resizeMode: "contain",
        width: 24,
        height: 24,
        marginLeft: LineWidth,
      }}
    />
  );
}

function PointsRounded(props) {
  return (
    <>
      <View style={styles.flexColumn}>
        {props.icontop === "gift" ? (
          <View style={{ marginLeft : LineWidth + 2 }}>
            <SvgXml xml={GiftIconBallon} width="25" height="25" />

          </View>
        ) : props.icontop === "dollar" ? (
          <View style={{ marginLeft: LineWidth + 2 }}>
          <SvgXml xml={DollarIconBallon} width="25" height="25" />
          </View>
        ) : (
          <CustomImage />
        )}
        <View
          style={[styles.flex, styles.marginTopSmall, styles.justifyCenter]}
        >
          <View
            style={[styles.bgpink2, { width: LineWidth, height: 2 }]}
          ></View>
          <View style={[styles.flexColumn]}>
            <View
              style={[
                styles.borderHeightWidth,
                styles.paddingSmallSmall,
                styles.borderRounded,
                styles.flexColumn,
                styles.alignCenter,
                styles.justifyCenter,

              ]}
            >
              <Text style={{fontSize: 12}}>+ {props.point}</Text>
            </View>
          </View>
        </View>
        <Text
          style={[
            styles.textCenter,
            { marginLeft: LineWidth },
            styles.textgrey,
            styles.smalltext,
          ]}
        >
          {props.time}
        </Text>
      </View>
    </>
  );
}

function Coupouns(props) {
  return (
    <ImageBackground
      source={require("../../assets/background/coupon2.png")}
      imageStyle={{ resizeMode: "cover", width: 120 }}
      style={[
        styles.flexColumn,
        styles.alignCenter,
        styles.justifyCenter,
        { marginRight: 10, marginLeft: 0, width: 120 },
        styles.paddingHorizontalSmall,
        styles.paddingVerticalSame,
        styles.marginTop,
      ]}
    >
      <Text style={[styles.textOrangeDark, styles.boldText, styles.bold]}>
        {props.discount}
      </Text>
      <Text style={[styles.textOrangeDark, styles.marginTop4]}>
        {props.point}
      </Text>

      <ButtonFeedbackAndOpacity onPress={() => console.warn("Hello")}>
        <View
          style={[
            styles.bgWhite,
            styles.paddingHorizontal,
            styles.marginTop4,
            styles.paddingVerticalSmall,
            styles.borderRounded,
            styles.bgdarkorange,
          ]}
        >
          <Text style={[styles.textWhite]}>Redeem</Text>
        </View>
      </ButtonFeedbackAndOpacity>
    </ImageBackground>
  );
}

export default function PointMallScreen() {
  const [isEnabled, setisEnabled] = React.useState(false);

  return (
    <ScrollView style={styles.flex1}>
      <ImageBackground
        imageStyle={{ width: deviceWidth, height: 120 }}
        source={require("../../assets/background/point_mall_header.png")}
        style={[styles.position_relative]}
      >
        <View style={[styles.paddingHorizontal, styles.paddingVertical]}>
          <View style={[styles.flex, styles.alignCenter]}>
            <View style={[styles.borderRounded]}>
              <Icon
                name="account-circle"
                size={60}
                color="white"
                style={{ margin: 0 }}
              />
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={[styles.textWhite, styles.bold, styles.boldText]}>
                0 Point
              </Text>
              <Text style={[styles.textWhite, styles.bold, styles.boldText]}>
                <MaterialIcons name="currency-inr" size={14} color="white" />{" "}
                0.00
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={[
            { backgroundColor: "black" },
            styles.position_absolute,
            styles.top25right0,
          ]}
        >
          <View
            style={[styles.flex, styles.alignCenter, styles.paddingHorizontal]}
          >
            <Text
              style={[
                styles.smalltext,
                styles.paddingVerticalSmall,

                styles.textWhite,
              ]}
            >
              Records
            </Text>
            <MaterialIcons name="menu-right" size={17} color="white" />
          </View>
        </TouchableOpacity>
        <View
          style={[
            styles.bgWhite,
            styles.borderRadiusTop,
            styles.paddingVertical,
            paddingDefault,
          ]}
        >
          <View style={[styles.flex, styles.space_between]}>
            <Text style={[styles.bold, styles.boldText]}>Daily Check</Text>
            <View style={[styles.flex, styles.alignCenter]}>
              <Text style={[styles.textgrey, styles.smalltext]}>
                Check in Notification
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? ThemeColorPink : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setisEnabled(!isEnabled)}
                value={isEnabled}
              />
            </View>
          </View>
          <View>
            <View
              style={[
                styles.flex,
                styles.paddingVerticalSmall,
                styles.justifyCenter, { transform: [{ scale:0.95 }]}
              ]}
            >
              <PointsRounded time={"06.30"} point="5" />
              <PointsRounded icontop="dollar" time={"07.01"} point="10" />
              <PointsRounded icontop="gift" time={"07.02"} point="20" />
              <PointsRounded time={"07.03"} point="20" />
              <PointsRounded time={"07.04"} point="25" />
              <PointsRounded time={"07.05"} point="30" />
              <PointsRounded icontop="dollar" time={"07.06"} point="30" />
              <View style={[{ marginTop: 13 }]}>
                <View
                  style={[styles.bgpink2, { width: LineWidth, height: 2 }]}
                ></View>
              </View>
            </View>
          </View>
          <View style={[styles.paddingHorizontal, styles.paddingVerticalSame]}>
            <ButtonFeedbackAndOpacity
              onPress={() => console.warn("Hello Butotn Pressed")}
            >
              <LinearGradient
                colors={GradientColor}
                end={{ x: 1, y: 0 }}
                start={{ x: 0, y: 1 }}
                style={[
                  styles.bgpink2,
                  styles.borderRounded,
                  styles.paddingVerticalSame,
                ]}
              >
                <Text
                  style={[
                    styles.textWhite,
                    styles.textCenter,
                    styles.boldText,
                    styles.bold,
                  ]}
                >
                  Sign In To Check In
                </Text>
              </LinearGradient>
            </ButtonFeedbackAndOpacity>
            <View style={styles.marginTop}>
              <Text style={styles.textCenter}>
                Check in Today to get 5 points
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View
        style={[
          styles.marginTop,
          styles.bgWhite,
          styles.paddingVerticalSame,
          paddingDefault,
        ]}
      >
        <Text style={[styles.bold, styles.boldText]}>Points Redeem Coupon</Text>
        <View style={styles.flex}>
          <Coupouns point="With 400 Points" discount="20 % Off" />
          <Coupouns point="With 400 Points" discount="20 % Off" />
        </View>
      </View>

      <View
        style={[
          paddingDefault,
          styles.marginTop,
          styles.bgWhite,
          styles.paddingVertical,
        ]}
      >
        <Text style={[styles.bold, styles.boldText]}>
          Use Points Get More Offers
        </Text>
        <View style={[styles.flex, styles.space_between, styles.marginTop]}>
          <ImageBackground
            source={require("../../assets/background/points_mall.png")}
            style={[
              styles.paddingVerticalSame,
              styles.paddingHorizontal,
              styles.flex,
              styles.space_between,
              styles.alignCenter,
              { width: deviceWidth / 2 - 22.5, height: 80 },
            ]}
          >
            <View>
              <Text style={[styles.bold, styles.boldText, styles.textWhite]}>
                Free Shipping
              </Text>
              <Text style={[styles.bold, styles.textWhite]}>$ 0.01 Sale</Text>
            </View>
            <FontAwesome5 name="users" color={"white"} size={25} />
          </ImageBackground>
          <ImageBackground
            source={require("../../assets/background/points_mall_blue.png")}
            style={[
              styles.bggreen,
              styles.paddingVerticalSame,
              styles.paddingHorizontal,
              styles.flex,
              styles.space_between,
              styles.alignCenter,
              { width: deviceWidth / 2 - 22.5 },
            ]}
          >
            <View>
              <Text style={[styles.bold, styles.boldText, styles.textWhite]}>
                Lucky Draw
              </Text>
              <Text style={[styles.bold, styles.textWhite]}>{"Go >"}</Text>
            </View>
            <FontAwesome5 name="users" color={"white"} size={25} />
          </ImageBackground>
        </View>
      </View>
      <YouMightLike />
    </ScrollView>
  );
}
