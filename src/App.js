import React from 'react';
import {
    StatusBar,
} from 'react-native';
import Root from "./navigators";
import { Provider } from 'react-redux'
import store from './store/store'


const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <StatusBar barStyle="light-content"/>
            <Root/>
        </Provider>
    );
};

export default App;
