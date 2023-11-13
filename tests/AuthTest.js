import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import AuthForm from './UserAuth'; // Use the correct path to your AuthForm component
import { signUp, signIn } from './FirebaseAuth'; // Use the correct path to your FirebaseAuth functions

// Mock the Firebase auth module
jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    createUserWithEmailAndPassword: jest.fn(() => Promise.resolve('User account created & signed in!')),
    signInWithEmailAndPassword: jest.fn(() => Promise.resolve('User signed in!')),
  });
});

describe('AuthForm', () => {
  it('should handle the sign-up process', async () => {
    const mockSignUp = jest.fn(signUp);
    const { getByPlaceholderText, getByText } = render(
      <AuthForm onSubmit={mockSignUp} buttonText="Sign Up" />
    );

    act(() => {
      fireEvent.changeText(getByPlaceholderText('Enter your email'), 'test@example.com');
      fireEvent.changeText(getByPlaceholderText('Enter your password'), 'password123');
      fireEvent.press(getByText('Sign Up'));
    });

    await waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });

  it('should handle the sign-in process', async () => {
    const mockSignIn = jest.fn(signIn);
    const { getByPlaceholderText, getByText } = render(
      <AuthForm onSubmit={mockSignIn} buttonText="Sign In" />
    );

    act(() => {
      fireEvent.changeText(getByPlaceholderText('Enter your email'), 'test@example.com');
      fireEvent.changeText(getByPlaceholderText('Enter your password'), 'password123');
      fireEvent.press(getByText('Sign In'));
    });

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });
});
