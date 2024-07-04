import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function SingUp() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <View style={{ padding: 25, paddingTop: 50,backgroundColor:Colors.white,height:"100%" }}>
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color={"black"} />
      </TouchableOpacity>
      <Text style={{ fontSize: 30, fontFamily: "outfit-bold" }}>
        Create New Account
      </Text>

      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "outfit" }}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter Full Name" />
      </View>
      <View style={{ marginTop: 20 }}>
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
      onPress={()=>router.replace("auth/sign-in")}
        style={{
          padding: 20,
          backgroundColor: Colors.white,
          borderRadius: 15,
          marginTop: 20,
          borderWidth:1
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
