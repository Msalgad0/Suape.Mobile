import React from "react"
import {View, Text, StyleSheet, Pressable, Image, FlatList} from "react-native"

export default function Home({ navigation, route }){
    
    const { id } = route.params;

    const renderItem = ({ item }) => (
        <>
        <Image style={styles.img} source={{uri: item.img}}></Image>
        <View style={styles.viewList}>
        <Text style={styles.listText}>{item.title}</Text>
        </View>
        </>
        );

      const data = [
        {
          id: 1,
          img: 'https://conectasuape.netlify.app/img/Restaurante.jpeg',
          title: 'Restaurantes',
        },
        {
          id: 2,
          img: 'https://conectasuape.netlify.app/img/Restaurante.jpeg',
          title: 'Restaurantes',
        },
        {
          id: 3,
          img: 'https://conectasuape.netlify.app/img/Restaurante.jpeg',
          title: 'Restaurantes',
        },
        {
          id: 4,
          img: 'https://conectasuape.netlify.app/img/Restaurante.jpeg',
          title: 'Restaurantes',
        }
      ];

      const handleCadastro = () => {
        // Navegar para outra tela
        navigation.navigate('Gerador', { id: id });
      };
      const handleVouchers = () => {
        navigation.navigate('Vouchers', { id: id });
      }
    
      return (
        <View style={styles.container}>
        <FlatList
        style={styles.FlatList}
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
            <View style={styles.navbar}>

            <Pressable style={styles.press} 
            onPress={handleCadastro}>
          <Text style={styles.textPress}>New Voucher</Text>
          </Pressable>

          <Pressable style={styles.press}
          onPress={handleVouchers}>
          <Text style={styles.textPress}>Vouchers</Text>
          </Pressable>

            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    FlatList: {
    maxHeight: '85%'
    },
    press: {      
      width: '23%',
      marginBottom: 10,
      height: '70%',
      backgroundColor: '#fff',
      borderRadius: 5,
      backgroundColor: '#181A1B',
      marginTop: '2%'
    },
    textPress:{
      color: "#fff"
    },
    navbar: {
      backgroundColor: '#181A1B',
      height: "12%",
      width: '100%',
      marginBottom: '-9%',
      flexDirection: 'row', // Alinha os itens horizontalmente
      justifyContent: 'space-around', // Distribui o espaço entre os itens
      padding: 16,
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        backgroundColor: '#fff'    
    },
    img:{
        flex: 1,
        width: 365,
        height: 180,
        marginBottom: 16,
        marginTop: '5%'
    },
    viewList:{
        backgroundColor: '#181A1B',
        marginTop: '-10%',
        height: 50,
    },
    listText: {
        alignSelf: 'center',
        color: '#FFF',
        marginTop: '3%',
        fontSize: 24,
        fontFamily: 'Roboto'
    }
});