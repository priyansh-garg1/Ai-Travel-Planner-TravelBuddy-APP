import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "./../../constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function SearchPlace() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTransparent:true,headerTitle:"Search" });
  }, []);
  return (
    <View style={{padding:25,paddingTop:75,backgroundColor:Colors.white,height:"100%"}}>
        <GooglePlacesAutocomplete 
        placeholder="Search"
        fetchDetails={true}
        onPress={(data,details=null)=>{
            console.log(data,details);
        }}
        query={{
            key: "AIzaSyCNRbQKHQJLD_wtYiheKWq8VnSrbSP0hvI",
            language: "en",
        }}
        onFail={(error)=>console.log(error)}
        />
    </View>
  );
}
