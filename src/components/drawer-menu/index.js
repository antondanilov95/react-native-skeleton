import React from 'react'
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import coins from '../../assets/icons/coins.png'
import money from '../../assets/icons/money.png'
import rnLogo from '../../assets/icons/react-native-logo.png'
// import { routeNames } from '../enums/index';
// import { drawerService } from '../services';
import styles from "./styles";
import {DrawerContentScrollView} from "@react-navigation/drawer";
import {routeEnum} from "../../enums";
import {navigate} from "../../utils/navigation";

const drawerItems = [
    {
        routeName: routeEnum.MainScreen,
        icon: coins,
        title: 'Main page'
    },
    {
        routeName: routeEnum.HelpScreen,
        icon: money,
        title: 'Help'
    }
]

const DrawerMenu = ( props ) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={ styles.menuContainer}>
                <View style={styles.itemsContainer}>
                    {drawerItems.map((menuItem, index) =>
                        <TouchableOpacity style={styles.button}
                                          key={index}
                                          onPress={ () => {navigate(menuItem.routeName)} }
                        >
                            <Image style={styles.icon} source={ menuItem.icon }/>
                            <Text style={styles.title}>{menuItem.title}</Text>
                        </TouchableOpacity>
                    )}
                </View>
                <Image
                    source={rnLogo}
                    style={ styles.logo }
                />
            </View>
        </DrawerContentScrollView>
    );
}



export default DrawerMenu
