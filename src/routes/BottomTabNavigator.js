import * as React from "react";
import {
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Hometab";
import AntDesign from "react-native-vector-icons/AntDesign";
import BrandScreen from "../screens/BrandScreen";
import CategoryScreen from "./categorytabs";
import BagsScreen from "../screens/Bags";
import { ThemeColorPink } from "../styles/styles";
import AccountScreen from "../screens/AccountScreen";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";
import { styles } from "../styles/styles";
import { View } from "react-native";
import {
  HomeIcon,
  HomeActiveIcon,
  CategoryIcon,
  CategoryActiveIcon,
  BrandActiveIcon,
  BrandIcon,
  BagIcon,
  BagActiveIcon,
  AccountActiveIcon,
  AccountIcon,
} from "../svgicon/bottomtabicons";
import { SvgXml } from "react-native-svg";

const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

  const notHeader = { headerShown: false, title: "" };
  switch (routeName) {
    case "Category":
      return notHeader;
    case "Home":
      return notHeader;
    case "Brand":
      const Brand = {
        headerShown: true,
        title: "Brand",
        search: <AntDesign name="search1" size={18} />,
        heart: <AntDesign name="hearto" size={18} />,
      };
      return Brand;
    case "Bag":
      const Bags = {
        headerShown: true,
        title: "Shopping Bag",
        heart: <AntDesign name="hearto" size={18} />,
      };
      return Bags;
    case "Account":
      return notHeader;
  }
}

export default function BottomTabNavigator({ navigation, route }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: getHeaderTitle(route).headerShown,
      headerTitle: getHeaderTitle(route).title,
      headerRight: () => (
        <View style={[styles.flex, { marginRight: 15 }]}>
          <View style={[styles.borderRounded, { overflow: "hidden" }]}>
            <ButtonFeedBackAndOpacity onPress={() => console.log("")}>
              <View style={{ padding: 5 }}>{getHeaderTitle(route).heart}</View>
            </ButtonFeedBackAndOpacity>
          </View>
          <View style={[styles.borderRounded, { overflow: "hidden" }]}>
            <ButtonFeedBackAndOpacity
              onPress={() => navigation.navigate("Search")}
            >
              <View style={{ padding: 5 }}>{getHeaderTitle(route).search}</View>
            </ButtonFeedBackAndOpacity>
          </View>
        </View>
      ),
    });
  }, [navigation, route]);
  return (
    <Tab.Navigator
      lazy={true}
      tabBarOptions={{
        activeTintColor: ThemeColorPink,
        safeAreaInsets: { bottom: 7 },
        inactiveTintColor: "gray",
        labelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          activeTintColor: ThemeColorPink,
          tabBarIcon: ({ color, size }) => (
            <View>
              {color === ThemeColorPink ? (
                <SvgXml xml={HomeActiveIcon} width="20" height="20" />
              ) : (
                <SvgXml xml={HomeIcon} width="20" height="20" />
              )}
            </View>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Category"
        options={{
          tabBarLabel: "Category",
          activeTintColor: ThemeColorPink,
          tabBarIcon: ({ color, size }) => (
            <View>
              {color === ThemeColorPink ? (
                <SvgXml xml={CategoryActiveIcon} width="20" height="20" />
              ) : (
                <SvgXml xml={CategoryIcon} width="20" height="20" />
              )}
            </View>
          ),
        }}
        component={CategoryScreen}
      />
      <Tab.Screen
        name="Brand"
        options={{
          tabBarLabel: "Brand",
          activeTintColor: ThemeColorPink,
          tabBarIcon: ({ color, size }) => (
            <View>
              {color === ThemeColorPink ? (
                <SvgXml xml={BrandActiveIcon} width="20" height="20" />
              ) : (
                <SvgXml xml={BrandIcon} width="20" height="20" />
              )}
            </View>
          ),
        }}
        component={BrandScreen}
      />

      <Tab.Screen
        name="Bag"
        options={{
          tabBarLabel: "Bag",
          activeTintColor: ThemeColorPink,
          tabBarIcon: ({ color, size }) => (
            <View style={{ paddingHorizontal: 10 }}>
              {color === ThemeColorPink ? (
                <SvgXml xml={BagActiveIcon} width="20" height="20" />
              ) : (
                <SvgXml xml={BagIcon} width="20" height="20" />
              )}
            </View>
          ),
        }}
        component={BagsScreen}
      />
      <Tab.Screen
        name="Account"
        options={(event) => ({
          tabBarLabel: "Account",
          activeTintColor: ThemeColorPink,
          tabBarIcon: ({ color, size }) => (
            <>
              {color === ThemeColorPink ? (
                <SvgXml xml={AccountActiveIcon} width="20" height="20" />
              ) : (
                <SvgXml xml={AccountIcon} width="20" height="20" />
              )}
            </>
          ),
        })}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
}
