import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Welcome to
      </Text>
      <Image
        style={styles.logo}
        source={require('/assets/img/logo/J.gif')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6E5',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 30,
    textAlign: 'center',
    color: '#008037',
    fontFamily: 'Gentium Basic',
    textTransform: 'uppercase',
  },
  logo: {
    width: 300,
    height: 400,
  }
});