import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";

const paddingHorizontal = { paddingHorizontal: 20 }
function ItemType1(props) {
  return (
    <View
      style={[styles.bgWhite, paddingHorizontal, styles.paddingVertical]}
    >
      <View style={[styles.flex, styles.space_between, styles.alignCenter]}>
        <Text style={[styles.boldText]}>{props.title}</Text>
        <Text style={styles.textgrey}>{props.subtitle}</Text>
      </View>
    </View>
  );
}

function ItemType2(props) {
  return (
    <ButtonFeedBackAndOpacity onPress={()=> props.navigation ? props.navigation.navigate(props.link) : console.warn("Item Pressed", props.title)}>
      <View
        style={[
          styles.bgWhite,
          paddingHorizontal,
          styles.paddingVertical,
        ]}
      >
        <View style={[styles.flex, styles.space_between, styles.alignCenter]}>
          <Text style={[styles.boldText]}>{props.title}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={15} />
        </View>
      </View>
    </ButtonFeedBackAndOpacity>
  );
}

export default function HelpAndSettingScreen({route, navigation}) {
  return (
    <View style={[styles.flexColumn, styles.alignCenter, styles.space_between, styles.flex1]}>
      <View style={styles.fullWidth}>
        <ItemType1 title="Ship to" subtitle="India" />
        <ItemType1 title="Language" subtitle="English" />
        <ItemType1 title="Currency" subtitle={"INR"} />
        {/* <View style={styles.marginTop}></View> */}

        <View style={styles.marginVertical}>
            <ItemType2 title="Notification" />
        </View>
            <ItemType2 title="Shipping Method" />
            <ItemType2 title="Payment Method" />
            <ItemType2 title="Return Policy" />
            <ItemType2 title="Privacy Policy" link={"Privacy Policy"} navigation={navigation} />
            <ItemType2 title="FAQ" navigation={navigation} link="FAQ" />
            {/* <ItemType2 title="Notification" /> */}
            {/* <ItemType2 title="Notification" /> */}
      </View>
      <View style={[styles.paddingVertical, styles.marginBottom]}>
            <Text style={[styles.boldText, styles.textCenter]}>Xcrino for Android</Text>
            <Text style={styles.textgrey}>Copyright @ 2021. All Right Reserved</Text>
      </View>
    </View>
  );
}
