import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles, deviceWidth } from "../styles/styles";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
    // discount: 12,
  },
];

export default function CategoryScreen() {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={require("../assets/images/banner.jpg")}
          imageStyle={{
            height: 150,
          }}
          style={[styles.fullWidth]}
        >
          <View style={{ marginTop: 120 }}></View>
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
      <View style={[styles.marginTop, styles.position_relative]}>
        <ImageBackground
          source={require("../assets/images/banner.jpg")}
          imageStyle={{
            height: 150,
          }}
          style={[styles.fullWidth]}
        >
          <View style={{ marginTop: 120 }}></View>
          <View style={[styles.position_absolute, { top: 65, right: 10 }]}>
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
      <View style={styles.marginBottom}></View>
    </ScrollView>
  );
}
