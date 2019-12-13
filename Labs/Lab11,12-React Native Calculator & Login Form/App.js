import React from 'react';
import {View, Text} from 'react-native';
// import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './components/login/Home';
import Dashboard from './components/login/Dashboard';
import { createAppContainer } from 'react-navigation';


const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Dashboard: Dashboard,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
