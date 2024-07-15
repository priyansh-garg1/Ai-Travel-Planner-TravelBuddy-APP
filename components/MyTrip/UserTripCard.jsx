import { View, Text, Image } from "react-native";
import React from "react";

export default function UserTripCard({ trip }) {
   const  ParseTrip = JSON.parse(trip.tripPlan);
  return (
    <View
      style={{
        marginTop: 15,
      }}
    >
      <Image
        source={require("./../../assets/images/trip.jpg")}
        style={{
          width: 100,
          height: 100,
          objectFit: "cover",
          borderRadius: 15,
        }}
      />
      <View>
        <Text>{ParseTrip?.travelPlan?.destination}</Text>
      </View>
    </View>
  );
}
