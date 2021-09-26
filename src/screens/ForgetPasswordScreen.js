import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/styles";
import GradientButton from "../components/GradientButton";

export default function ForgetPasswordScreen() {
  const [username, setusername] = useState("");
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.paddingHorizontalLarge2}>
        <Text>Enter Your email address</Text>
      </View>
      <View style={styles.paddingHorizontalLarge2}>
        <TextInput
          onChangeText={(event) => setusername(event)}
          value={username}
          placeholder="E-mail address"
          style={[styles.textField3]}
          autoCorrect={false}
        />
      </View>
      <View style={styles.paddingHorizontalLarge2}>
        <View style={[styles.textField3, styles.flex, styles.alignCenter]}>
          <TextInput
            placeholder="Verification Code"
            autoCorrect={false}
            style={{ flex: 3 / 2 }}
            secureTextEntry={true}
          />
          <View style={[styles.bgBlack]}>
            <Text
              style={[
                styles.textWhite,
                styles.paddingVerticalSmall,
                styles.paddingHorizontal,
                { borderWidth: 2, borderColor: 'black' }
              ]}
            >
              1997
            </Text>
          </View>
        </View>
        <View style={[styles.marginTop]}>
          <Text style={styles.textgrey}>
            {
              "Please input your Email address, and click the link in the mail we sent you to reset your password"
            }
          </Text>
        </View>
        <View style={[styles.marginTop3]}>
          <GradientButton style={{ paddingVertical: 15 }}>
            <Text
              style={[
                styles.textWhite,
                styles.textCenter,
                styles.boldText,
                styles.bold,
              ]}
            >
              SEND EMAIL
            </Text>
          </GradientButton>
        </View>
      </View>
    </SafeAreaView>
  );
}
