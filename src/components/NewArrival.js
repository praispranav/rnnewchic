import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";
import ButtonFeedBackAndOpacity from "./ButtonFeedBackAndOpacity";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";


function NewArrival(props) {
  // const Text = props.text.split(" ")
  return (
    <ButtonFeedBackAndOpacity onPress={() => console.warn("Pressed")}>
      <View style={styles.newArrival}>
        <View style={[styles.flex, styles.space_between]}>
          <View>
            <Text style={[styles.bold, styles.boldText]}>{props.title}</Text>
            <View style={styles.marginVerticalMedium}>
              {props.text.split(" ").map((t, index) => (
                <Text key={index}>
                  {t}
                </Text>
              ))}
            </View>
          </View>
          <View
            style={[
              styles.bgWhite,
              
            { padding: 5, height: 80 }
            ]}
          >
            <Image source={props.image} style={styles.newArrivalImage} />
            <Text style={[styles.textCenter, styles.textBlack, styles.smalltext]}>
            <MaterialIcons color="black" name="currency-inr" size={13} />
            {props.price}
            </Text>
          </View>
        </View>
      </View>
    </ButtonFeedBackAndOpacity>
  );
}

export default React.memo(NewArrival);
