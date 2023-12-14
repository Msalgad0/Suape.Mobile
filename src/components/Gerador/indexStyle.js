import {StyleSheet } from "react-native";
export const styles = StyleSheet.create({

    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      position: 'relative',
      padding: 20,
      backgroundColor: "#fff",
      
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
      marginBottom: 15,
      backgroundColor: '#FFFF',
      borderRadius: 5,
      fontSize: 18,
    },
   button:{
    lineHeight: 20,
    width: '90%',
      marginBottom: 10,
      height: '8%',
      backgroundColor: '#fff',
      borderRadius: 5,
      backgroundColor: '#4F4F4F',
      marginTop: '2%'
   }
});