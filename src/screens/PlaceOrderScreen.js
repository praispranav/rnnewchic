import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles, ThemeColorPink } from "../styles/styles";
import Divider from "../components/Divider";
import Button from "../components/ButtonFeedBackAndOpacity";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import GradientButton from "../components/GradientButton";

const {
  flex1,
  bgWhite,
  paddingVertical,
  paddingHorizontal,
  text18,
  marginTop,
  paddingVerticalSame,
  position_relative,
  border,
  position_absolute,
  marginLeft,
  justifyCenter,
  flexColumn,
  marginRight,
  bgpink2,
  borderRounded,
  alignCenter,
  textWhite,
  paddingHorizontalSmall,
  paddingHorizontal25,
  flex,
  bold,
  space_between,
  boldText,
  textgrey,
  flexWrap,
  evenly,
  paddingVerticalSmall,
} = styles;

const Radio = ({selected}) => (
  <View
    style={[
      {
        width: 18,
        overflow: "hidden",
        borderRadius: 100,
        height: 18,
        borderWidth: 1,
        borderColor: "grey",
        padding: 2,
      },
      flexColumn,
      alignCenter,
      justifyCenter,
    ]}
  >
    {selected && (
      <View
        style={{
          width: 9,
          height: 9,
          borderRadius: 100,
          backgroundColor: selected ? ThemeColorPink : "white",
        }}
      ></View>
    )}
  </View>
);
function RadioButton({ price, label, selected, right, handlePress }) {

  function Item() {
    return (
      <View style={[flex, { paddingVertical: 8 }, space_between, alignCenter]}>
        <View style={[flex, alignCenter]}>
          <Radio selected={selected} />
          <Text style={marginLeft}>{label}</Text>
        </View>
        <View style={[flex, alignCenter]}>
          <Text style={[bold]}>{price > 0 ? "- ₹ " + price : null}</Text>
          {right ? right : null}
        </View>
      </View>
    );
  }
  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <Item />
      </TouchableOpacity>
    </>
  );
}

const INITIAL_RADIO_STATE = {
  point: false,
  coupon: false,
  none: false,
};

const INITIAL_PAYMENT_STATE = {
  paypal: false
}

const DIVIDER_COLOR = "rgb(230,230,230)";

export default function PlaceOrderScreen({ route, navigation }) {
  const [radioState, setRadioState] = useState(INITIAL_RADIO_STATE);
  const [paymentState, setPaymentState] = useState(INITIAL_PAYMENT_STATE)

  const subTotal = "2000.00";
  const couponDiscount = "250.00";
  const total = Number(subTotal) - Number(couponDiscount);
  return (
    <View style={[flexColumn, flex1, bgWhite, space_between]}>
      <ScrollView style={[flex1, bgWhite]}>
        <Divider />
        <Button onPress={() => console.warn("Item Pressed")}>
          <View
            style={[
              paddingHorizontal25,
              flex,
              space_between,
              alignCenter,
              paddingVerticalSame,
            ]}
          >
            <View style={[flex, alignCenter]}>
              <Entypo name="location" size={22} color="black" />
              <Text style={marginLeft}>Please fill in Shipping Address</Text>
            </View>
            <AntDesign name="right" size={18} color="grey" />
          </View>
        </Button>

        <Divider height={4} color={"rgb(230,230,230)"} />
        <View style={[paddingHorizontal25, paddingVerticalSame]}>
          <Text style={[bold, boldText]}>Shipping Method</Text>
          <Text style={[{ color: ThemeColorPink }, marginTop]}>
            No shipping methods currently available
          </Text>
        </View>

        <Divider color={DIVIDER_COLOR} height={4} />

        <View style={[paddingHorizontal25, paddingVerticalSame]}>
          <Text style={[bold, boldText]}>Discount</Text>
          <RadioButton
            selected={radioState.point}
            handlePress={() =>
              setRadioState({ ...INITIAL_RADIO_STATE, point: true })
            }
            right={false}
            label={"Point(Available 20)"}
            price={25}
          />
          <RadioButton
            selected={radioState.coupon}
            handlePress={() =>
              setRadioState({ ...INITIAL_RADIO_STATE, coupon: true })
            }
            label={"Coupon"}
            right={
              <AntDesign
                name="right"
                size={14}
                style={marginLeft}
                color="grey"
              />
            }
            price={2500}
          />
          <RadioButton
            selected={radioState.none}
            handlePress={() =>
              setRadioState({ ...INITIAL_RADIO_STATE, none: true })
            }
            label={"Do not use any discount"}
            price={0}
          />
        </View>

        <Divider height={4} color={DIVIDER_COLOR} />

        <View>
          <Text style={[paddingHorizontal25, bold, boldText, paddingVertical]}>
            Shopping Bag
          </Text>
          <Divider color={DIVIDER_COLOR} />
          <View
            style={[paddingHorizontal25, paddingVertical, flex, alignCenter]}
          >
            <View style={[flex]}>
              <Image
                source={require("../../assets/images/img2.jpg")}
                style={{ width: 80, height: 100, marginRight: 8 }}
              />
              <Image
                source={require("../../assets/images/img1.jpg")}
                style={{ width: 80, height: 100 }}
              />
            </View>
            <View sytle={[flex, alignCenter]}>
              <Text style={textgrey}>4 items </Text>
              <AntDesign
                name="right"
                size={13}
                style={marginLeft}
                color="grey"
              />
            </View>
          </View>
        </View>

        <Divider height={4} color={DIVIDER_COLOR} />

        <View style={[paddingHorizontal25, paddingVertical]}>
          <Text style={[bold, boldText]}>Payment Method</Text>
        <Divider height={2} color={DIVIDER_COLOR} marginTop={true} />
            <TouchableOpacity onPress={()=> setPaymentState({...INITIAL_PAYMENT_STATE, paypal: true})} style={[flex, alignCenter, { marginTop: 8 }]}>
              <Radio selected={paymentState.paypal} />
              <Image source={require('../../assets/icons/paypal.png')} style={{ width:100, height: 40, resizeMode:"contain", marginLeft: 10  }} />
            </TouchableOpacity>
        </View>

        <Divider height={4} color={DIVIDER_COLOR} />

        <View>
          <Text style={[bold, boldText, paddingHorizontal25, paddingVertical]}>
            Order Total
          </Text>
          <Divider height={2} color={DIVIDER_COLOR} />
          <View
            style={[
              flex,
              alignCenter,
              space_between,
              paddingHorizontal25,
              paddingVertical,
            ]}
          >
            <Text style={boldText}>SubTotal</Text>
            <Text style={[bold, boldText]}>₹ {subTotal}</Text>
          </View>
          <View style={[flex, alignCenter, space_between, paddingHorizontal25]}>
            <Text style={boldText}>Coupon Discount</Text>
            <Text style={[bold, boldText]}> - ₹ {couponDiscount}</Text>
          </View>
          <Divider height={2} color={DIVIDER_COLOR} marginTop={true} />
          <View
            style={[
              flex,
              alignCenter,
              space_between,
              paddingHorizontal25,
              paddingVerticalSame,
            ]}
          >
            <Text style={boldText}>Grand Total</Text>
            <Text style={[bold, boldText]}>₹ {total}</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          paddingHorizontal25,
          paddingVerticalSame,
          { borderWidth: 1, borderColor: "lightgrey" },
          flex,
          alignCenter,
          space_between,
        ]}
      >
        <View>
          <Text>Total</Text>
          <Text style={[bold, boldText, styles.textTheme]}>₹ {total}</Text>
        </View>
        <GradientButton
          handlePress={() => navigation.navigate("Place Order")}
          style={[
            { paddingHorizontal: 22, paddingVertical: 10 },
            styles.marginLeft,
          ]}
        >
          <Text style={[styles.textWhite, styles.bold, styles.boldText]}>
            Place Order
          </Text>
        </GradientButton>
      </View>
    </View>
  );
}
