import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";

const welcome = () => {
  return (
    <ScreenWrapper>
      <View style={styles.conainer}>
        {/* Login button */}
        <View>
          <TouchableOpacity>
            <Typo fontWeight={"500"}>Sign in</Typo>
          </TouchableOpacity>

          <Image
            source={require("../../assets/images/welcome.png")}
            style={styles.welcomeImage}
            resizeMode="contain"
          />
        </View>

        {/* footer */}

        <View style={styles.footer}>
          <View style={{ alignItems: "center" }}>
            <Typo size={30} fontWeight={"800"}>Always take control</Typo>
            <Typo size={30} fontWeight={"800"}>of your finances</Typo>
          </View>

          <View style={{alignItems: "center"}}>
          <Typo size={17} color={colors.textLight}>Finances must be arranged to set a better</Typo>
          <Typo size={17} color={colors.textLight}>lifestyle in the future</Typo>
          </View>

          {/* Button */}
          <View style={styles.buttonContainer}>
              {/*  */}
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default welcome;

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },

  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
  },

  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingY._12,
  },

  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },

  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingY._25,
  },
});
