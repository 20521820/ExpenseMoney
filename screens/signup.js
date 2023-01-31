import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useTogglePasswordVisibility } from './hooks/useTogglePasswordVisibility';
export default function Signup() {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Sign Up</Text>
      <TextInput
        style={styles.box}
        name="Name"
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.box}
        name="Email"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          name="password"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry={passwordVisibility}
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={(text) => setPassword(text)}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
      </View>
      <TouchableOpacity
        style={[
          styles.Button,
          { backgroundColor: '#00A86B', borderRadius: 10, padding: 5 },
        ]}>
        <Text
          style={[styles.buttonText, { color: 'white', fontWeight: 'bold' }]}>
          SIGN UP
        </Text>
      </TouchableOpacity>
      <Text style={styles.tex}> Or with </Text>
      <TouchableOpacity
        style={[styles.Button, { backgroundColor: 'white', flexDirection: 'row'}]}>
        <Ionicons style={styles.icons} name="logo-google" size={22} color="black" />
        <Text
          style={[styles.buttonText, { color: 'black', fontWeight: 'bold', width: '60%' }]}>
          Sign Up with Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.Button,
          { backgroundColor: 'white', borderRadius: 10, borderColor: 'gray' },
        ]}>
        <Text style={[styles.buttonText, { color: 'black' }]}>
          Already have an account? Login
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
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
  },
  tex: {
    textAlign: 'center',
    padding: 10,
    fontSize: 15,
  },
  box: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  buttonText: {
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 15,
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    marginTop: 10,
  },
  inputField: {
    padding: 10,
    fontSize: 15,
    width: '90%',
  },
  Button: {
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  icons: {
    marginLeft: 50,
  }
});
