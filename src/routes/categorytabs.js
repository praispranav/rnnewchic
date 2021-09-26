import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ThemeColorPink } from "../styles/styles";
import CategoryScreen from "../screens/CategoryScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";

const Tab = createMaterialTopTabNavigator();

export default function CategoryScreenTabs({ navigation, route }) {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderBottomColor: "lightgrey",
          paddingBottom: 10 
        }}
      >
        <View
          style={[
            styles.flex,
            styles.space_between,
            styles.marginTopSmall,
            styles.paddingHorizontal,
            styles.alignCenter,
          ]}
        >
          <View style={[styles.borderRounded, { overflow: "hidden" }]}>
            <ButtonFeedBackAndOpacity onPress={() => console.log("")}>
              <View style={{ padding: 5 }}>
                <AntDesign name="hearto" size={18} />
              </View>
            </ButtonFeedBackAndOpacity>
          </View>
          <View style={styles.flex}>
          <Image source={require('../../assets/icons/logo.png')} style={{ width: 120, height: 30, resizeMode: 'contain' }} />
          </View>
          <View style={[styles.borderRounded, { overflow: "hidden" }]}>
            <ButtonFeedBackAndOpacity
              onPress={() => navigation.navigate("Search")}
            >
              <View style={{ padding: 5 }}>
                <AntDesign name="search1" size={18} />
              </View>
            </ButtonFeedBackAndOpacity>
          </View>
        </View>
      </SafeAreaView>
      <Tab.Navigator
        lazy={true}
        tabBarOptions={{
          indicatorStyle: { backgroundColor: ThemeColorPink, opacity: 1 },
          activeTintColor: ThemeColorPink,
          inactiveTintColor: "gray",
          style: { shadow: "none", elevation: 0 },
          showIcon: true,
          scrollEnabled: true,
        }}
      >
        <Tab.Screen name="All" component={CategoryScreen} />
        <Tab.Screen name="Women" component={CategoryScreen} />
        <Tab.Screen name="Men" component={CategoryScreen} />
        <Tab.Screen name="Bags" component={CategoryScreen} />
        <Tab.Screen name="Shoes" component={CategoryScreen} />
      </Tab.Navigator>
    </>
  );
}
