//FirebaseAuth.js

import auth from '@react-native-firebase/auth';

// Sign up function
const signUp = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    console.log('User account created & signed in!');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.error(error);
  }
};

// Sign in function
const signIn = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    console.log('User signed in!');
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    if (error.code === 'auth/user-not-found') {
      console.log('There is no user record corresponding to this identifier.');
    }
    if (error.code === 'auth/wrong-password') {
      console.log('The password is invalid or the user does not have a password.');
    }
    console.error(error);
  }
};
