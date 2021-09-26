import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { ImageBackground, Text, View, Modal, Image } from "react-native";
import { Dialog } from "react-native-simple-dialogs";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  default as Icon,
  default as MaterialCommunityIcon,
} from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";
import GradientButton from "../components/GradientButton";
import Search from "../components/Search";
import HomeScreen from "../screens/HomeScreen";
import {
  deviceWidth,
  styles,
  ThemeColorPink,
  deviceHeight,
} from "../styles/styles";

const Tab = createMaterialTopTabNavigator();

const marginHorizontal = {
  marginHorizontal: 15,
};

function CustomModal1(props) {
  const BannerStyle = { width: deviceWidth - 88 , height: 150 };
  return (
    <View>
      <Dialog
        dialogStyle={[{ margin: 20, width: deviceWidth - 88, padding: 0, borderRadius: 3, overflow: "hidden" }]}
        contentStyle={{ margin: 0, paddingBottom: 0, paddingTop: 0, paddingHorizontal: 0 }}
        style={{ margin: 100, overflow: "hidden" }}
        visible={props.modalVisible}
      >
        <View>
          <ImageBackground
            source={require("../assets/images/banner.jpg")}
            imageStyle={[BannerStyle]}
            style={[
              BannerStyle,
              styles.flexColumn,
              styles.evenly,
              styles.alignCenter,
            ]}
          >
            <View>
              <Text style={[styles.bold, styles.textCenter]}>Save Shack</Text>
              <Text style={[styles.bold, styles.textCenter]}>Notification</Text>
            </View>
          </ImageBackground>
          <View style={marginHorizontal}>
            <View style={[styles.marginTop, styles.flex]}>
              <MaterialCommunityIcon
                size={20}
                color={ThemeColorPink}
                name="tag-outline"
              />
              <Text style={[styles.textgrey, styles.paddingHorizontal]}>
                You will recieve exclusive Offers.
              </Text>
            </View>
            <View style={[styles.marginTop, styles.flex]}>
              <MaterialCommunityIcon
                size={20}
                color={ThemeColorPink}
                name="truck-outline"
              />
              <Text style={[styles.textgrey, styles.paddingHorizontal]}>
                Real-time order status updates.
              </Text>
            </View>
          </View>

          <GradientButton
            onPress={() => console.warn("Hello")}
            style={[
              marginHorizontal,
              styles.marginTop,
              { borderRadius: 10, paddingVertical: 10 },
            ]}
          >
            <Text
              style={[styles.textCenter, styles.textWhite, { fontSize: 18 }]}
            >
              Allow
            </Text>
          </GradientButton>
          <ButtonFeedBackAndOpacity onPress={() => props.handleClose()}>
            <View style={styles.paddingVerticalSame}>
              <Text style={[styles.textgrey, styles.textCenter]}>
                Do it later
              </Text>
            </View>
          </ButtonFeedBackAndOpacity>
        </View>
      </Dialog>
    </View>
  );
}

export default function HomeScreenCategoryTab() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white", paddingTop: 5 }}>
        <CustomModal1
          handleClose={() => setModalVisible(false)}
          modalVisible={modalVisible}
        />
        <View
          style={[
            styles.flex,
            styles.space_between,
            styles.bgWhite,
            {paddingRight: 10},
            styles.marginTopSmall,
            styles.alignCenter,
          ]}
        >
          <View style={[styles.flex]}>
            <Image source={require('../../assets/icons/logo.png')} style={{ width: 120, height: 30, resizeMode: 'contain' }} />
          </View>
          <View>
            <Search icon={false} />
          </View>
          <View style={[styles.borderRounded, { overflow: "hidden" }]}>
            {/* <ButtonFeedBackAndOpacity onPress={() => console.log("")}>
              <View style={{ padding: 5 }}>
                <Icon name="calendar-check" size={25}></Icon>
              </View>
            </ButtonFeedBackAndOpacity> */}
          </View>
        </View>
      </SafeAreaView>
      <Tab.Navigator
      lazy={true}
        tabBarOptions={{
          indicatorStyle: { backgroundColor: 'black', opacity: 1 },
          activeTintColor: "black",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Men" component={HomeScreen} />
        <Tab.Screen name="Women" component={HomeScreen} />
        <Tab.Screen name="HouseHold" component={HomeScreen} />
      </Tab.Navigator>
    </>
  );
}
