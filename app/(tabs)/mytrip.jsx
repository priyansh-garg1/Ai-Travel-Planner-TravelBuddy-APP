import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "./../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "../../components/MyTrip/StartNewTripCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../configs/FirebaseConfig";
import UserTripList from "../../components/MyTrip/UserTripList";

export default function MyTrip() {
  const [userTrip, setUserTrip] = useState([]);
  const [loading,setLoading] = useState(false);
  const user = auth.currentUser;
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
    <View
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
        <Ionicons name="add-circle" size={50} color={"black"} />
      </View>

      {loading && <ActivityIndicator size={"large"} color={Colors.primary}/>}

      {userTrip?.length == 0 ? <StartNewTripCard />:<UserTripList  userTrips={userTrip}/>}
    </View>
  );
}
