import { View, Text, FlatList, Image } from "react-native";
import React from "react";

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
          <View
            style={{
              marginRight: 20,
              width:180,
            }}
          >
            <Image
              source={require("../../assets/images/trip.jpg")}
              style={{
                width: 180,
                height: 120,
                marginBottom: 3 ,
                borderRadius: 15,
              }}
            />
            <View style={{
              padding:5
            }}>
              <Text style={{
                fontSize: 17,
                fontFamily: "outfit-medium",
              }}>{item.hotelName}</Text>
              <Text style={{
                fontFamily: "outfit",
              }}>⭐{item.rating}</Text>
              <Text>💰{item.price}</Text>
              </View>
          </View>
        )}
      />
    </View>
  );
}
