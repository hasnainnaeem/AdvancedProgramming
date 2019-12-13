import React from 'react'
import { Text, StyleSheet } from 'react-native'

class Label extends React.Component {
    render(){
        return <Text style={styles.label}>{this.props.children}</Text>;
    }
}

const styles = StyleSheet.create({
    label: {
        marginTop: 5,
        marginBottom: 5,
        fontWeight: '100',
        color: "#2796ff",
        textAlign: 'center',
    }
});


export default Label;
