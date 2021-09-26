import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  styles,
  ThemeColorPink,
  deviceWidth,
  Heightonepercent,
  deviceHeight,
} from "../styles/styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  ShippingIcon,
  UnpaidIcon,
  ProcessingIcon,
  AddressBookIcon,
  RecentlyViewedIcon,
  MyQuestionsIcon,
  HelpCenterIcon,
} from "../svgicon/accounticons";
import { SvgXml } from "react-native-svg";
import { RFValue } from "react-native-responsive-fontsize";

function ServiceButton({ label, image, navigate }) {
  const IconWidthHeightSmall =
    deviceHeight <= 680 ? 20 : Heightonepercent * 3.4;
  const Width = (deviceWidth - 100) / 4;
  return (
    <ButtonFeedBackAndOpacity onPress={() => navigate()}>
      <View style={[styles.flexColumn, styles.alignCenter, styles.marginTop]}>
        <SvgXml
          xml={image}
          width={IconWidthHeightSmall}
          height={IconWidthHeightSmall}
        />
        <Text
          style={[
            styles.marginTopSmall,
            { fontSize: RFValue(13), width: Width },
            styles.textCenter,
            styles.flexColumn,
            styles.flexWrap,
          ]}
        >
          {label}
        </Text>
      </View>
    </ButtonFeedBackAndOpacity>
  );
}

export default function AccountScreen({ navigation }) {
  const IconWidthHeight = deviceHeight <= 680 ? 20 : Heightonepercent * 4;
  const BoldText = [
    styles.textCenter,
    styles.textWhite,
    styles.bold,
    { fontSize: RFValue(14) },
  ];
  const IconTextView = [
    styles.flexColumn,
    styles.alignCenter,
    { paddingVertical: Heightonepercent * 2, paddingHorizontal: 10 },
  ];
  const SmallText = [styles.marginTopSmall, { fontSize: RFValue(13) }];
  return (
    <SafeAreaView>
      {console.warn(deviceHeight)}
      <View style={{ height: Heightonepercent * 100, overflow: "hidden" }}>
        <ImageBackground
          source={require("../../assets/background/account_bg.png")}
          imageStyle={{
            height: Heightonepercent * 50,
            borderBottomRightRadius: 25,
            borderBottomLeftRadius: 25,
          }}
          style={{ width: deviceWidth }}
        >
          <View
            style={[
              { paddingTop: Heightonepercent * 3 },
              styles.accountTop,
              styles.paddingHorizontal,
            ]}
          >
            <View style={[styles.flex, styles.space_between]}>
              <View></View>
              <TouchableOpacity
                onPress={() => navigation.navigate(`Help & Setting`)}
              >
                <AntDesign name="setting" color="#fce4ec" size={22} />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: Heightonepercent * 9 }}>
              <View style={[styles.flexColumn, styles.alignCenter]}>
                <View style={[styles.profileImage, styles.marginBottomSmall]}>
                  <Icon
                    name="account-circle"
                    size={Heightonepercent * 8}
                    color="white"
                    style={{ margin: 0 }}
                  />
                </View>

                <ButtonFeedBackAndOpacity
                  style={""}
                  onPress={() => navigation.navigate("Xcrino")}
                >
                  <Text
                    style={[
                      styles.textWhite,
                      styles.bold,
                      styles.marginBottomSmall,
                      { fontSize: RFValue(13.5) },
                    ]}
                  >
                    Sign In / Sign Up
                  </Text>
                </ButtonFeedBackAndOpacity>
                <ButtonFeedBackAndOpacity
                  style={[]}
                  onPress={() => console.log("")}
                >
                  <Text
                    style={[
                      styles.paddingHorizontal,
                      styles.paddingVerticalSmall,
                      styles.bgWhite,
                      styles.borderRounded,
                      styles.pink,
                      { fontSize: RFValue(13) },
                    ]}
                  >
                    {" "}
                    20 % OFF For New Users{" "}
                    <AntDesign name="right" size={12} color={ThemeColorPink} />
                  </Text>
                </ButtonFeedBackAndOpacity>
                <View
                  style={[
                    styles.flex,
                    styles.evenly,
                    styles.fullWidth,
                    { marginTop: Heightonepercent * 2 },
                  ]}
                >
                  <ButtonFeedBackAndOpacity
                    onPress={() => navigation.navigate("My Coupons")}
                  >
                    <View style={[{ flex: 1 / 3 }, styles.paddingTop]}>
                      <Text style={BoldText}>0</Text>
                      <Text style={BoldText}>Coupons</Text>
                    </View>
                  </ButtonFeedBackAndOpacity>
                  <View style={styles.border}></View>
                  <ButtonFeedBackAndOpacity
                    onPress={() => navigation.navigate("Point Mall")}
                  >
                    <View style={[{ flex: 1 / 3 }, styles.paddingTop]}>
                      <Text style={BoldText}>0</Text>
                      <Text style={BoldText}>Points</Text>
                    </View>
                  </ButtonFeedBackAndOpacity>
                  <View style={styles.border}></View>
                  <ButtonFeedBackAndOpacity onPress={() => console.warn("")}>
                    <View style={[{ flex: 1 / 3 }, styles.paddingTop]}>
                      <Text style={BoldText}>0</Text>
                      <Text style={BoldText}>Wishlist</Text>
                    </View>
                  </ButtonFeedBackAndOpacity>
                </View>
              </View>
              <View
                style={[
                  {
                    marginTop:
                      deviceHeight <= 680
                        ? Heightonepercent * 2
                        : Heightonepercent * 2,
                    paddingTop: Heightonepercent * 2,
                  },
                  styles.paddingHorizontal,
                  { marginHorizontal: 10 },
                  styles.bgWhite,
                ]}
              >
                <View style={[styles.paddingHorizontal]}>
                  <View style={[styles.flex, styles.space_between]}>
                    <Text style={[styles.bold, { fontSize: RFValue(14) }]}>
                      My Orders
                    </Text>
                    <ButtonFeedBackAndOpacity
                      style={styles.paddingHorizontal}
                      onPress={() => navigation.navigate("My Orders")}
                    >
                      <View style={[styles.flex, styles.alignCenter]}>
                        <Text
                          style={[styles.textgrey, { fontSize: RFValue(12) }]}
                        >
                          View All
                        </Text>
                        <View style={styles.paddingHorizontalSmall}>
                          <AntDesign name="right" color={"grey"} size={8} />
                        </View>
                      </View>
                    </ButtonFeedBackAndOpacity>
                  </View>
                  <View
                    style={[
                      styles.space_between,
                      styles.flex,
                      { paddingVertical: 8}
                    ]}
                  >
                    <ButtonFeedBackAndOpacity
                      onPress={() =>
                        navigation.navigate("My Orders", { screen: "Unpaid" })
                      }
                    >
                      <View style={IconTextView}>
                        <SvgXml
                          xml={UnpaidIcon}
                          width={IconWidthHeight}
                          height={IconWidthHeight}
                        />
                        <Text style={SmallText}>Unpaid</Text>
                      </View>
                    </ButtonFeedBackAndOpacity>
                    <ButtonFeedBackAndOpacity
                      onPress={() =>
                        navigation.navigate("My Orders", {
                          screen: "Processing",
                        })
                      }
                    >
                      <View style={IconTextView}>
                        <SvgXml
                          xml={ProcessingIcon}
                          width={IconWidthHeight}
                          height={IconWidthHeight}
                        />
                        <Text style={SmallText}>Processing</Text>
                      </View>
                    </ButtonFeedBackAndOpacity>
                    <ButtonFeedBackAndOpacity
                      onPress={() =>
                        navigation.navigate("My Orders", { screen: "Shipping" })
                      }
                    >
                      <View style={IconTextView}>
                        <SvgXml
                          xml={ShippingIcon}
                          width={IconWidthHeight}
                          height={IconWidthHeight}
                        />
                        <Text style={SmallText}>Shipping</Text>
                      </View>
                    </ButtonFeedBackAndOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={[styles.paddingHorizontal]}>
          <View
            style={[
              styles.bgWhite,
              { paddingHorizontal: 20 },
              {
                paddingTop: Heightonepercent * 2,
                marginVertical: Heightonepercent * 2.5,
                paddingBottom: deviceHeight <= 680 ? 0 : Heightonepercent * 2.3,
              },
            ]}
          >
            <Text style={[styles.bold, { fontSize: RFValue(14) }]}>
              Services
            </Text>

            <View
              style={[
                styles.flex,
                styles.space_between,
                {
                  marginBottom: 0,
                },
              ]}
            >
              <ServiceButton
                label="Address Book"
                navigate={() => console.warn("Hello")}
                image={AddressBookIcon}
              />
              <ServiceButton
                label="Recently Viewed"
                navigate={() => console.warn("Hello")}
                image={RecentlyViewedIcon}
              />
              <ServiceButton
                label="My Questions"
                navigate={() => console.warn("Hello")}
                image={MyQuestionsIcon}
              />
              <ServiceButton
                label="Help Center"
                navigate={() => navigation.navigate("Help Center")}
                image={HelpCenterIcon}
              />
            </View>
            <View style={[styles.flex, styles.space_between]}>
              <ButtonFeedBackAndOpacity
                onPress={() => navigation.navigate("Customer Service")}
              >
                <View
                  style={[
                    styles.flexColumn,
                    styles.alignCenter,
                    {
                      padding: 5,
                      flex: 1 / 5,
                      marginTop:
                        deviceHeight <= 680 ? 0 : Heightonepercent * 2.6,
                    },
                  ]}
                >
                  <Ionicons name="mail-open" size={25} color="grey" />
                  <Text
                    style={[
                      styles.marginTopSmall,
                      styles.textCenter,
                      { fontSize: RFValue(13) },
                    ]}
                  >
                    Contact Us
                  </Text>
                </View>
              </ButtonFeedBackAndOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
