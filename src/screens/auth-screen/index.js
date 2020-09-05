import {View, Text} from "react-native";
import React from "react";
import {Button} from "../../components/button";
import {Input} from "../../components/Input";
import {useDispatch, useSelector} from "react-redux";
import {accountActions} from "../../store/actions";
import styles from "./styles";

export function AuthScreen() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const error = useSelector(state => state.account.error);
    const dispatch = useDispatch();

    return (
        <View>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.errorText}>{error}</Text>
            <View style={styles.inputsContainer}>
                <Input
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <Button onPress={
                ()=>dispatch(accountActions.login({name: username, password}))
            }
            style={styles.loginButton}>
                Login
            </Button>
        </View>
    );
}
