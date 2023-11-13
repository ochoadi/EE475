//UserAuth.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AuthForm = ({ onSubmit, buttonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title={buttonText} onPress={() => onSubmit(email, password)} />
    </View>
  );
};
export default AuthForm;

// Usage for Sign Up
// <AuthForm onSubmit={signUp} buttonText="Sign Up" />

// Usage for Sign In
// <AuthForm onSubmit={signIn} buttonText="Sign In" />
