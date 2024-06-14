import React from "react";
import { TextInput, View ,Text} from "react-native";
import Textstyles from "../../services/styles/Textstyles";
import Buttonstyles from "../../services/styles/Buttonstyles";

const SellYourVehicle = () => {
  return (
    <View style={{marginTop:80,alignItems:"center"}}>
        <Text>Sell your vehicle</Text>
      <TextInput
        placeholder="Choose Brand"
    style={[Textstyles.TextValue,{marginTop:20},{borderBottomWidth:4,borderColor:"#c6c6c6"}]}
      ></TextInput>
      <TextInput
        placeholder="Choose Model"
        style={[Textstyles.TextValue,{marginTop:20},{borderBottomWidth:4,borderColor:"#c6c6c6"}]}
      ></TextInput>
      <TextInput
        placeholder="Choose Year"
        style={[Textstyles.TextValue,{marginTop:20},{borderBottomWidth:4,borderColor:"#c6c6c6"}]}
      ></TextInput>
      <TextInput
        placeholder="Vehicle Number"
        style={[Textstyles.TextValue,{marginTop:20},{borderBottomWidth:4,borderColor:"#c6c6c6"}]}
      ></TextInput>
      <TextInput
        placeholder="Kilometor Driven"
        style={[Textstyles.TextValue,{marginTop:20},{borderBottomWidth:4,borderColor:"#c6c6c6"}]}
      ></TextInput>
      <TextInput
        placeholder="98*******3"
        style={[Textstyles.TextValue,{marginTop:20},{borderBottomWidth:4,borderColor:"#c6c6c6"}]}
      ></TextInput>
      <TextInput
        placeholder="Enter Your Location"
        style={[Textstyles.TextValue,{marginTop:20},{borderBottomWidth:4,borderColor:"#c6c6c6"}]}
      ></TextInput>
      <TextInput
        placeholder="Enter Your Expected Price"
        style={[Textstyles.TextValue,{marginTop:20},{borderBottomWidth:4,borderColor:"#c6c6c6"}]}
      ></TextInput>
      <Text style={{marginTop:30}}>By Clicking Value My Bike You agree to our</Text>
      <Text style={{color:"#FF5C00"}}>Terms & Conditions</Text>
      <View style={Buttonstyles.Sell_Vehicle_Button}>
<Text style={{textAlign:"center",color:"#fff",marginTop:15}}>Value My Bike</Text>
      </View>
    </View>
  );
};

export default SellYourVehicle;
