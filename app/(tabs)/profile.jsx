// Profile.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { auth } from "./../../configs/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";

const Profile = () => {
  const user = auth.currentUser;
  const router = useRouter();

  console.log(user);

  const handleLogout = async () => {
    if (user) {
      await signOut(auth)
        .then((res) => {
          console.log(res);
          router.replace("/");
        })
        .catch((err) => console.log(err));
      console.log("User logged out");
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>No user logged in.</Text>
      </View>
    );
  }

  return (
    <ScrollView  style={{
      backgroundColor:Colors.white
    }}>
      <View style={styles.container}>
        <Image
          style={styles.userLogo}
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
          }} // Replace with your user logo URL
        />
        <Text style={styles.heading}>User Info</Text>
        <View style={styles.userInfo}>
          <Text style={styles.label}>
            User Name: {user.email.split("@")[0]}
          </Text>
          <Text style={styles.label}>Email: {user.email}</Text>
        </View>
        <View style={styles.travelTips}>
          <Text style={styles.subHeading}>Travel Tips</Text>
          <Text style={styles.tipItem}>1. Pack light and smart.</Text>
          <Text style={styles.tipItem}>
            2. Always carry a map or download offline maps.
          </Text>
          <Text style={styles.tipItem}>
            3. Keep a copy of important documents.
          </Text>
          <Text style={styles.tipItem}>
            4. Learn a few phrases in the local language.
          </Text>
          <Text style={styles.tipItem}>
            5. Stay hydrated and take care of your health.
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: Colors.primary,
            borderRadius: 99,
          }}
          onPress={handleLogout}
        >
          <Text style={{
                color: Colors.white,
                fontSize: 17,
                fontFamily: "outfit",
                textAlign: "center",
              }}>Logout</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 TravelBuddy. All rights reserved.
          </Text>
          <Text style={styles.footerText}>
            Contact us: support@travelbuddy.com
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.white,
  },
  userLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
    marginTop:20
  },
  heading: {
    fontSize: 30,
    marginBottom: 5,
    fontWeight: "bold",
    fontFamily: "outfit-bold",
    color: Colors.primary,
  },
  userInfo: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: Colors.primary,
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily:'outfit-medium',
    color: Colors.primary,
  },
  travelTips: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    width: "100%",
  },
  subHeading: {
    fontSize: 22,
    marginBottom: 15,
    fontFamily: "outfit-bold",
    
    color: Colors.primary,
  },
  tipItem: {
    fontSize: 16,
    marginBottom: 7,
    color: "#555",
    fontFamily:'outfit-medium',
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: Colors.GRAY,
    fontFamily:'outfit-medium',
  },
  message: {
    fontSize: 16,
    color: "gray",
  },
});

export default Profile;
