import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";
import ButtonFeedBackAndOpacity from "./ButtonFeedBackAndOpacity";

function CategoryBubble(props) {
  return (
    <View style={[styles.flexColumn, styles.justifyCenter]}>
        <ButtonFeedBackAndOpacity
          onPress={() => console.warn("pressed Category")}
        >
          <View
            style={[styles.category, styles.flexColumn, styles.justifyCenter]}
          >
            <Image source={props.image} style={styles.categoryImage} />
          </View>
        </ButtonFeedBackAndOpacity>
        <Text style={{ marginTop: 5 }}>{props.label}</Text>
    </View>
  );
}

export default React.memo(CategoryBubble);
