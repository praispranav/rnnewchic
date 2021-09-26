import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";
import { styles } from "../styles/styles";
import { ThemeColorPink, deviceWidth } from "../styles/styles";
import { SvgXml } from "react-native-svg"
import { NotebookIcon } from "../svgicon/mycouponicon"
import { RFValue } from "react-native-responsive-fontsize";

const WidthAfterPadding = deviceWidth - 20

const onepercent = WidthAfterPadding/100

const LocalStyle = StyleSheet.create({
  width: {
    width: onepercent * 35,
    // height: 
  },
  textpink: {
    color: ThemeColorPink,
  },
  borderpink: {
    borderWidth: 1,
    borderColor: ThemeColorPink,
  },
  widthItem: {
    width: onepercent * 65,
    height: 140
  },
  border: {
    borderStyle: "dashed",
    borderTopWidth: 1,
    borderTopColor: "lightgrey",
    borderRadius: 1,
    paddingTop: 5,
  },
  smalltext: {
    fontSize: RFValue(10) ,
  },
});

function Coupons(props) {
  return (
    <View
      style={[
        styles.marginTop,
        styles.fullWidth2,
        
        styles.marginHorizontal,
        styles.flex,
        styles.space_between,
      ]}
    >
      <View
        style={[
          styles.bgWhite,
          styles.paddingHorizontal,
          styles.paddingVertical,
          LocalStyle.widthItem,
          styles.flexColumn, styles.space_between
        ]}
      >
        <View style={[styles.flex, styles.alignCenter]}>
          <Text style={[LocalStyle.textpink, styles.bold, styles.text18]}>
            {props.title}
          </Text>
          <Text
            style={[
              styles.marginHorizontal,
              LocalStyle.textpink,
              LocalStyle.borderpink,
              styles.paddingHorizontal,
            ]}
          >
            {props.orderover}
          </Text>
        </View>
        <Text style={[styles.marginTop, { fontSize: RFValue(14) }]}>{props.subtitle}</Text>
        <View style={[styles.marginTop, LocalStyle.border]}>
          <Text style={[styles.textgrey, LocalStyle.smalltext]}>
            {props.expire.slice(0, 34)}
          </Text>
        </View>
      </View>


      {/* <ImageBackground
        source={require('../../assets/background/coupon3.png')}
        imageStyle={{ resizeMode: "cover" }}
        style={[
          LocalStyle.width,
          styles.flexColumn,
          styles.alignCenter,
          styles.justifyCenter,
        ]}
      >
        <ButtonFeedBackAndOpacity onPress={() => console.warn("")}>
          <View
            style={[
              styles.bgWhite,
              styles.borderRounded,
              styles.paddingHorizontal,
              styles.paddingVerticalSmall,
            ]}
          >
            <Text style={[styles.textCenter, LocalStyle.textpink]}>Use It</Text>
          </View>
        </ButtonFeedBackAndOpacity>
      </ImageBackground> */}
      <View style={[ LocalStyle.width, styles.position_relative ]}>
        <SvgXml xml={NotebookIcon} width={onepercent * 35} height={"140"} />
        <View style={[styles.position_absolute,{ top: 55, left: onepercent* 10 }]}>

        <ButtonFeedBackAndOpacity onPress={() => console.warn("")}>
          <View
            style={[
              styles.bgWhite,
              styles.borderRounded,
              styles.paddingHorizontal,
              styles.paddingVerticalSmall,
            ]}
            >
            <Text style={[styles.textCenter, LocalStyle.textpink]}>Use It</Text>
          </View>
        </ButtonFeedBackAndOpacity>
            </View>
      </View>

    </View>
  );
}

const CouponsList = [
  {
    title: "$ 3 OFF",
    subtitle: "New User Coupon Get $30 off $50 of all items",
    expire: "Expires " + " " + new Date(),
    orderover: "Order over: 50",
  },
  {
    title: "$ 3 OFF",
    subtitle: "New User Coupon Get $10 off $50 of all items",
    expire: "Expires " + " " + new Date(),
    orderover: "Order over: 50",
  },
];

export default function MyCouponsScreen() {
  return (
    <View style={styles.flexColumn}>
      {CouponsList.map((item) => (
        <Coupons
          key={item.subtitle}
          title={item.title}
          subtitle={item.subtitle}
          expire={item.expire}
          orderover={item.orderover}
        />
      ))}
      <ButtonFeedBackAndOpacity onPress={() => console.warn("hello")}>
        <View
          style={[
            styles.marginHorizontal,
            styles.paddingVerticalSame,
            { elevation: 2 },
            styles.marginTop,
            styles.bgWhite,
          ]}
        >
          <Text style={[styles.textCenter, styles.text18]}>
            + Get More Coupons
          </Text>
        </View>
      </ButtonFeedBackAndOpacity>
    </View>
  );
}
