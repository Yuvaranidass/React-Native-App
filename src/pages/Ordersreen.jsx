import React from 'react'
import { Image, Text, View } from 'react-native'
import { ORDERLOGO } from '../../services/Imageservices'
import { Searchbar } from 'react-native-paper'
import Textstyles from '../../services/styles/Textstyles'

const Ordersreen = () => {
  return (
   <View style={{marginTop:60,alignItems:"center"}}>
    <Searchbar placeholder='Customer name/ Phone/Reg No.' style={Textstyles.searchbar_style}></Searchbar>
    <Image source={ORDERLOGO} style={{marginTop:180}}/>
    <Text style={Textstyles.OrderText}>No orders found</Text>
   </View>
  )
}

export default Ordersreen