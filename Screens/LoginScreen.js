// LoginScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const dawgImage = require('./images/dawg.jpg'); // Make sure the path is correct

export default function LoginScreen({ navigation }) {
  //  called when the login button is pressed
  const handleLogin = () => {
    // insert your logic for authentication
    // If the login is successful:
    navigation.navigate('SwipeableDogProfiles');
  };

  return (
    <ImageBackground source={dawgImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput 
          placeholder="Email" 
          style={styles.input}
        />
        <TextInput 
          placeholder="Password" 
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  input: {
    width: '70%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
  },
  button: {
    width: '40%',
    padding: 15,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
