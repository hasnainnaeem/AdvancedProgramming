import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';

import Heading from './Heading';
import Label from './Label';
import Button from './Button';


export default class Home extends Component {
    state = {username: '', password: ''};

    static navigationOptions = {header: null};

    loginAction(status) {
        if(status === 200)
            this.props.navigation.navigate('Dashboard');
        else
            Alert.alert('Error', 'Username or password did not match.', [{text: 'Okay'}]);
    }

    handleLogin() {
        const {username, password} = this.state;
        (async () => {
            let response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: username, password: password})
            });
            this.loginAction(response.status);
        })();
    }

    handleUsernameChange = (username)=> {
        this.setState({username: username})
    };

    handlePasswordChange = (password)=> {
        this.setState({password: password})
    };

    render() {
        return (
            <View style={styles.container}>
                <Heading>Login</Heading>
                <Label>Username</Label>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.state.username}
                        style={styles.input}
                        placeholderTextColor='#CACACA'
                        selectionColor='#666666'
                        onChangeText={this.handleUsernameChange}
                    />
                </View>
                <Label>Password</Label>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.state.password}
                        style={styles.input}
                        placeholderTextColor='#CACACA'
                        selectionColor='#666666'
                        onChangeText={this.handlePasswordChange}
                        secureTextEntry={true}
                    />
                </View>
                <Button text="Login" handlePress={() => this.handleLogin()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        marginLeft: 40,
        marginRight: 40,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 }
    },
    input: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#2796ff',
        paddingLeft: 20,
        paddingRight: 20,
    }
});
