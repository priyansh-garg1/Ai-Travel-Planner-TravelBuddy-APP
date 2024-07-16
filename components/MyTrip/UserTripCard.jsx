import { View, Text, Image } from "react-native";
import React from "react";

export default function UserTripCard({ trip }) {
  console.log(trip.tripData);
  const formatData = (data) => {
    return JSON.parse(data)
  }
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
        <Text>{formatData(trip.tripData).locationInfo?.name}</Text>
      </View>
    </View>
  );
}
