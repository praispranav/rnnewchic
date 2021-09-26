import React from "react";
import AllOrderScreen from "../screens/AllOrderScreen" 
import UnpaidScreen from "../screens/UnpaidScreen" 
import ProcessingScreen from "../screens/ProcessingScreen" 
import ShippingScreen from "../screens/ShippingScreen" 
import ClosedScreen from "../screens/ClosedScreen" 
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ThemeColorPink } from "../styles/styles";

const Tab = createMaterialTopTabNavigator();

export default function OrdersTab({ navigation }) {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          scrollEnabled: true,
          indicatorStyle: { backgroundColor: "black", opacity: 1 },
          activeTintColor: 'black',
          inactiveTintColor: "grey",
        }}
      >
        <Tab.Screen  name="All" component={AllOrderScreen} />
        <Tab.Screen name="Unpaid" component={UnpaidScreen} />
        <Tab.Screen name="Processing" component={ProcessingScreen} />
        <Tab.Screen name="Shipping" component={ShippingScreen} />
        <Tab.Screen name="Closed" component={ClosedScreen} />
      </Tab.Navigator>
    </>
  );
}