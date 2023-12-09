import React from "react"
import { View } from "react-native"
import Form from '../Form/Login'

export default function Main({ navigation }){
    return(
        <View>
            <Form navigation={navigation}/>
        </View>    

    );
}