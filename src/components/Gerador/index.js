import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function gerador() {

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

            <Button title="Gera Voucher" />
        </View>
    );
}
