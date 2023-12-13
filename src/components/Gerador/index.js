import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

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

    const handlePostRequest = async () => {
        try {
          const url = 'https://api-mobile-25hv.onrender.com/api/Voucher';
    
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
            navigation.navigate('Vouchers', { id: id });
          } else {
            // Requisição falhou, faça algo com base no código de status
            alert("Erro ao criar voucher !");
          }
        } catch (error) {
          console.error('Erro ao processar a requisição:', error);
        }
      };

    return (
        <View>
            <Text>Nome</Text>
            <TextInput
                onChangeText={NomeChange}
                placeholder="Seu Usuario"
                value={nome}
            />

            <Text>Email</Text>
            <TextInput
                onChangeText={EmailChange}
                placeholder="Seu email"
                value={email}
            />

            <Text>Telefone</Text>
            <TextInput
                onChangeText={TelefoneChange}
                placeholder="Seu telefone"
                value={telefone}
            />

            <Button title="Gera Voucher" onPress={() => handlePostRequest()} />
        </View>
    );
}
