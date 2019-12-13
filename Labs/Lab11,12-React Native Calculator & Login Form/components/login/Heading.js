import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Heading extends React.Component {
  render() {
    return (
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {this.props.children}
          </Text>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    marginBottom: 20
  },
  headerText: {
    textAlign: 'center',
    fontSize: 50,
    color: "#2796ff",
    fontWeight: '400',
  }
});

export default Heading
