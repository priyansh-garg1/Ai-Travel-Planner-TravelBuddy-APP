import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function PlannedTrip({ details }) {
  console.log(details);
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
          <View
            key={index}
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
              source={require("../../assets/images/trip.jpg")}
              style={{
                width: "100%",
                height: 120,
                borderRadius: 15,
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
                fontSize: 15,
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
        ))}
    </View>
  );
}
