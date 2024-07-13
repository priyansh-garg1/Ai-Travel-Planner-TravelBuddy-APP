import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectDates() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  const onDateChange = (date, type) => {
    console.log(date);
    if(type=='START_DATE'){
      setStartDate(moment(date));
    }
    else{
      setEndDate(moment(date));
    }
  };
  const onDateSelectionContinue = () => {
    if(!startDate && !endDate){
      ToastAndroid.show("Please select start date and end date",ToastAndroid.LONG)
      return;
    }
    const totalNoOfDays = endDate.diff(startDate,'days');
    console.log(totalNoOfDays+1);
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays+1,
    })
    router.push("/create-trip/selectBudget");
  };
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: "outfit-bold",
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>
      <View style={{ marginTop: 30 }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: Colors.primary,
          }}
          selectedDayTextStyle={{
            color: Colors.white,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={onDateSelectionContinue}
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
  );
}
