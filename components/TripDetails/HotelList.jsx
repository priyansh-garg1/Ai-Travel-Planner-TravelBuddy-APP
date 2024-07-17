import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { GetPhotoRef } from "../../services/GooglePlaceAPI";
import { useEffect } from "react";
import HotelCard from "./HotelCard";

export default function HotelList({ hotelList }) {
  
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
          marginBottom: 1,
          textAlign: "center",
        }}
      >
        🏨Hotel Recommendation
      </Text>
      <FlatList
        style={{
          marginTop: 8,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={hotelList}
        renderItem={({ item, index }) => (
          <HotelCard item={item}/>
        )}
      />
    </View>
  );
}
