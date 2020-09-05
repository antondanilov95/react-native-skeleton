import {routeEnum, tabEnum} from "../enums";
import DrawerMenu from "../components/drawer-menu";
import {HelpScreen} from "../screens";
import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabNavigator from "./tab-navigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName={tabEnum.HomeTab}
                          drawerContent={DrawerMenu}
        >
            <Drawer.Screen name={tabEnum.HomeTab} component={TabNavigator}/>
            <Drawer.Screen name={routeEnum.HelpScreen} component={HelpScreen}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
