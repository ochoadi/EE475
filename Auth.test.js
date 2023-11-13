// Auth.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import AuthForm from './Components/Auth/UserAuth'; 

jest.mock('./FirebaseAuth', () => ({
  signUp: jest.fn(),
  signIn: jest.fn(),
}));

describe('AuthForm', () => {
  it('should handle the sign-up process', async () => {
    const mockSignUp = require('./Components/Auth/FirebaseAuth').signUp;
    const { getByPlaceholderText, getByText } = render(
      <AuthForm onSubmit={mockSignUp} buttonText="Sign Up" />
    );

    fireEvent.changeText(getByPlaceholderText('Enter your email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Enter your password'), 'password123');
    fireEvent.press(getByText('Sign Up'));

    await waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });

  it('should handle the sign-in process', async () => {
    const mockSignIn = require('./Components/Auth/FirebaseAuth').signIn;
    const { getByPlaceholderText, getByText } = render(
      <AuthForm onSubmit={mockSignIn} buttonText="Sign In" />
    );

    fireEvent.changeText(getByPlaceholderText('Enter your email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Enter your password'), 'password123');
    fireEvent.press(getByText('Sign In'));

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });
});
