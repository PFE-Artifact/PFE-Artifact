import React, { useState } from 'react';
import { Alert } from 'react-native';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth ,signInWithEmailAndPassword } from '../firebase'; // Firebase import

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (): Promise<void> => {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
      console.log('User signed in:', user);
      navigation.navigate('HomePage');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {/* Background Design */}
        <View style={styles.background}>
          <View style={[styles.circle, styles.circle1]} />
          <View style={[styles.circle, styles.circle2]} />
        </View>

        {/* Login Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login here</Text>
          <Text style={styles.subtitle}>
            Welcome back you’ve{'\n'}been missed!
          </Text>

          {/* Image between text and input */}
          <Image
            source={require('../assets/images/Login.png')} // Your image path here
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.inputBox, email ? styles.activeInput : null]}
            placeholder="Email"
            placeholderTextColor="#626262"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.inputBox, password ? styles.activeInput : null]}
            placeholder="Password"
            placeholderTextColor="#626262"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleSignIn} 
          >
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>
        </View>

        {/* Create Account Button */}
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('Register')} // Ensure this navigates to Register screen
        >
          <Text style={styles.createAccountText}>Create an account</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    zIndex: -1,
  },
  circle: {
    position: 'absolute',
    borderWidth: 3,
    borderColor: '#F8F9FF',
  },
  circle1: {
    width: 635,
    height: 635,
    borderRadius: 317.5,
    top: -150,
    left: 100,
  },
  circle2: {
    width: 496,
    height: 496,
    borderRadius: 248,
    top: 50,
    left: 200,
  },
  titleContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1F41BB',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: 250,
    height: 250,
  },
  inputContainer: {
    width: '85%',
    alignItems: 'center',
  },
  inputBox: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F1F4FF',
    marginBottom: 20,
  },
  activeInput: {
    borderWidth: 2,
    borderColor: '#1F41BB',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#1F41BB',
    marginBottom: 20,
  },
  signInButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#1F41BB',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  createAccountButton: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  createAccountText: {
    fontSize: 14,
    color: '#494949',
  },
});
