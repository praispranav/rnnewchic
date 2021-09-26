import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { deviceWidth, styles } from "../styles/styles";
import CategoryBubble from "../components/CategoryBubble";
import NewArrival from "../components/NewArrival";
import Product from "../components/Product";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { userAction,loginUser } from "../actionCreator"

const ProductItems = [
  {
    id: 1,
    price: "6000",
    discountpercentage: "14",
    image: require("../assets/images/suit.jpg"),
  },
  {
    id: 2,
    price: "5000",
    discountpercentage: "4",
    image: require("../assets/images/girl.jpg"),
  },
  {
    id: 3,
    price: "6000",
    discountpercentage: "14",
    image: require("../assets/images/suit.jpg"),
  },
  {
    id: 4,
    price: "5000",
    discountpercentage: "4",
    image: require("../assets/images/girl.jpg"),
  },
  {
    id: 5,
    price: "6000",
    discountpercentage: "14",
    image: require("../assets/images/suit.jpg"),
  },
  {
    id: 6,
    price: "5000",
    discountpercentage: "4",
    image: require("../assets/images/girl.jpg"),
  },
];

export default function HomeScreen({route, navigation}) {
  const state = useSelector(s=> s)
  console.warn(state)

  const dispatch = useDispatch()
  return (
    <View>
      <View style={{ width: deviceWidth, backgroundColor: "white" }}>
        {/* Header */}
        <ScrollView style={{ marginBottom: 15 }}>
          <View>
            <Image
              source={require("../../assets/images/img2.jpg")}
              style={styles.bannerImage}
            />
          </View>
          {/* Catergory */}
          <View
            style={[
              styles.flex,
              styles.space_between,
              styles.paddingHorizontal,
              styles.flexWrap,
            ]}
          >
            <CategoryBubble
              image={require("../assets/images/shirt.png")}
              label={"Shirt"}
            />
            <CategoryBubble
              image={require("../assets/images/shirt.png")}
              label={"T-Shirt"}
            />
            <CategoryBubble
              image={require("../assets/images/shirt.png")}
              label={"Pants"}
            />
            <CategoryBubble
              image={require("../assets/images/shirt.png")}
              label={"Two Pieces"}
            />
            <CategoryBubble
              image={require("../assets/images/shirt.png")}
              label={"Shoes"}
            />
            <CategoryBubble
              image={require("../assets/images/shirt.png")}
              label={"Bags"}
            />
            <CategoryBubble
              image={require("../assets/images/shirt.png")}
              label={"Accessories"}
            />
            <CategoryBubble
              image={require("../assets/images/shirt.png")}
              label={"Underwear"}
            />
          </View>
          {/* Discount */}
          <View style={styles.marginVertical}>
            <Image
              source={require("../../assets/images/img1.jpg")}
              style={styles.discountbanner}
            />
          </View>
          {/* New Arrival */}
          <View
            style={[
              styles.flex,
              styles.paddingHorizontal,
              styles.marginVertical,
              styles.space_between,
            ]}
          >
            <NewArrival
              title="New Arrival"
              text="Summer Collection"
              price="2000"
              image={require("../assets/images/shirt.png")}
            />
            <NewArrival
              title="Best Seller"
              text="Must-have Items"
              price="100"
              image={require("../assets/images/shirt.png")}
            />
          </View>

          {/*Products  */}
          <View style={[styles.marginVertical, styles.paddingHorizontal]}>
            <Text style={[styles.bold, styles.boldText]}>
              You Might Also Like
            </Text>
            <View
              style={[
                styles.marginVertical,
                styles.flex,
                styles.space_between,
                styles.flexWrap,
              ]}
            >
              {ProductItems.map((item) => (
                <Product
                  key={item.id}
                  price={item.price}
                  navigation={navigation}
                  discountpercentage={item.discountpercentage}
                  image={item.image}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
      <SafeAreaView></SafeAreaView>
    </View>
  );
}
