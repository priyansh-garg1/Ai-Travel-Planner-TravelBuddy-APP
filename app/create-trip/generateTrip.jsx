import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { useNavigation, useRouter } from "expo-router";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Ooptions";
import { chatSession } from "../../configs/AiModel";
import { auth, db } from "../../configs/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

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
    try {
      const FINAL_PROMPT = AI_PROMPT.replace(
        "{location}",
        tripData?.locationInfo?.name
      )
        .replace("{totalDay}", tripData?.totalNoOfDays)
        .replace("{totalNight}", tripData?.totalNoOfDays - 1)
        .replace("{traveler}", tripData?.traveler?.title)
        .replace("{budget}", tripData?.budget);
      // console.log(FINAL_PROMPT);

      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log((result.response.text()));
      // const tripResp = JSON.parse(result.response.text());
      // console.log(tripResp);

      const docId = Date.now().toString();
      const result_ = await setDoc(doc(db, "UserTrips", docId), {
        userEmail: user?.email,
        // tripPlan: tripResp,
        tripPlan: result.response.text(),
        tripData: JSON.stringify(tripData),
        docId: docId
      });
    } catch (error) {
      console.log("Erorr occurred while generating trip data");
      console.log(error);
    }
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
        We are working to generate your
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
