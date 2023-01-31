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

import { useTogglePasswordVisibility } from './hooks/useTogglePasswordVisibility';

export default function Login() {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Login</Text>
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
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.Button,
          { backgroundColor: 'white', borderRadius: 10, borderColor: 'gray' },
        ]}>
        <Text style={[styles.buttonText, { color: 'black', fontWeight: 'bold' }]}>
          Forgot password?
        </Text>
      </TouchableOpacity>
    <TouchableOpacity
        style={[
          styles.Button,
          { backgroundColor: 'white', borderRadius: 10, borderColor: 'gray' },
        ]}>
        <Text style={[styles.buttonText, { color: 'black' }]}>
          Don’t have an account yet? Sign Up
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
  box: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
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
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});
