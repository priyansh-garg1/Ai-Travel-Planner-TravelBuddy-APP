import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { SelectTravlersList } from "../../constants/Ooptions";
import OprtionCard from "../../components/CreateTerp/OprtionCard";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectTraveler() {
  const navigation = useNavigation();
  const router = useRouter();
  const [selectedTravler, setSelectedTravler] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    setTripData({ ...tripData, traveler: selectedTravler });
  }, [selectedTravler]);

  useEffect(() => {
  }, [tripData]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 35, fontFamily: "outfit-bold", marginTop: 20 }}>
        Who's Travelling
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 23,
          }}
        >
          Choose your travelers
        </Text>
        <FlatList
          data={SelectTravlersList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTravler(item)}
              style={{ marginVertical: 10 }}
            >
              <OprtionCard option={item} selectedTravler={selectedTravler} />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
      onPress={()=>router.push("/create-trip/select-date")}
        style={{
          padding: 15,
          backgroundColor: Colors.primary,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
          <Text
            style={{
              color: Colors.white,
              textAlign: "center",
              fontFamily: "outfit-medium",
              fontSize: 20,
            }}
          >
            Continue
          </Text>
      </TouchableOpacity>
    </View>
  );
}
