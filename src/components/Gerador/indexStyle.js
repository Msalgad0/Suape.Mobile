import {StyleSheet } from "react-native";
export const styles = StyleSheet.create({

    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      position: 'relative',
      padding: 20,
      backgroundColor: "#4682B4",
      
    },
     text: {
      color: "#000",
      position: 'relative',
      alignSelf: 'flex-start',
      marginLeft: '5%',
      marginBottom: '10%',
      fontSize: 18,
      marginBottom: 13,
      lineHeight: 25,

    },
     input:{
      width: '90%',
      marginBottom: 10,
      backgroundColor: '#FFFF',
      borderRadius: 5,
      fontSize: 18,
    },
   button:{
    lineHeight: 20,
   }
});