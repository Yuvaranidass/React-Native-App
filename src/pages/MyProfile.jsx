import React from "react";
import Imagestyles from "../../services/styles/Imagestyles";
import { View, Image, Text, TextInput } from "react-native";
import { AppLogo } from "../../services/Imageservices";
import Textstyles from "../../services/styles/Textstyles";
import Buttonstyles from "../../services/styles/Buttonstyles";

const MyProfile = () => {
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <View
          style={[Imagestyles.Profile_Logo_Style, { alignItems: "center" }]}
        >
          <Image
            source={AppLogo}
            style={[
              Imagestyles.Profile_Logo_Inner,
              { borderColor: "#fff", borderWidth: 5 },
            ]}
          />
        </View>
      </View>
      <View style={{ padding: 30 }}>
        <Text style={{ fontSize: 17, marginTop: 15 }}>Name</Text>
        <TextInput
          placeholder="Yuvarani"
          style={[
            Textstyles.TextValue,
            { marginTop: 8, width: 360 },
            { borderBottomWidth: 4, borderColor: "#c6c6c6" },
          ]}
        ></TextInput>
        <Text style={{ fontSize: 17, marginTop: 15 }}>Email</Text>
        <TextInput
          placeholder="yuvaranixxxxx@gmail.com"
          style={[
            Textstyles.TextValue,
            { marginTop: 8, width: 360 },
            { borderBottomWidth: 4, borderColor: "#c6c6c6" },
          ]}
        ></TextInput>
        <Text style={{ fontSize: 17, marginTop: 15 }}>Phone Number</Text>
        <TextInput
          placeholder="8955xxxx87"
          style={[
            Textstyles.TextValue,
            { marginTop: 8, width: 360 },
            { borderBottomWidth: 4, borderColor: "#c6c6c6" },
          ]}
        ></TextInput>
      </View>
      <View style={{ display: "flex", flexDirection: "row", marginLeft: 40 }}>
        <Text style={{ fontSize: 17, marginTop: 15 }}>DOB</Text>
        <Text style={{ fontSize: 17, marginTop: 15, marginLeft: 180 }}>
          Gender
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", marginLeft: 30 }}>
        <TextInput
          placeholder="DD-MM-YYYY"
          style={[
            Textstyles.TextValue,
            { marginTop: 8, width: 150 },
            { borderBottomWidth: 4, borderColor: "#c6c6c6" },
          ]}
        ></TextInput>

        <TextInput
          placeholder="Female"
          style={[
            Textstyles.TextValue,
            { marginTop: 8, width: 150, marginLeft: 50 },
            { borderBottomWidth: 4, borderColor: "#c6c6c6" },
          ]}
        ></TextInput>
      </View>
      <View style={{alignItems:"center"}}>
      <View style={Buttonstyles.Sell_Vehicle_Button}>
        <Text style={{ textAlign: "center", color: "#fff", marginTop: 13 }}>
         Save
        </Text>
      </View>
      <View style={[Buttonstyles.Sell_Vehicle_Button,{marginTop:10}]}>
        <Text style={{ textAlign: "center", color: "#fff", marginTop: 13}}>
         Delete account
        </Text>
      </View>
      </View>
    </View>
  );
};

export default MyProfile;
