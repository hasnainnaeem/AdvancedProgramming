import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export  default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to admin panel.</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginLeft: 40,
        marginTop: 40
    },
});

