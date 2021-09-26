import * as React from "react";
import {
  NavigationContainer,
} from "@react-navigation/native";
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
import HelpCenterTab from "./helpcentertab";
import SearchScreen from "../screens/SearchScreen";
import PointMallScreen from "../screens/PointMallScreen";
import MyCouponsTab from "./couponstab";
import BottomTabNavigator from "./BottomTabNavigator"
import PlaceOrderScreen from "../screens/PlaceOrderScreen"
import FAQScreen from "../screens/FAQScreen"
import ProductDescriptionScreen from "../screens/ProductDescriptionScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen"

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator lazy={true}>
        <Stack.Screen
          options={(event) => ({
            headerShown: false,
          })}
          name="Main"
          component={BottomTabNavigator}
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
          }}
          name="Privacy Policy"
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="FAQ"
          component={FAQScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Place Order"
          component={PlaceOrderScreen}
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
            headerShown: false,
          }}
          name="Product Description"
          component={ProductDescriptionScreen}
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
          component={HelpCenterTab}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerRight: () => (
              <ButtonFeedBackAndOpacity
                onPress={() => console.log("Item Pressed")}
              >
                <View style={{ paddingRight: 25 }}>
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
            headerStyle: {
              elevation: 0,
              shadowColor: "none",
            },
            headerRight: () => (
              <ButtonFeedBackAndOpacity
                onPress={() => console.log("Item Pressed")}
              >
                <View style={{ paddingRight: 25 }}>
                  <Feather name="help-circle" size={20} />
                </View>
              </ButtonFeedBackAndOpacity>
            ),
          }}
          name="My Coupons"
          component={MyCouponsTab}
        />
        <Stack.Screen
          options={(event) => ({
            headerShown: true,
            headerStyle: {
              elevation: 0,
              shadowColor: "none",
            },
            headerRight: (props) => (
              <View
                style={[
                  styles.borderRounded,
                  { overflow: "hidden", marginRight: 20 },
                ]}
              >
                <ButtonFeedBackAndOpacity
                  onPress={() => event.navigation.navigate("Search")}
                >
                  <View style={{ padding: 5 }}>
                    <Icon name="search" size={20} />
                  </View>
                </ButtonFeedBackAndOpacity>
              </View>
            ),
          })}
          name="My Orders"
          component={OrdersTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
