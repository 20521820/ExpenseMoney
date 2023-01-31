import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function ResetPassword () {
  const [newpassword, setNewPassword] = useState('');
  const [retypepasswosrd, setRetypePassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Reset Password
      </Text>
      <TextInput
        style={styles.box}
        name="New password"
        placeholder="New password"
        onChangeText={setNewPassword}
        value={newpassword}
      />
      <TextInput
        style={styles.box}
        name="Retype new password"
        placeholder="Retype new password"
        onChangeText={setRetypePassword}
        value={retypepasswosrd}
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
});
