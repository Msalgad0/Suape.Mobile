import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Logo:{
      width: 215,
      height: 215,
      marginBottom: 16,
      marginTop: '20%'
    },
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      position: 'relative',
      padding: 20,
      backgroundColor: "#fff"
    },
    inputArea:{
      flex: 1,
      flexDirection: 'column',
      width:'100%',
      boderRadius:'5',
      height:'5',
      alignItems:'center',
      fontFamily: "Roboto"
    },
    input:{
      width: '90%',
      marginBottom: 10,
      backgroundColor: '#FFFF',
      borderRadius: 5,
      fontSize: 18,
    },
    press:{
      width: '90%',
      marginBottom: 10,
      height: '12%',
      backgroundColor: '#fff',
      borderRadius: 5,
      backgroundColor: '#4F4F4F',
      marginTop: '2%'
    },
    icon:{
      width:'15%',
      height:50,
      justifyContente:'center',
      alignItems:'center'
    },
    text: {
      color: "#000",
      position: 'relative',
      alignSelf: 'flex-start',
      marginLeft: '5%',
      marginBottom: '2%',
      fontSize: 18
    },
    textPress: {
      color: "#fff",
      position: 'relative',
      alignSelf: 'center',
      marginBottom: '2%',
      marginTop: '2%',
      fontSize: 22,
      fontWeight: 'bold'
    },
    links:{
      color:"#868686",
      marginBottom: '5%',
      marginTop: '2%',
      fontSize: 16  
    },
    validLink:{
      color:"#ff0000",
      marginBottom: '5%',
      marginTop: '2%',
      fontSize: 18, 
    }
  });