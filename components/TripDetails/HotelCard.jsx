import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { GetPhotoRef } from "../../services/GooglePlaceAPI";

export default function HotelCard({ item }) {
  const [photoRefe, setPhotoRefe] = useState();
  useEffect(() => {
    GetGooglePhotoRef();
  }, []);
  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(item.hotelName);
    setPhotoRefe(result?.results[0]?.photos[0]?.photo_reference);
  };
  return (
    <View
      style={{
        marginRight: 20,
        width: 180,
      }}
    >
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            photoRefe +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_API_KEY,
        }}
        style={{
          width: 180,
          height: 120,
          marginBottom: 3,
          borderRadius: 15,
        }}
      />
      <View
        style={{
          padding: 5,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit-medium",
          }}
        >
          {item.hotelName}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          ⭐{item.rating}
        </Text>
        <Text>💰{item.price}</Text>
      </View>
    </View>
  );
}
