import React, { useState } from "react";
import { View, Text, TextInput, Button, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from './indexStyle';


export default function Gerador({ navigation, route }) {

    const { id } = route.params;

    const [nome, setNome] = useState("");

    const NomeChange = (Nome) => {
        setNome(Nome);
    };

    const [email, setEmail] = useState("");

    const EmailChange = (Email) => {
        setEmail(Email);
    };

    const [telefone, setTelefone] = useState("");

    const TelefoneChange = (Telefone) => {
        setTelefone(Telefone);
    };

    const [validMsg, setValidMsg] = useState("");

    const handlePostRequest = async () => {
        try {
          const url = 'https://api-mobile-25hv.onrender.com/api/Voucher';
          if(nome.length < 4)
          {
            setValidMsg("Nome inválido !");
            return 0;
          }
          else if (email.length < 4 || !email.includes('@'))
          {
            setValidMsg("Email inválido !");
            return 0;
          }
          else if(telefone.length < 9)
          {
            setValidMsg("Telefone inválido !");
            return 0;
          }
          const data = {
            // Seus dados para enviar no corpo da requisição
            "userId" : id
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
            alert(`Voucher criado com sucesso ! ${json.voucher}`);
            navigation.navigate('Home', { id: id });
          } else {
            // Requisição falhou, faça algo com base no código de status
            alert("Erro ao criar voucher !");
          }
        } catch (error) {
          console.error('Erro ao processar a requisição:', error);
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nome</Text>
            <TextInput  style={styles.input}
                onChangeText={NomeChange}
                placeholder="Seu nome"
                value={nome}
            />

            <Text style={styles.text}>Email</Text>
            <TextInput  style={styles.input}
                onChangeText={EmailChange}
                placeholder="Seu email"
                value={email}
            />

            <Text style={styles.text}>Telefone</Text>
            <TextInput  style={styles.input}
                onChangeText={TelefoneChange}
                placeholder="Seu telefone"
                value={telefone}
            />

        <Text style={styles.text}>{validMsg}</Text>
        
        <Pressable style={styles.button} onPress={handlePostRequest}>
        <Text style={styles.textPress}>Gera Voucher</Text>
        </Pressable>
            </View>
    );
}
