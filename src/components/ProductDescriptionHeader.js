import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import PropTypes from "prop-types"

const {
  paddingVertical,
  text18,
  position_relative,
  bgpink2,
  textWhite,
  flex,
  bold,
  evenly,position_absolute, flexColumn, borderRounded, alignCenter, justifyCenter
} = styles;

const bgBlack = { backgroundColor: "black" }

const RoundedButtonStyle = [
    position_absolute,
    flexColumn,
    justifyCenter,
    borderRounded,
    alignCenter,
    {
      width: 30,
      height: 30,
      backgroundColor: "rgba(0,0,0,0.7)",
      top: 10,
      left: 10,
    },
  ];
  
  const RoundedButtonStyle2 = [
    position_absolute,
    flexColumn,
    justifyCenter,
    borderRounded,
    alignCenter,
    {
      width: 30,
      height: 30,
      backgroundColor: "rgba(0,0,0,0.7)",
      top: 10,
      right: 10,
    },
  ];

function HeaderItems({ discount, above }) {
    return (
      <View style={[flex, alignCenter]}>
        <Text style={[{ fontSize: 17 }, textWhite, bold]}>₹ {discount}</Text>
        <Text style={[textWhite, { marginLeft: 6 }]}>
          {`OFF \nOrder ₹${above} `}{" "}
        </Text>
      </View>
    );
  }

export default function ProductDescriptionHeader({imagedata, headerDiscount}) {
  return (
    <>
      <View style={[bgBlack, paddingVertical, flex, evenly]}>
        {headerDiscount.map((item) => (
          <HeaderItems {...item} />
        ))}
      </View>

      <View style={[position_relative]}>
        <FlatList
          data={imagedata}
          keyExtractor={(item) => item.id}
          horizontal={true}
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={{ width: 200, height: 250, resizeMode: "cover" }}
              {...item}
            />
          )}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={RoundedButtonStyle}
        >
          <Ionicons name="arrow-back" color="white" size={20} />
        </TouchableOpacity>
        <View style={RoundedButtonStyle2}>
          <Feather name="more-horizontal" color="white" size={20} />
        </View>
      </View>

      <View style={[{ padding: 20, paddingVertical: 15 }, bgpink2]}>
        <Text style={[bold, text18, textWhite]}>Flash Deals</Text>
      </View>
    </>
  );
}

ProductDescriptionHeader.propsTypes = {
    imagedata: PropTypes.object.isRequired,
    headerDiscount: PropTypes.object.isRequired
}