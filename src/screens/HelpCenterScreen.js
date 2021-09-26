import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "../styles/styles";
import Search from "../components/Search";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { SvgXml } from "react-native-svg"
import { ReturnIcon, ShippingIcon, ProductIcon, CouponIcon,PaymentIcon, OrderIcon } from "../svgicon/helpcentericons"

const IconSize = 70;
const Items = [
  {
    label: "Coupons & Points",
    backgroundcolor: "#F2C960",
    icon: (
      <SvgXml xml={CouponIcon} width={IconSize} height={IconSize} />
    ),
  },
  {
    label: "Shipping",
    backgroundcolor: "#81c784",
    icon: <SvgXml xml={ShippingIcon} width={IconSize} height={IconSize} />
  },
  {
    label: "Product",
    backgroundcolor: "#448aff",
    icon: <SvgXml xml={ProductIcon} width={IconSize} height={IconSize} />
  },
  {
    label: "Payment",
    backgroundcolor: "#76C4F9",
    icon:<SvgXml xml={PaymentIcon} width={IconSize} height={IconSize} />
  },
  {
    label: "Order",
    backgroundcolor: "#F2A0C2",
    icon: <SvgXml xml={OrderIcon} width={IconSize} height={IconSize} />
  },
  {
    label: "Return",
    backgroundcolor: "#C095EE",
    icon: <SvgXml xml={ReturnIcon} width={IconSize} height={IconSize} />
  },
];

function Section(props) {
  return (
    <ButtonFeedBackAndOpacity
      onPress={() => console.warn("Item Pressed", props.title)}
    >
      <View style={[styles.paddingHorizontal, styles.paddingVertical]}>
        <View style={[styles.flex, styles.space_between, styles.alignCenter]}>
          <Text style={[styles.boldText]}>{props.title}</Text>
          <MaterialIcon name="plus" size={15} />
        </View>
      </View>
    </ButtonFeedBackAndOpacity>
  );
}

const SectionList = [
  "Affliate Program",
  "Payment Method",
  "Return & Refund",
  "Privacy Policy",
  "Tax Affairs",
  "Terms & Conditions",
  "Intellectual Property Claims",
  "Account and Settings",
  "FAQs about COVID-19",
];

export default function HelpCenterScreen() {
  return (
    <ScrollView>
      <View
        style={[
          styles.bgWhite,
          styles.paddingHorizontal,
          styles.paddingVertical,
        ]}
      >
        <Search style={styles.fullWidth2} placeholder={"Search question"} icon="false" />
      </View>
      <View style={[styles.paddingHorizontal, styles.paddingVertical]}>
        <View style={[styles.flex,  {justifyContent: "space-around"} ]}>
          {Items.slice(0,3).map((item) => (
            <ButtonFeedBackAndOpacity
              key={item.label}
              onPress={() => console.warn("Item Pressed")}
            >
              <View>
                <View
                  style={[
                    styles.widthhelp,
                    { backgroundColor: item.backgroundcolor },
                  ]}
                >
                  <View
                    style={[
                      styles.flexColumn,
                      styles.alignCenter,
                      styles.flex1,
                      { justifyContent: "center" },
                    ]}
                  >
                    {item.icon}
                  </View>
                </View>
                <Text style={styles.textCenter}>{item.label}</Text>
              </View>
            </ButtonFeedBackAndOpacity>
          ))}
        </View>
        <View style={[styles.flex, {justifyContent: "space-around"}, styles.marginTop]}>
          {Items.slice(3,7).map((item) => (
            <ButtonFeedBackAndOpacity
              key={item.label}
              onPress={() => console.warn("Item Pressed")}
            >
              <View>
                <View
                  style={[
                    styles.widthhelp,
                    { backgroundColor: item.backgroundcolor },
                  ]}
                >
                  <View
                    style={[
                      styles.flexColumn,
                      styles.alignCenter,
                      styles.flex1,
                      { justifyContent: "center" },
                    ]}
                  >
                    {item.icon}
                  </View>
                </View>
                <Text style={styles.textCenter}>{item.label}</Text>
              </View>
            </ButtonFeedBackAndOpacity>
          ))}
        </View>
        <View
          style={[
            styles.marginTop,
            styles.borderBottom,
            { borderColor: "lightgrey" },
          ]}
        ></View>
        <View style={styles.paddingVertical}>
          <Text style={[styles.boldText, styles.bold, styles.paddingHorizontal]}>More Care</Text>

          {SectionList.map((item) => (
            <Section key={item} title={item} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
