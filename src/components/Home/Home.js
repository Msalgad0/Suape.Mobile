import React from "react"
import {View, Text, StyleSheet, Image, FlatList} from "react-native"

export default function Home(){

    const renderItem = ({ item }) => (
        <>
        <Image  style={styles.img} source={{uri: item.img}}></Image>
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
    
      return (
        <View style={styles.container}>
        <FlatList
        style={styles.FlatList}
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
        </View>
      );
}

const styles = StyleSheet.create({
    FlatList: {
    maxHeight: '85%'
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