import React from "react";
import AccountScreen from "../screens/AccountScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen";
import CustomerServiceScreen from "../screens/CustomerServiceScreen";
import RegisterLoginForgetTab from "./loginsignuptab";
import OrdersTab from "./orderstab";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";
import Icon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { styles } from "../styles/styles";
import { View } from "react-native";
import HelpAndSettingScreen from "../screens/HelpAndSettingScreen";
import SearchScreen from "../screens/SearchScreen";
import HelpCenterScreen from "../screens/HelpCenterScreen";
import PointMallScreen from "../screens/PointMallScreen";
import MyCoupons from "../screens/MyCouponsScreen";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Account"
        component={AccountScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Search"
        component={SearchScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            elevation: 0,
            shadowColor: "none",
          },
        }}
        name="Xcrino"
        component={RegisterLoginForgetTab}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="Forget Password"
        component={ForgetPasswordScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name={`Help & Setting`}
        component={HelpAndSettingScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="Customer Service"
        component={CustomerServiceScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="Help Center"
        component={HelpCenterScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerRight: () => (
            <ButtonFeedBackAndOpacity
              onPress={() => console.log("Item Pressed")}
            >
              <View style={styles.paddingHorizontal}>
                <Feather name="help-circle" size={20} />
              </View>
            </ButtonFeedBackAndOpacity>
          ),
        }}
        name="Point Mall"
        component={PointMallScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerRight: () => (
            <ButtonFeedBackAndOpacity
              onPress={() => console.log("Item Pressed")}
            >
              <View style={styles.paddingHorizontal}>
                <Feather name="help-circle" size={20} />
              </View>
            </ButtonFeedBackAndOpacity>
          ),
        }}
        name="My Coupons"
        component={MyCoupons}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            elevation: 0,
            shadowColor: "none",
          },
          headerRight: () => (
            <ButtonFeedBackAndOpacity
              onPress={() => console.log("Item Pressed")}
            >
              <View style={styles.paddingHorizontal}>
                <Icon name="search" size={20} />
              </View>
            </ButtonFeedBackAndOpacity>
          ),
        }}
        name="My Orders"
        component={OrdersTab}
      />
    </Stack.Navigator>
  );
}
