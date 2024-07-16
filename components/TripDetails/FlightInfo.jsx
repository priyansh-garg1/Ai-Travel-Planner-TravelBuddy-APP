import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function FlightInfo({ flightData }) {
  return (
    <View
      style={{
        marginTop: 20,
        borderWidth:1,
        borderColor:Colors.LIGHT_GRAY,
        padding:10,
        borderRadius:15
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-bold",
        }}
      >
        ✈ Flights
      </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            padding: 5,
            borderRadius: 7,
            marginTop: 7,
            width: 100,
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontFamily: "outfit",
              textAlign: "center",
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>
      
      <Text
        style={{
          fontSize: 17,
          marginTop: 7,
          fontFamily: "outfit",
        }}
      >
        Airline: {flightData?.airline}
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontFamily: "outfit",
        }}
      >
        Price: {flightData?.price}
      </Text>
    </View>
  );
}
