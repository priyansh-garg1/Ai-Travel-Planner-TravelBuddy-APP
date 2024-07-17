import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";

export default function TripDetails() {
  const navigation = useNavigation();
  const [tripDetails, setTripDetails] = useState([]);
  const { trip } = useLocalSearchParams();

  const formatData = (data) => {
    return JSON.parse(data);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
    setTripDetails(JSON.parse(trip));
  }, []);
  console.log(tripDetails.tripData);

  return (
    tripDetails && (
      <ScrollView>
        <Image
          src={tripDetails.placeImageUrl}
          style={{
            width: "100%",
            height: 330,
          }}
        />
        <View
          style={{
            padding: 15,
            backgroundColor: Colors.white,
            height: "100%",
            marginTop: -30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          {tripDetails.tripData && (
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: "outfit-bold",
                }}
              >
                {tripDetails?.tripPlan?.locationDetails?.locationName}
              </Text>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "outfit",
                    fontSize: 18,
                    color: Colors.GRAY,
                  }}
                >
                  {moment(formatData(tripDetails.tripData).startDate).format(
                    "DD MMM yyyy"
                  )}
                </Text>
                <Text>-</Text>
                <Text
                  style={{
                    fontFamily: "outfit",
                    fontSize: 18,
                    color: Colors.GRAY,
                  }}
                >
                  {moment(formatData(tripDetails.tripData).endDate).format(
                    "DD MMM yyyy"
                  )}
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 17,
                  color: Colors.GRAY,
                }}
              >
                🚌 {formatData(tripDetails.tripData).traveler.title}
              </Text>
            </View>
          )}

          {/* Flight Info  */}
          <FlightInfo flightData={tripDetails?.tripPlan?.flightDetails} />

          {/* Hotel  */}
          <HotelList hotelList={tripDetails?.tripPlan?.hotelOptions}/>

          {/* Trip  */}
          <PlannedTrip details={tripDetails?.tripPlan?.dayPlan}/>
        </View>
      </ScrollView>
    )
  );
}
