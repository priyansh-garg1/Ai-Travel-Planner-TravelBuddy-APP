import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { GetPhotoRef } from "../../services/GooglePlaceAPI";

export default function PlaceCard({ item }) {
  const [photoRefe, setPhotoRefe] = useState();
  useEffect(() => {
    GetGooglePhotoRef();
  }, []);
  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(item.location.placeName);
    setPhotoRefe(result?.results[0]?.photos[0]?.photo_reference);
  };
  return (
    <View
      style={{
        marginTop: 20,
        backgroundColor: Colors.LIGHT_BLUE,
        borderColor: Colors.GRAY,
        borderRadius: 15,
        padding: 12,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-bold",
        }}
      >
        {item.day}{" "}
        <Text
          style={{
            fontSize: 15,
            fontFamily: "outfit-medium",
            color: Colors.primary,
          }}
        >
          {" "}
          {item.time}
        </Text>
      </Text>
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            photoRefe +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_API_KEY,
        }}
        style={{
          width: "100%",
          height: 120,
          borderRadius: 15,
          marginTop:10
        }}
      />
      <Text
        style={{
          fontSize: 17,
          fontFamily: "outfit-medium",
          paddingTop: 10,
        }}
      >
        {item.location.placeName}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "outfit",
          color: Colors.GRAY,
        }}
      >
        {item.location.placeDetails}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "outfit",
          color: Colors.GRAY,
          marginTop: 5,
        }}
      >
        🎫 Ticket Price:{" "}
        <Text
          style={{
            fontSize: 15,
            fontFamily: "outfit-medium",
            color: Colors.primary,
          }}
        >
          {item.location.ticketPricing}
        </Text>
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "outfit",
          color: Colors.GRAY,
          marginTop: 5,
        }}
      >
        ⏳ Time To Travel:{" "}
        <Text
          style={{
            fontSize: 15,
            fontFamily: "outfit-medium",
            color: Colors.primary,
          }}
        >
          {item.location.timeToTravel}
        </Text>
      </Text>
    </View>
  );
}
