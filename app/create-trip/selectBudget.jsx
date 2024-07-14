import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import OptionCard from "../../components/CreateTerp/OprtionCard";
import { SelectBudgetOptions } from "../../constants/Ooptions";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectBudget() {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    selectedOption &&
      setTripData({ ...tripData, budget: selectedOption?.title });
  }, [selectedOption]);

  const onClickContinue = () => {
    if (!selectedOption) {
      ToastAndroid.show("Please select a budget", ToastAndroid.LONG);
      return;
    }
    router.push('/create-trip/reviewTrip');
  };

  return (
    <View
      style={{
        paddingTop: 75,
        height: "100%",
        padding: 25,
        backgroundColor: Colors.white,
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: "outfit-bold",
          marginTop: 20,
        }}
      >
        Budget
      </Text>
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
          Choose sepending habits for your trip
        </Text>
        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedOption(item)}
              style={{ marginVertical: 10 }}
            >
              <OptionCard option={item} selectedTravler={selectedOption} />
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          onPress={onClickContinue}
          style={{
            padding: 15,
            backgroundColor: Colors.primary,
            borderRadius: 15,
            marginTop: 35,
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
    </View>
  );
}
