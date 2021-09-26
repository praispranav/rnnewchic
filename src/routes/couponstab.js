import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react"
import { Text, View } from "react-native";
import CouponsScreen from "../screens/MyCouponsScreen"
import { ThemeColorPink } from '../styles/styles';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      indicatorStyle: { backgroundColor: ThemeColorPink, opacity: 1 },
      activeTintColor: ThemeColorPink,
      inactiveTintColor: "grey",
    }}>
      <Tab.Screen name="Unused" component={CouponsScreen} />
      <Tab.Screen name="Expired" component={CouponsScreen} />
      <Tab.Screen name="Used" component={CouponsScreen} />
    </Tab.Navigator>
  );
}