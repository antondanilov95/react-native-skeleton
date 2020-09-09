import React, {useEffect} from 'react';
import {
    StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Root from "./navigators";
import { Provider } from 'react-redux'
import store from './store/store'


const App: () => React$Node = () => {
    useEffect(()=> {
        SplashScreen.hide()
    },[])
    return (
        <Provider store={store}>
            <StatusBar barStyle="dark-content"/>
            <Root/>
        </Provider>
    );
};

export default App;
