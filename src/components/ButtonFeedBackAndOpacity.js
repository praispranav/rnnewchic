import React from "react";
import { TouchableOpacity, TouchableNativeFeedback } from "react-native";
import PropTypes from "prop-types"
import { Platform } from "react-native";
function ButtonFeedBackAndOpacity(props) {
  const Style = props.style;
  const Press = props.onPress;  
  const Children = props.children;
  return (
    <>
      {Platform.OS === "android" && Platform.Version >= 21 ? (
        <TouchableNativeFeedback
          style={Style}
          onPress={(event) => Press(event)}>
              {Children}
          </TouchableNativeFeedback>
      ) : (
        <TouchableOpacity style={Style} onPress={(event)=> Press(event) }>
            {Children}
        </TouchableOpacity>
      )
      }
    </>
  );
}

ButtonFeedBackAndOpacity.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}

export default React.memo(ButtonFeedBackAndOpacity)