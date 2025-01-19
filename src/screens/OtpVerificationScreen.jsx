import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import AuthButton from "../components/AuthButton";
import { verifyOtp } from "../services/AuthServices";

const OtpVerificationScreen = ({ navigation, route }) => {
  const { email, context } = route.params;
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = async () => {
    try {
      const response = await verifyOtp(email, otp, context);
      alert(response);
      if (response === "OTP verified successfully. Please reset your password.") {
        navigation.navigate("ResetPassword", { email });
      } else if (response === "OTP verified successfully. Registration complete.") {
        navigation.navigate("Login");
      }
    } catch (error) {
      alert("OTP verification failed. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput style={styles.input} placeholder="OTP" onChangeText={setOtp} value={otp} />
      <AuthButton title="Verify OTP" onPress={handleVerifyOtp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: { height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 20, paddingLeft: 10 },
});

export default OtpVerificationScreen;
