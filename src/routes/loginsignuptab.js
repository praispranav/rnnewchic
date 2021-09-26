import React from "react";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function RegisterLoginForgetTab({ navigation }) {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: { backgroundColor: "black", opacity: 1 },
          activeTintColor: "black",
          inactiveTintColor: "grey",
        }}
      >
        <Tab.Screen name="Register" component={SignUpScreen} />
        <Tab.Screen name="Sign in" component={LoginScreen} />
      </Tab.Navigator>
    </>
  );
}