import { View, Text } from 'react-native'
import React from 'react'

export default function HotelList({hotelList}) {
    console.log(hotelList);
  return (
    <View style={{
        marginTop:20
    }}>
      <Text style={{
        fontSize: 20,
        fontFamily: 'outfit-bold',
        marginBottom: 20,
        textAlign: 'center'
      }}>🏨🏩Hotel Recommendation</Text>
    </View>
  )
}