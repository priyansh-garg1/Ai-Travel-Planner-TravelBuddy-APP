import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { useNavigation, useRouter } from "expo-router";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Ooptions";
import { chatSession } from "../../configs/AiModel";
import { auth, db } from "../../configs/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { GetImage } from "../../services/UnsplashAPI";

export default function GenerateTrip() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    GenerateAiTrip();
  }, []);

  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      tripData?.locationInfo?.name
    )
      .replace("{totalDay}", tripData?.totalNoOfDays)
      .replace("{totalNight}", tripData?.totalNoOfDays - 1)
      .replace("{traveler}", tripData?.traveler?.title)
      .replace("{budget}", tripData?.budget)
      .replace("{totalDay}", tripData?.totalNoOfDays)
      .replace("{totalNight}", tripData?.totalNoOfDays - 1)
      .replace("{location}", tripData?.locationInfo?.name);

    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    const tripResp = JSON.parse(result.response.text());
    const placeImageUrl = await GetImage(tripData?.locationInfo?.name) || "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzM2NjF8MHwxfHNlYXJjaHwxfHxQYXJpc3xlbnwwfHx8fDE3MjExMzUyMzN8MA&ixlib=rb-4.0.3&q=85"
    console.log(placeImageUrl);
    const docId = Date.now().toString();
    const result_ = await setDoc(doc(db, "UserTrips", docId), {
      userEmail: user?.email,
      tripPlan: tripResp,
      tripData: JSON.stringify(tripData),
      docId: docId,
      placeImageUrl: placeImageUrl
    });

    setLoading(false);
    router.push("/(tabs)/mytrip");
  };

  return (
    <View
      style={{
        padding: 25,
        marginTop: 75,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: "outfit-bold",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Please Wait...
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-medium",
          marginTop: 40,
          textAlign: "center",
        }}
      >
        We are working to generate your trip
      </Text>
      <Image
        source={require("./../../assets/images/aeroplane.gif")}
        style={{
          width: "100%",
          height: 200,
          objectFit: "contain",
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit",
          color: Colors.GRAY,
          textAlign: "center",
        }}
      >
        Don't Go Back
      </Text>
    </View>
  );
}
