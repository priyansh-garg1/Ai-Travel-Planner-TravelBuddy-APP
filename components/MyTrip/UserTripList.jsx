import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";

export default function UserTripList({ userTrips }) {
  const router = useRouter()
  const tripData = JSON.parse(userTrips[0].tripData);
  const tripPlan = userTrips[0].tripPlan;
  return userTrips && ( 
    <View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Image
          src={userTrips[0].placeImageUrl}
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            borderRadius: 15,
          }}
        />
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            {tripPlan?.locationDetails?.locationName}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                color: Colors.GRAY,
              }}
            >
              {moment(tripData.startDate).format("DD MMM yyyy")}
            </Text>

            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                color: Colors.GRAY,
              }}
            >
              🚌 {tripData.traveler.title}
            </Text>
          </View>
          <TouchableOpacity
          onPress={()=>router.push({pathname:'/trip-details',params:{
            trip:JSON.stringify(userTrips[0])
          }})}
            style={{
              backgroundColor: Colors.primary,
              padding:15,
              marginTop:10,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 15,
                color: Colors.white,
                textAlign:"center"
              }}
            >
              See Your Plan
            </Text>
          </TouchableOpacity>
        </View>


        {userTrips.map((trip,index)=>(
           <TouchableOpacity onPress={()=>router.push({pathname:'/trip-details',params:{
            trip:JSON.stringify(trip)
          }})}>

           <UserTripCard trip={trip} key={index} />
           </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
