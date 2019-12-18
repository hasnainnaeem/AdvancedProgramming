import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = ({ inputChange, inputValue, placeholder, style, multiline}) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={{...styles.input, ...style}}
      placeholder={placeholder}
      placeholderTextColor='#CACACA'
      selectionColor='#666666'
      onChangeText={inputChange}
      multiline={multiline}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 40,
    marginRight: 40,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }
  },
  input: {
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
  }
})

export default Input
