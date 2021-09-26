import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/styles";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

export default function CustomerServiceScreen() {
  const ParentClass = [
    styles.paddingTop,
    styles.flex,
    styles.paddingHorizontalSmall,
  ];
  const FontHeading = [ { fontSize: 18, }]
  const ChildClass = [
    styles.flex,
    styles.space_between,
    styles.customerService,
    styles.flex1,
    { paddingVertical: 20},
  ];
  return (
    <ScrollView style={[styles.bgWhite, styles.flex1]}>
      <View style={{ backgroundColor: "white" }}>
        <ButtonFeedBackAndOpacity onPress={() => console.warn("Pressed")}>
          <View style={ParentClass}>
            <View style={[{ paddingHorizontal: 20 }, {paddingTop: 20}]}>
              <Icon name="headphones" size={25} />
            </View>
            <View style={ChildClass}>
              <View>
                <Text style={FontHeading}>Live Chat</Text>
                <Text style={[styles.textgrey, styles.paddingTop]}>
                  Faster service we are available 24/7
                </Text>
              </View>
              <View style={[ styles.paddingHorizontal]}>
                <Icon name="chevron-right" size={20} />
              </View>
            </View>
          </View>
        </ButtonFeedBackAndOpacity>
        <ButtonFeedBackAndOpacity onPress={() => console.warn("Pressed")}>
          <View style={ParentClass}>
            <View style={[{ paddingHorizontal: 20 }, {paddingTop: 20}]}>
              <MaterialIcons name="call" size={25} />
            </View>
            <View style={ChildClass}>
              <View>
                <Text style={FontHeading}>Call Us</Text>
                <Text style={[styles.textgrey, styles.paddingTop]}>
                  +435362737812738
                </Text>
                <Text style={styles.textgrey}>Office time: Mon - Sat</Text>
                <Text style={styles.textgrey}>UTC-6 1:00 AM - 6:00 PM</Text>
              </View>
              <View style={[styles.paddingHorizontal]}>
                <Icon name="chevron-right" size={20} />
              </View>
            </View>
          </View>
        </ButtonFeedBackAndOpacity>
        <ButtonFeedBackAndOpacity onPress={() => console.warn("Pressed")}>
          <View style={ParentClass}>
            <View style={[{ paddingHorizontal: 20 }, {paddingTop: 20}]}>
              <Icon name="message-text" size={25} />
            </View>
            <View style={ChildClass}>
              <View>
                <Text style={FontHeading}>Facebook Messenger</Text>
                <Text style={[styles.textgrey, styles.paddingTop]}>
                  {"FAQ & Get immediate response 24/7"}
                </Text>
              </View>
              <View style={[styles.paddingHorizontal]}>
                <Icon name="chevron-right" size={20} />
              </View>
            </View>
          </View>
        </ButtonFeedBackAndOpacity>
        <ButtonFeedBackAndOpacity onPress={() => console.warn("Pressed")}>
          <View style={ParentClass}>
            <View style={[{ paddingHorizontal: 20, paddingTop: 20 }]}>
              <Entypo name="mail" size={25} />
            </View>
            <View style={ChildClass}>
              <View>
                <Text style={FontHeading}>Submit a Message</Text>
              </View>
              <View style={styles.paddingHorizontal}>
                <Icon name="chevron-right" size={20} />
              </View>
            </View>
          </View>
        </ButtonFeedBackAndOpacity>
      </View>
    </ScrollView>
  );
}
