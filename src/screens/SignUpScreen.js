import React, { useState } from "react";
import { ThemeColorPink } from "../styles/styles";
import {
  View,
  Text,
  TextInput,
  CheckBox,
  ScrollView,
  Image,
} from "react-native";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { styles } from "../styles/styles";
import GradientButton from "../components/GradientButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [selected, setselected] = useState(false);
  const [passwordvisible, setpasswordvisible] = useState(true);
  const BottomIcon = [
    styles.border2grey,
    styles.marginHorizontal,
    styles.flexColumn,
    styles.alignCenter,
    styles.width4,
    styles.border2grey,
    styles.borderRadius_0,
    styles.paddingVerticalSmall,
  ];
  return (
    <SafeAreaView
      style={[
        styles.flexColumn,
        styles.space_between,
        { paddingBottom: 40, backgroundColor: "white", flex: 1 },
      ]}
    >
      <View>
        <View style={[styles.paddingHorizontalLarge2]}>
          <TextInput
            onChangeText={(event) => setusername(event)}
            value={username}
            placeholder="E-mail address"
            style={[styles.textField3]}
            autoCorrect={false}
          />
        </View>
        <View style={styles.paddingHorizontalLarge2}>
          <View style={[styles.textField3, styles.flex, styles.alignCenter]}>
            <TextInput
              placeholder="Password"
              onChangeText={(event) => setpassword(event)}
              value={password}
              autoCorrect={false}
              style={{ flex: 3 / 2 }}
              secureTextEntry={passwordvisible}
            />
            {passwordvisible ? (
              <ButtonFeedBackAndOpacity
                onPress={() => setpasswordvisible(!passwordvisible)}
              >
                <FontAwesome5 name="eye" color="grey" size={17} />
              </ButtonFeedBackAndOpacity>
            ) : (
              <ButtonFeedBackAndOpacity
                onPress={() => setpasswordvisible(!passwordvisible)}
              >
                <FontAwesome5 name="eye-slash" color="grey" size={17} />
              </ButtonFeedBackAndOpacity>
            )}
          </View>
        </View>
        <View style={[styles.marginTop, styles.paddingHorizontalLarge2]}>
          <View style={[styles.flex, styles.flexWrap]}>
            <Text>{"By creating your account, you agree to our "}</Text>
            <ButtonFeedBackAndOpacity
              onPress={() => console.warn("Item Pressed")}
            >
              <Text style={styles.underline}>{"Terms & Conditions"}</Text>
            </ButtonFeedBackAndOpacity>
            <Text>{" and "}</Text>
            <ButtonFeedBackAndOpacity
              onPress={() => console.warn("Item Pressed")}
            >
              <Text style={styles.underline}>{"Privacy Policy"}</Text>
            </ButtonFeedBackAndOpacity>
          </View>
        </View>
        <View style={[styles.marginTop, styles.paddingHorizontalLarge2]}>
          <View
            style={[
              styles.flex,
              styles.flexWrap,
              styles.marginTop,
              styles.alignCenter,
            ]}
          >
            <CheckBox
              value={selected}
              onValueChange={() => setselected(!selected)}
              style={styles.CheckBox}
              tintColors={{ true: ThemeColorPink }}
              tintColor={{ true: ThemeColorPink }}
            />
            <Text> I agree to Xcrino</Text>
          </View>
        </View>
        <View style={[styles.marginTop, styles.paddingHorizontalLarge2]}>
          <GradientButton
            onPress={() => console.warn("Hello")}
            style={styles.paddingVerticalSame}
          >
            <Text
              style={[
                styles.textWhite,
                styles.textCenter,
                styles.boldText,
                styles.bold,
              ]}
            >
              Register
            </Text>
          </GradientButton>
        </View>
      </View>

      <View style={[styles.marginTop3, styles.paddingHorizontalLarge2]}>
        <View style={[styles.flexColumn, styles.alignCenter]}>
          <Text style={styles.textgrey}>Or Join With</Text>
          <View style={[styles.marginTop3, styles.flex]}>
            <ButtonFeedBackAndOpacity onPress={() => console.warn("Pressed")}>
              <View style={BottomIcon}>
                <AntDesign name="facebook-square" color="#1769aa" size={25} />
              </View>
            </ButtonFeedBackAndOpacity>
            <ButtonFeedBackAndOpacity onPress={() => console.warn("Pressed")}>
              <View style={BottomIcon}>
                <Image
                  source={require("../../assets/icons/google.png")}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            </ButtonFeedBackAndOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
