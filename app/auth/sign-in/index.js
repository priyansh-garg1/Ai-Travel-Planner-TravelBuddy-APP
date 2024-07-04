import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig.js";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const OnSignIn = () => {
    if(!email && !password){
      ToastAndroid.show("Please enter your email & password", ToastAndroid.BOTTOM)
      return
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        if(errorCode == "auth/invalid-credential"){
          ToastAndroid.show("Invalid email or password", ToastAndroid.BOTTOM)
        }
        if(errorCode == "auth/invalid-email"){
          ToastAndroid.show("Invalid email format", ToastAndroid.BOTTOM)
        }
      });
  };
  return (
    <View
      style={{
        padding: 25,
        height: "100%",
        paddingTop: 50,
        backgroundColor: Colors.white,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
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
        <TextInput
          onChangeText={(value) => setEmail(value)}
          style={styles.input}
          placeholder="Enter Email"
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
        />
      </View>
      <TouchableOpacity
        onPress={OnSignIn}
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
      </TouchableOpacity>
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
