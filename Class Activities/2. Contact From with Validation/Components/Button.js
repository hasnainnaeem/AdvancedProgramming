import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const Button = ({ text, handlePress, isDisabled}) => {
  if(isDisabled)
    return (
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.disabledButton} onPress={handlePress}>
            <Text style={styles.submit}>
              {text}
            </Text>
          </TouchableHighlight>
        </View>
    );
  else return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight underlayColor='#2c63b6' style={styles.button} onPress={handlePress}>
          <Text style={styles.submit}>
            {text}
          </Text>
        </TouchableHighlight>
      </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end'
  },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#2796ff',
    width: 200,
    marginRight: 120,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500
  },
  disabledButton: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'black',
    width: 200,
    marginRight: 120,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500
  },
  submit: {
    color: 'white',
    fontWeight: '600'
  }
})

export default Button
