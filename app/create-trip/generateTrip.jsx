import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function GenerateTrip() {
  return (
    <View style={{
        padding:25,
        marginTop:75,
        backgroundColor:Colors.white,
        height:'100%',
    }}>
      <Text style={{
        fontSize:35,
        fontFamily:'outfit-bold',
        marginTop:20,
        textAlign:'center',
      }}>
        Please Wait...
      </Text>
      <Text style={{
        fontSize:20,
        fontFamily:'outfit-medium',
        marginTop:40,
        textAlign:'center',
      }}>
        We are working to generate your 
      </Text>
      <Image source={require('./../../assets/images/aeroplane.gif')}
      style={{
        width:'100%',
        height:300,
        objectFit:"contain"
      }}
      />
      <Text style={{
        fontSize:20,
        fontFamily:'outfit',
        color:Colors.GRAY,
        textAlign:'center',
      }}>Don't Go Back</Text>
    </View>
  )
}