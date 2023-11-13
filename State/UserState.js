//UserState.js
import { useEffect } from 'react';

useEffect(() => {
  const subscriber = auth().onAuthStateChanged(onUserAuthenticated);
  return subscriber; // unsubscribe on unmount
}, []);

const onUserAuthenticated = (user) => {
  if (user) {
    // User is signed in, navigate to the Home screen
  } else {
    // User is signed out
  }
};
