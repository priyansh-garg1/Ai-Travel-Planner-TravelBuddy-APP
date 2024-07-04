import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { auth } from "./../../../configs/FirebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SingUp() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const OnCreateAccount = () => {
    console.log("OnCreateAccount");
    if (!email || !password || !fullName) {
      ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM);
      return;
    }
    console.log(email, password, fullName);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={"black"} />
      </TouchableOpacity>
      <Text style={{ fontSize: 30, fontFamily: "outfit-bold" }}>
        Create New Account
      </Text>

      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "outfit" }}>Full Name</Text>
        <TextInput
          onChangeText={(value) => setFullName(value)}
          style={styles.input}
          placeholder="Enter Full Name"
        />
      </View>
      <View style={{ marginTop: 20 }}>
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
        onPress={OnCreateAccount}
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
        onPress={() => router.replace("auth/sign-in")}
        style={{
          padding: 20,
          backgroundColor: Colors.white,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text style={{ color: Colors.primary, textAlign: "center" }}>
          Already've an account? Sing In
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
