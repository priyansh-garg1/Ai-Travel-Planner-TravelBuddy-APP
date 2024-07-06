import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { CreateTripContext } from "./../../context/CreateTripContext";
import { Ionicons } from "@expo/vector-icons";

export default function SearchPlace() {
  const navigation = useNavigation();
  const router = useRouter();
  const [inputVal, setInputVal] = useState("");
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <View>
        <TextInput
          onChangeText={(val) => {
            setInputVal(val);
          }}
          placeholder="Enter Destintion"
          style={{
            borderWidth: 1,
            borderColor: Colors.dark,
            borderRadius: 15,
            padding: 10,
            marginTop: 40,
          }}
        />
        <TouchableOpacity
          onPress={() =>{
            if(inputVal.length==0)return ToastAndroid.show("Please enter a destination", ToastAndroid.BOTTOM)
            setTripData({
              locationInfo: {
                name: inputVal,
                coordinates: null,
                description: null,
                placeRef: null,
                url: null,
              },
            });
           router.push("/create-trip/select-traveler")}}
          style={{
            padding: 15,
            backgroundColor: Colors.primary,
            borderRadius: 15,
            marginTop: 50,
            alignSelf: "flex-end",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: Colors.white,
            }}
          >
            Next
          </Text>
          <Ionicons size={20} color={"white"} name="arrow-forward-sharp" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
