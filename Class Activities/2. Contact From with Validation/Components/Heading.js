import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>
      Contact Form
    </Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    marginBottom: 20
  },
  headerText: {
    textAlign: 'center',
    fontSize: 40,
    color: "#2796ff",
    fontWeight: '200'
  }
});

export default Heading
