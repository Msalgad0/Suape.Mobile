import React, { useState, useEffect } from "react";
import {View, Text, FlatList } from "react-native";

export default function Vouchers({ navigation, route }){
    const [voucherData, setVoucherData] = useState([]);
    const [loading, setLoading] = useState(true);
    var { id } = route.params;

  useEffect(() => {
    // Função para obter dados da API
    const fetchData = async () => {
      try {
      const response = await fetch(`https://api-mobile-25hv.onrender.com/api/Voucher/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              },
          });

        if (!response.ok) {
          throw new Error('Erro ao buscar dados! ');
        }
        const data = await response.json();
        setVoucherData(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>Voucher: {item.voucher_token}</Text>
      {/* Outros elementos do item */}
    </View>
  );

  return (
    <View>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={voucherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.voucher_id.toString()}
        />
      )}
    </View>
  );
}