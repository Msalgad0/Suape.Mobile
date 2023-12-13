import React, { useState } from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity, Image } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { styles } from './LoginStyles';

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
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={{
          uri: 'https://conectasuape.netlify.app/img/logo.png',
        }}
      />
      <View style={styles.inputArea}>

        <Text style={styles.text}>Login:</Text>
        <TextInput
          style={styles.input}
          onChangeText={LoginName}
          placeholder="Insira o seu email aqui"
          value={login}
        />

        <Text style={styles.text}>Senha:</Text>
        <TextInput
        style={styles.input}
          onChangeText={Senha}
          placeholder="Insira sua senha aqui"
          value={senha}
          onchangeText={(texto) => setInput(texto)}
          secureTextEntry={hidePass}
        />
        <TouchableOpacity styles={styles.icon} onPress={() => setHidePass(!hidePass)}>
          { hidePass?
          
          <Ionicons name="eye-off" color="white" size={25}/>
          :
          <Ionicons name="eye" color="white" size={25}/>

        }

        </TouchableOpacity>

        <Pressable style={styles.press} onPress={() => handlePostRequest()}>
        <Text style={styles.textButton}>Entrar</Text>
        </Pressable>
        
        <Text style={styles.links}>Nao tenho uma conta</Text>
        <Text style={styles.links}>Esqueci minha senha</Text>

      </View>
    </View>
  );
}
