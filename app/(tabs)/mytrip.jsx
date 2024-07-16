import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "./../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "../../components/MyTrip/StartNewTripCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../configs/FirebaseConfig";
import UserTripList from "../../components/MyTrip/UserTripList";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function MyTrip() {
  const [userTrip, setUserTrip] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
  const router=  useRouter()
  const GetMyTrips = async () => {
    setLoading(true);
    setUserTrip([]);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserTrip((prevState) => [...prevState, doc.data()]);
    });
    setLoading(false);
  };
  useEffect(() => {
    user && GetMyTrips();
  }, [user]);

  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
          }}
        >
          My Trip
        </Text>
        <TouchableOpacity onPress={()=>router.push('/create-trip/search-place')}>
          <Ionicons name="add-circle" size={50} color={"black"} />
        </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator size={"large"} color={Colors.primary} />}

      {userTrip?.length == 0 ? (
        <StartNewTripCard />
      ) : (
        <UserTripList userTrips={userTrip} />
      )}
    </ScrollView>
  );
}
