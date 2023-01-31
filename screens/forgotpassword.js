import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <AntDesign name="arrowleft" size={25} color="black" />
        <Text style={styles.paragraph}>Forgot Password</Text>
      </View>
      <Text style={styles.tex}>Don’t worry. </Text>
      <Text style={[styles.tex, { marginBottom: 30 }]}>
        Enter your email and we’ll send you a link to reset your password.
      </Text>
      <TextInput
        style={styles.box}
        name="Email"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TouchableOpacity
        style={[
          styles.Button,
          { backgroundColor: '#00A86B', borderRadius: 10, padding: 5 },
        ]}>
        <Text
          style={[styles.buttonText, { color: 'white', fontWeight: 'bold' }]}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
  },
  paragraph: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 50,
    width: '90%',
  },
  box: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  tex: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  Button: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 15,
  },
  title: {
    flexDirection: 'row',
  },
});
