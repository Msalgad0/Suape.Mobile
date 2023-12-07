import React, { useState } from "react";
import { View, Text, TextInput,Button,StyleSheet,TouchableOpacity } from "react-native";
import {Ionicons} from '@expo/vector-icons';


export default function Form() {
  const [login, setLogin] = useState("");

   const LoginName = (Login) => {
    setLogin(Login);
  };


  const [senha, setSenha] = useState("");

  const Senha = (Senha) => {
    setSenha(Senha);
  };
  
  const [hidePass,setHidePass] =useState(true);

  return (
    <View style={StyleSheet.container}>

      <View style={StyleSheet.inputArea}>

        <Text>Login</Text>
        <TextInput
          onChangeText={LoginName}
          placeholder="Digite seu usuario"
          value={login}
        />

        <Text>Senha</Text>
        <TextInput
        style={styles.input}
          onChangeText={Senha}
          placeholder="Digite sua senha"
          value={senha}
          onchangeText={(texto) => setInput(texto)}
          secureTextEntry={hidePass}
        />
        <TouchableOpacity styles={styles.icon} onPress={() => setHidePass(!hidePass)}>
          { hidePass?
          
          <Ionicons name="eye" color="black" size={25}/>
          :
          <Ionicons name="eye-off" color="black" size={25}/>

        }

        </TouchableOpacity>

        <Button title="Login"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  inputArea:{
    flexDirection:'row',
    width:'90%',
    backgroundColor:'#121212',
    boderRadius:'5',
    height:'50',
    alignItems:'center'
  },
  input:{
    width:'85%',
    height:'50',
    color:'black',
    padding:8,
    fontSize:18
  },
  icon:{
    width:'15%',
    height:50,
    justifyContente:'center',
    alignItems:'center'
  }

});
