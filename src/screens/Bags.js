import React, { useState } from "react";
import { View, Text, ScrollView, Image, CheckBox } from "react-native";
import { styles } from "../styles/styles";
import YouMightLike from "../components/YouMightLike";
import GradientButton from "../components/GradientButton";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize"

const {
  marginTop,
  space_between,
  marginLeft,
  alignCenter,
  paddingHorizontal,
  paddingHorizontal25,
  boldText,
  bold,
  textgrey,
  border2grey,
  textWhite,
  paddingVerticalSmall,
  bgpink2,
  flex,
  flexColumn,
  marginTopSmall,
  border,
  paddingVertical,
  bgWhite,
} = styles;

export default function Bags({navigation, route}) {
  const [noorders, setnoorders] = useState(false);
  const [checked, setChecked] = useState(false);

  const [quantity, setQuantity] = useState(0);

  const add = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const sub = () => {
    setQuantity((prevState) => (prevState === 0 ? 0 : prevState - 1));
  };
  return (
    <View style={{ flex: 1, display: "flex", justifyContent: "space-between"}}>
      <ScrollView>
        {noorders ? (
          <View style={[styles.paddingVerticalLarge, styles.bgWhite]}>
            <View
              style={[
                styles.flex,
                styles.alignCenter,
                styles.justifyCenter,
                styles.marginTop,
              ]}
            >
              <Image
                source={require("../../assets/icons/hn6Suu730j.jpg")}
                style={{ height: 200, width: 200 }}
              />
            </View>
            <View
              style={[
                styles.paddingVerticalSmall,
                styles.flex,
                styles.alignCenter,
                styles.justifyCenter,
              ]}
            >
              <View style={[styles.flex, styles.bgWhite, styles.alignCenter]}>
                <Text style={[styles.pink, styles.boldText]}>20% OFF</Text>
                <Text style={[styles.paddingHorizontalSmall]}>
                  For New Users
                </Text>
              </View>
            </View>
            <View
              style={[styles.flex, styles.alignCenter, styles.justifyCenter]}
            >
              <GradientButton
                style={[styles.paddingHorizontal, styles.paddingVerticalSmall]}
              >
                <Text style={[styles.textWhite, styles.bold]}>Shop Now</Text>
              </GradientButton>
            </View>
          </View>
        ) : null}
        {!noorders && (
          <>
            <View
              style={[
                styles.fullWidth,
                marginTop,
                bgWhite,
                paddingHorizontal,
                paddingVertical,
              ]}
            >
              <View style={[flex, alignCenter]}>
                <Text
                  style={[
                    bgpink2,
                    paddingHorizontal,
                    paddingVerticalSmall,
                    textWhite,
                    paddingHorizontal25,
                    bold,
                    boldText,
                  ]}
                >
                  Sale
                </Text>
                <Text style={[marginLeft, boldText, bold]}>Flash Deals</Text>
              </View>
              <View style={[flex, alignCenter, marginTop]}>
                <CheckBox
                  value={checked}
                  onValueChange={() => setChecked((prevState) => !prevState)}
                  // style={{ borderRadius: 200 , backgroundColor: "pink", overflow: "hidden" }}
                />
                <View style={[marginLeft, flex]}>
                  <Image
                    source={require("../assets/images/girl.jpg")}
                    style={{ width: 70, height: 100 }}
                  />
                  <View
                    style={[
                      { marginLeft: 10 },
                      paddingVerticalSmall,
                      flexColumn,
                      space_between,
                    ]}
                  >
                    <View>
                      <Text style={textgrey}>Men 65% Cotton Fun NewsPaper</Text>
                      <Text
                        style={[
                          paddingHorizontal,
                          paddingVerticalSmall,
                          border,
                          marginTopSmall,
                          { alignSelf: "flex-start" },
                        ]}
                      >
                        Black ,IN M{" "}
                      </Text>
                    </View>
                    <View style={[flex, alignCenter, space_between]}>
                      <Text style={bold}>₹ 2500</Text>
                      <View style={[flex, alignCenter]}>
                        <TouchableOpacity onPress={sub}>
                          <AntDesign name="minus" size={16} />
                        </TouchableOpacity>
                        <Text style={paddingHorizontal}>{quantity}</Text>
                        <TouchableOpacity onPress={add}>
                          <AntDesign name="plus" size={16} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </>
        )}

        <YouMightLike />
      </ScrollView>
      <View style={[styles.paddingVerticalSame, styles.paddingHorizontal,bgWhite,flex, space_between,alignCenter, { borderTopWidth: 1, borderColor: "lightgrey" }]}>
        <Text>CheckBox</Text>
        <View style={[flex, alignCenter,]}>
            <Text style={[styles.textTheme, styles.bold, { fontSize: RFValue(19) }]}>₹ 2500</Text>
            <GradientButton
              handlePress={()=> navigation.navigate("Place Order")}
                style={[{ paddingHorizontal: 22 }, styles.paddingVerticalSmall, styles.marginLeft]}
              >
                <Text style={[styles.textWhite, styles.bold, styles.boldText]}>Checkout</Text>
              </GradientButton>
        </View>
      </View>
    </View>
  );
}
