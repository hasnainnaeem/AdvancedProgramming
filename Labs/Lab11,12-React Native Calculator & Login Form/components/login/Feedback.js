import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Feedback = ({text, type})=>{
    if(type==="negative")
        return <Text style={styles.negative}>{text}</Text>;
    else
        return <Text style={styles.positive}>{text}</Text>;
};

const styles = StyleSheet.create({
    positive: {
        color: "green",
        marginLeft: 40,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: '100'
    },
    negative: {
        color: "red",
        marginLeft: 40,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: '100'
    }
});

export default Feedback;
