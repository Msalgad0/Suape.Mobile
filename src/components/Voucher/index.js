import React, { useState, useEffect } from "react";
import {View, 
        Text, 
        FlatList, 
        StyleSheet
      } from "react-native";

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
    <View style={styles.box}>
      <Text style={styles.voucherText}>{item.voucher_token}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meus vouchers</Text> 
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.list}
          data={voucherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.voucher_id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width: '100%',
    backgroundColor: '#fff'
  },
  box: {
      padding: '20%', 
      backgroundColor: '#181A1B',
      maxHeight: '20%',
      maxWidth: '90%',
      marginLeft: '5%',
      borderRadius: 20
    },
  list: {
      width: '100%',
  },

  text: {
      marginTop: '20%',
      color: '#000',
      alignSelf: 'center',
      marginBottom: '5%'
  },
  voucherText:{
    flex: 1,
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20
  }
});