import React from 'react';
import { View, Text } from 'react-native';
import {Header} from "../../components/header";



export function SecondScreen() {

    return (
        <View style={{flex: 1}}>
            <Header/>
            <Text>SecondScreen</Text>
        </View>
    )
}
