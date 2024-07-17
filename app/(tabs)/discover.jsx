import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function Discover() {
  return (
    <View style={{
      backgroundColor: Colors.white,
      height: '100%',
    }}>
      <Text style={{
        fontSize: 36,
        fontFamily: 'outfit-bold',
        textAlign: 'center',
        marginTop: 400,
      }}>404 NOT FOUND!</Text>
    </View>
  )
}