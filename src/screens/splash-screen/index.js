import {View, ActivityIndicator} from "react-native";
import React from "react";
import {colors} from "../../styles";

export function SplashScreen() {

    return (
        <View>
            <ActivityIndicator size="large" color={colors.red}/>
        </View>
    );
}
