import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AppLogo } from "../../services/Imageservices";
import Imagestyles from "../../services/styles/Imagestyles";
import Viewstyles from "../../services/styles/Viewstyles";
import Textstyles from "../../services/styles/Textstyles";


const LoginPage = () => {
  return (
    <View style={Viewstyles.flexCenter}>
      <Image source={AppLogo} style={Imagestyles.Loginlogo}/>
    
      <TextInput
        placeholder="Phone Number"
        style={Textstyles.TextValue}
      ></TextInput>
      <TouchableOpacity>
        <View style={Textstyles.Logintext}>
          <Text style={Textstyles.logintexts}>Log in</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={Textstyles.Loginwhatsapptext}>
          <Text style={Textstyles.logintext}>Login via WhatsApp</Text>
        </View>
      </TouchableOpacity>
      <View style={[Viewstyles.flexrow, { marginTop: 18,textAlign:"center" }]}>
        <Text style={{textAlign:"center",marginLeft:20}}>By logging in you agree to our </Text>
        <Text style={{ color: "#FF5C00" }}>Privacy Policy</Text>
      </View>
      <Text style={{ marginTop: 10 ,textAlign:"center"}}>Don't have account?</Text>
      <TouchableOpacity>
        <View style={Textstyles.Registertext}>
          <Text style={Textstyles.logintexts}>Register</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{marginTop:25,fontSize:25,color:"#FF5C00",textAlign:"center"}}>Login as a Guest</Text>
      </TouchableOpacity>
   
    </View>
  );
};

export default LoginPage;
