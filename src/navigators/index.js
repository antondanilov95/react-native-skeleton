import React, {useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from "./drawer-navigator";
import {createStackNavigator} from "@react-navigation/stack";
import {AuthScreen, SplashScreen} from "../screens";
import {navigationRef} from '../utils/navigation';
import {routeEnum, tabEnum} from "../enums";
import store from "../store/store";
import {accountActions} from "../store/actions";
import {useSelector} from "react-redux";

const AppStack = createStackNavigator()

const AppStackNavigator = () => {

    useEffect(()=>{
        (async function initAccount() {
            await store.dispatch(accountActions.initAccount())
        })()
    }, [])

    const account = useSelector(state => {
        return state.account
    })

    const getStack = account => {
        if(account.isLoading){
            return <AppStack.Screen
                name={routeEnum.SplashScreen}
                component={SplashScreen}
            />
        }
        if(account.token){
            return <AppStack.Screen
                name={tabEnum.DrawerTab}
                component={DrawerNavigator}
            />
        }
        return <AppStack.Screen
            name={routeEnum.AuthScreen}
            component={AuthScreen}
        />
    }

    return (
        <AppStack.Navigator headerMode={false}>
            {getStack(account)}
        </AppStack.Navigator>
    )
}


const Root = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <AppStackNavigator/>
        </NavigationContainer>
    )
}

export default Root
