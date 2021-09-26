import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";

const Items = [
  {
    id: 1,
    label: "mushroom",
  },
  {
    id: 2,
    label: "jeans",
  },
  {
    id: 3,
    label: "skirt",
  },
  {
    id: 5,
    label: "shirt",
  },
  {
    id: 6,
    label: "shoes",
  },
  {
    id: 7,
    label: "boots",
  },
  {
    id: 8,
    label: "puma",
  },
];

export default function SearchScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={[
          styles.borderBottomSmall2,
          styles.flex,
          styles.paddingHorizontal,
          styles.paddingVertical,
          styles.alignCenter,
        ]}
      >
        <ButtonFeedBackAndOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={20} />
        </ButtonFeedBackAndOpacity>
        <TextInput
          style={{ flex: 3 / 2, marginHorizontal: 15 }}
          placeholder="Search"
        />

        <Ionicons name="camera-outline" size={20} />
      </View>
      <View style={[styles.paddingHorizontal, styles.paddingVertical]}>
        <Text style={[styles.boldText, styles.bold]}>Hot Search</Text>
        <View style={[styles.flex, styles.flexWrap, styles.marginTop]}>
          {Items.map((item) => (
            <ButtonFeedBackAndOpacity
            key={item.id}
              onPress={() => console.warn("Pressed", item.label)}
            >
              <View style={[
                  styles.bgGrey,
                  styles.paddingHorizontal,
                  styles.paddingVerticalSmall,
                  styles.margin,
                  { borderBottomWidth: 0.3, borderBottomColor: "grey" }
                ]}>

              <Text
                >
                {item.label}
              </Text>
                </View>
            </ButtonFeedBackAndOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
