import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

class Input extends React.Component {
  state = {value: ""};

  handleChange = (text)=> {
    this.setState({value: "samka"});
  };

  render(){
    return(
        <View style={styles.inputContainer}>
          <TextInput
              value={this.state.value}
              style={{...styles.input, ...style}}
              placeholderTextColor='#CACACA'
              selectionColor='#666666'
              onChangeText={this.handleChange}
              secureTextEntry={true}
          />
        </View>
    )
  }
}

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
});

export default Input
