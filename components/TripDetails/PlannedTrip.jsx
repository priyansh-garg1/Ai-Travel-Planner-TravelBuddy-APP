import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import PlaceCard from "./PlaceCard";

export default function PlannedTrip({ details }) {
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-bold",
        }}
      >
        🏖 Plan Details
      </Text>

      {details &&
        details.map((item, index) => (
          <PlaceCard item={item}/>
        ))}
    </View>
  );
}
