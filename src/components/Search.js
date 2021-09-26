import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity"

function Search(props) {
  return (
    <ButtonFeedBackAndOpacity>
      <View
        style={[
          styles.bgGrey,
          styles.borderRounded,
          styles.searchButton,
          styles.flex,
          styles.alignCenter,
          styles.space_between,
          props.style ? props.style : null,
        ]}
      >
        <View style={[styles.flex, styles.alignCenter]}>
          <Icon name="search" color={"#757575"} size={20} />
          <TextInput
            placeholder={props.placeholder ? props.placeholder : "Search Products"}
            style={props.fullview ? styles.textField2 : styles.textField}
          />
        </View>
        {
          props.icon === undefined ?(
            <Feather name="camera" color={"#757575"} size={20} /> 
          ): null
        }
        
      </View>
    </ButtonFeedBackAndOpacity>
  );
}

export default React.memo(Search);
