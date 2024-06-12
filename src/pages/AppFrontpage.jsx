import React from 'react'
import { Image } from 'react-native'
import { View } from 'react-native'
import { AppLogo } from '../../services/Imageservices'
import Imagestyles from '../../services/styles/Imagestyles'


const AppFrontpage = () => {
  return (
   <View style={{}}>
    <Image source={AppLogo} style={Imagestyles.ApplogoImage}/>
   </View>
  )
}

export default AppFrontpage
