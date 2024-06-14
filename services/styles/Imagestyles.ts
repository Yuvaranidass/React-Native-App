import { StyleSheet } from "react-native";

const Imagestyles = StyleSheet.create({
  ApplogoImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 240,
    textAlign: "center",
    marginLeft: 15,
  },
  Loginlogo: {
    marginTop: 120,
    height:200,
    width:200,
    resizeMode: 'contain',
  
  },
  Profile_Logo_Style:{
    height:155,
    width:155,
    backgroundColor:"#f2f2f2",
    borderRadius:77,
    borderWidth:3,
    borderColor:"grey",
    marginTop: 80, 
   
  },
  Profile_Logo_Inner:{
    height:146,
    width:146,
    borderRadius:77,
    marginTop:1.5
    
  
  }
});
export default Imagestyles;
