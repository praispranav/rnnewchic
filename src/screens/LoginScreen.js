import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, Image } from "react-native";
import ButtonFeedBackAndOpacity from "../components/ButtonFeedBackAndOpacity";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { styles } from "../styles/styles";
import GradientButton from "../components/GradientButton";
import { useSelector, useDispatch, } from "react-redux"
import { loginUser } from "../actionCreator"
import Loading from "../components/loading"

export default function Login({ navigation }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
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
  const dispatch = useDispatch()
  const state = useSelector(s=> s.entities.user)

  const loginFunc = () =>{
    dispatch(loginUser({url: '/user/login', username: username, password: password}))
  }
  if(state.loading) return <Loading />
  return (
    <SafeAreaView style={[styles.flexColumn, styles.space_between,{ paddingBottom: 40, backgroundColor: "white", flex: 1,  }]}>
      <View>
      <View style={styles.paddingHorizontalLarge2}>
        <TextInput
          onChangeText={setusername}
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
            onChangeText={setpassword}
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
        <GradientButton handlePress={loginFunc}  style={{ paddingVertical: 15 }}>
          <Text
            style={[
              styles.textWhite,
              styles.textCenter,
              styles.boldText,
              styles.bold,
            ]}
          >
            {'SIGN IN'}
          </Text>
        </GradientButton>
      </View>
      <View
        style={[
          styles.flex,
          styles.justifyend,
          styles.paddingHorizontalLarge2,
          styles.marginTop,
        ]}
      >
        <ButtonFeedBackAndOpacity
          onPress={() => navigation.navigate("Forget Password")}
        >
          <Text>Forget Password ?</Text>
        </ButtonFeedBackAndOpacity>
      </View>
      </View>
      <View style={styles.marginTop3}></View>
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
                <Image source={require('../../assets/icons/google.png')}  style={{ width: 25, height: 25 }}/>
              </View>
            </ButtonFeedBackAndOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
