import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { GradientColor, styles ,halfWidth} from "../styles/styles";
import Icon from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonFeedBackAndOpacity from "./ButtonFeedBackAndOpacity";
import { LinearGradient } from "expo-linear-gradient";

function Product(props) {
  const discount = props.price * props.discountpercentage;
  const percent = discount / 100;
  const discountedprice = props.price - percent;
  const {width, height} = Image.resolveAssetSource(props.image);
  return (
    <ButtonFeedBackAndOpacity onPress={() => props.navigation.navigate("Product Description")}>
      <View style={[styles.product]}>
        <Image source={props.image} style={props.responsive ? { width: halfWidth - 15, height: height/4 } :styles.productImage} />
        <View style={[styles.marginVerticalSmall, styles.position_relative]}>
          <View style={{ position: "absolute", right: 10, zIndex: 100 }}>
            <TouchableOpacity>
              <Icon name={props.icon ? props.icon : "more-horizontal" } size={20} color={"grey"} />
            </TouchableOpacity>
          </View>

          {props.discountpercentage ? (
            <View style={{ height: 40 }}>
              <Text style={[styles.bold, styles.pink, { fontSize: 17 }]}>
                <MaterialIcons name="currency-inr" size={18} />
                {discountedprice}
              </Text>
              <View
                style={[styles.flex, styles.alignCenter, { marginVertical: 4 }]}
              >
                <Text
                  style={[
                    styles.line_trough,
                    styles.textgrey,
                    styles.smalltext,
                  ]}
                >
                  {" "}
                  <MaterialIcons name="currency-inr" size={13} />
                  {props.price}
                </Text>
                <LinearGradient
                  colors={GradientColor}
                  end={{ x: 1, y: 0 }}
                  start={{ x: 0, y: 1 }}
                  style={[styles.marginHorizontal]}
                >
                  <Text
                    style={[
                      styles.textWhite,
                      styles.smalltext,
                      { paddingHorizontal: 4, paddingVertical: 2 },
                    ]}
                  >
                    -{props.discountpercentage} %
                  </Text>
                </LinearGradient>
              </View>
            </View>
          ) : (
            <View style={{ height: 40 }}>
              <Text style={[styles.bold, styles.textBlack, { fontSize: 17 }]}>
                <MaterialIcons name="currency-inr" size={18} />
                {props.price}
              </Text>
            </View>
          )}
        </View>
      </View>
    </ButtonFeedBackAndOpacity>
  );
}

export default React.memo(Product);
