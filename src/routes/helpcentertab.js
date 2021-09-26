import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HelpCenterScreen from "../screens/HelpCenterScreen";
import { styles, ThemeColorPink } from "../styles/styles";
import { View, Image } from "react-native"

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    const IconWidthHeight = { width: 20, height: 20 }
  return (
    <Tab.Navigator tabBarOptions={{ safeAreaInsets: {bottom: 10 , top: 10},         labelStyle: { fontSize: 14 } }}>
      <Tab.Screen
        name="Contact Us"
        options={{
          tabBarLabel: "Contact Us",
          activeTintColor: ThemeColorPink,
          tabBarIcon: ({ color, size }) => (
            <View>
                <Image
                  source={require("../../assets/icons/contact.png")}
                  style={IconWidthHeight}
                />
            </View>
          ),
        }}
        component={HelpCenterScreen}
      />
      <Tab.Screen
        name="Live Chat"
        options={{
          tabBarLabel: "Live Chat",
          activeTintColor: ThemeColorPink,
          tabBarIcon: ({ color, size }) => (
            <View>
              
                <Image
                  source={require("../../assets/icons/headset_livechat.png")}
                  style={IconWidthHeight}
                />
            </View>
          ),
        }}
        component={HelpCenterScreen}
      />
    </Tab.Navigator>
  );
}
