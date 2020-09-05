import React from 'react';
import { MainScreen, SecondScreen } from '../screens'
import { createStackNavigator } from '@react-navigation/stack';
import { routeEnum } from '../enums'


const MainStack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={routeEnum.MainScreen}>
            <MainStack.Screen name={routeEnum.MainScreen} component={MainScreen} />
            <MainStack.Screen name={routeEnum.SecondScreen} component={ SecondScreen } />
        </MainStack.Navigator>
    );
}

export default MainStackNavigator
