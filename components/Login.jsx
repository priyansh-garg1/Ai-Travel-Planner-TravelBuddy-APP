import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        style={{ width: "100%", height: 520 }}
        source={{
          uri: "https://m.media-amazon.com/images/I/61KJJUHKwZL._AC_UF1000,1000_QL80_.jpg",
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            fontFamily: "outfit-bold",
            marginTop: 10,
          }}
        >
          Travel Buddy
        </Text>
        <Text
          style={{
            fontSize: 17,
            textAlign: "center",
            color: Colors.GRAY,
            fontFamily: "outfit",
            marginTop: 30,
          }}
        >
          Discover your next adventure effortlessly, Personalized itrineraries
          at your fingertips. Travel smarter with AI-driven insights
        </Text>
        <TouchableOpacity onPress={() => router.push("auth/sign-in")}>
          <View style={styles.button}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 17,
                fontFamily: "outfit",
                textAlign: "center",
              }}
            >
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 99,
    marginTop: "15%",
  },
});
