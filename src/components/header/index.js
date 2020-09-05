import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";
import {useDispatch} from "react-redux";
import {accountActions} from "../../store/actions";

export function Header() {
    const dispatch = useDispatch();


    return (
        <View style={ styles.headerContainer }>
            <Text style={styles.headerTitle}>Header</Text>
            <TouchableOpacity onPress={()=>{
                dispatch(accountActions.logout())
            }} style={styles.logoutButton}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

