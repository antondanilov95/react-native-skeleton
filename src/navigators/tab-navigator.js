import {tabEnum} from "../enums";
import BottomNavigator from "../components/bottom-navigator";
import portfolio from "../assets/icons/portfolio.png";
import {SecondScreen} from "../screens";
import balance from "../assets/icons/balance.png";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MainStackNavigator from "./main-stack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName={tabEnum.MainTab}
                       tabBar={props => <BottomNavigator {...props} />}
        >
            <Tab.Screen name={tabEnum.MainTab}
                        component={MainStackNavigator}
                        options={{headerTitle: 'MainTab', tabBarLabel: 'MainTab', icon: portfolio}}
            />
            <Tab.Screen name={tabEnum.SecondTab}
                        component={SecondScreen}
                        options={{headerTitle: 'SecondScreen', tabBarLabel: 'SecondScreen', icon: balance}}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator
