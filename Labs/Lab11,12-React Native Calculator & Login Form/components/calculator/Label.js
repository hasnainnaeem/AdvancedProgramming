import React from 'react'
import { Text, StyleSheet } from 'react-native'

class Label extends React.Component {
    render(){
        return <Text style={styles.label}>{this.props.text}</Text>;
    }
}

const styles = StyleSheet.create({
    label: {
        marginLeft: 40,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: '100'
    }
});


export default Label;
