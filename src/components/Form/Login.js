import React, { useState } from "react";
import { View, Text, TextInput,Button,StyleSheet,TouchableOpacity } from "react-native";
import {Ionicons} from '@expo/vector-icons';


export default function Form({ navigation }) {
  const [login, setLogin] = useState("");

   const LoginName = (Login) => {
    setLogin(Login);
  };


  const [senha, setSenha] = useState("");

  const Senha = (Senha) => {
    setSenha(Senha);
  };
  
  const [hidePass,setHidePass] = useState(true);

  const handlePostRequest = async () => {
    try {
      const url = 'https://api-mobile-25hv.onrender.com/api/Login';

      const data = {
        // Seus dados para enviar no corpo da requisição
        "userName" : login,
        "pass": senha,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const json = await response.json();
        navigation.navigate('Gerador', { id: json.id });
        
      } else {
        // Requisição falhou, faça algo com base no código de status
        alert("Usuário não encontrado !");
      }
    } catch (error) {
      console.error('Erro ao processar a requisição:', error);
    }
  };

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

        <Button title="Login"  onPress={() => handlePostRequest()}/>
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
