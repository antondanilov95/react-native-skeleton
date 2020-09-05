import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import {Header} from "../../components/header";
import {accountActions} from "../../store/actions";
import {Button} from "../../components/button";



export function MainScreen() {
    const user = useSelector(state => state.account.user);
    const dispatch = useDispatch();

    return (
        <View style={{flex: 1}}>
            <Header/>
            <Text>My name is {user.name}</Text>
            <Text>MainScreen</Text>
            <Button onPress={()=>dispatch(accountActions.setName('Alex'))}>
                Change name
            </Button>
        </View>
    )
}
