import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  GradientColor,
  styles,
  ThemeColorPink,
  halfWidth,
} from "../styles/styles";
import Icon from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonFeedBackAndOpacity from "./ButtonFeedBackAndOpacity";
import { LinearGradient } from "expo-linear-gradient";

const YouMightAlsoLike = [
  {
    id: 1,
    discountpercentage: 12,
    price: 2000,
    image: require("../assets/images/suit.jpg"),
  },
  {
    id: 2,
    discountpercentage: 12,
    price: 2000,
    image: require("../assets/images/girl.jpg"),
  },
  {
    id: 100,
    discountpercentage: 12,
    price: 2000,
    image: require("../assets/images/suit.jpg"),
  },
  {
    id: 3,
    discountpercentage: 12,
    price: 2000,
    image: require("../assets/images/girl.jpg"),
  },
  {
    id: 4,
    discountpercentage: 12,
    price: 2000,
    image: require("../assets/images/girl.jpg"),
  },
  {
    id: 1001,
    price: 2000,
    discountpercentage: 56,
    image: require("../assets/images/suit.jpg"),
  },
];

const YouMightAlsoLike2 = [
    {
      id: 2,
      discountpercentage: 12,
      price: 2000,
      image: require("../assets/images/girl.jpg"),
    },
    {
        id: 1,
      price: 2000,
      image: require("../assets/images/suit.jpg"),
    },
    {
      id: 2007,
      discountpercentage: 12,
      price: 2000,
      image: require("../assets/images/girl.jpg"),
    },
    {
      id: 100,
      discountpercentage: 12,
      price: 2000,
      image: require("../assets/images/suit.jpg"),
    },
    {
      id: 109,
    price: 2000,
    image: require("../assets/images/suit.jpg"),
  },
    {
      id: 3,
      price: 2000,
      image: require("../assets/images/girl.jpg"),
    },
  ];
  

function Products(props) {
  const discount = props.price * props.discountpercentage;
  const percent = discount / 100;
  const discountedprice = props.price - percent;
  const {width, height} = Image.resolveAssetSource(props.image);
  return (
    <ButtonFeedBackAndOpacity onPress={() => console.warn("Product Pressed")}>
      <View
        style={[
          {
            width: halfWidth - 15,
            overflow: "hidden",
            borderColor: "rgb(235,235,235)",
            marginTop: 8,
          },
        ]}
      >
        <Image
          source={props.image}
          style={{ width: halfWidth - 15, height: height/4 }}
        />
        <View style={[styles.marginVerticalSmall, styles.position_relative]}>
          <View style={{ position: "absolute", right: 10, zIndex: 100 }}>
            <TouchableOpacity>
              <Icon name="heart" size={16} />
            </TouchableOpacity>
          </View>
          {
              props.discountpercentage ? (
                  <View style={{ height: 40 }}>
                <Text style={[styles.bold, styles.pink, { fontSize: 17 }]}>
                <MaterialIcons name="currency-inr" size={18} />
                {discountedprice}
              </Text>
              <View
                style={[styles.flex, styles.alignCenter, { marginVertical: 4 }]}
              >
                <Text
                  style={[styles.line_trough, styles.textgrey, styles.smalltext]}
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
                  <View style={{ height: 20 }}>
                        <Text style={[styles.bold, styles.textBlack, { fontSize: 17 }]}>
                        <MaterialIcons name="currency-inr" size={18} />
                        {props.price}
                    </Text>
                  </View>
              )
          }
         
        </View>
      </View>
    </ButtonFeedBackAndOpacity>
  );
}

export default function YouMightLike() {
  return (
    <View style={styles.marginTop}>
      <View
        style={[
          styles.paddingHorizontal,
          styles.paddingVerticalSmall,
          styles.bgWhite,
        ]}
      >
        <Text style={[styles.paddingVertical, styles.bold]}>
          You Might Also Like
        </Text>
        <View style={[styles.flex, styles.space_between]}>

        <View style={[styles.flexColumn, styles.flexWrap]}>
          {YouMightAlsoLike.map((item) => (
            <Products
              key={item.id}
              image={item.image}
              responsive={true}
              price={item.price}
              icon={"heart"}
              discountpercentage={item.discountpercentage}
            />
          ))}
        </View>
        <View style={[styles.flexColumn, styles.flexWrap]}>
          {YouMightAlsoLike2.map((item) => (
            <Products
              key={item.id}
              image={item.image}
              responsive={true}
              price={item.price}
              icon={"heart"}
              discountpercentage={item.discountpercentage}
            />
          ))}
        </View>
        </View>
      </View>
    </View>
  );
}
