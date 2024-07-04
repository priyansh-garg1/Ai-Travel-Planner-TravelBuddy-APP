import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        height: "100%",
        paddingTop: 50,
        backgroundColor: Colors.white,
      }}
    >
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color={"black"} />
      </TouchableOpacity>

      <Text style={{ marginTop: 30, fontFamily: "outfit-bold", fontSize: 30 }}>
        Let's Sign You In
      </Text>
      <Text
        style={{
          color: Colors.GRAY,
          fontFamily: "outfit",
          marginTop: 30,
          fontSize: 30,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          color: Colors.GRAY,
          marginTop: 10,
          fontFamily: "outfit",
          fontSize: 30,
        }}
      >
        You've been missed
      </Text>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email" />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
        />
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: Colors.primary,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text style={{ color: Colors.white, textAlign: "center" }}>
          Sign In
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-up")}
        style={{
          padding: 20,
          backgroundColor: Colors.white,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text style={{ color: Colors.primary, textAlign: "center" }}>
          Don't have an account? Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 15,
    fontFamily: "outfit",
  },
});
