import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';



export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Background Circles */}
      <View style={[styles.backgroundCircle, styles.circle1]} />
      <View style={[styles.backgroundCircle, styles.circle2]} />
      <View style={[styles.largeCircle, styles.circle3]} />
      <View style={[styles.largeCircle, styles.circle4]} />

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image 
        source={require('../assets/images/home (1).png')}
          style={styles.image} 
          resizeMode="contain" 
        />
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ancient Artifact</Text>
        <Text style={styles.subtitle}>
          Discover the mystery and history behind this ancient artifact. Unlock secrets from a bygone era.
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.activeButton}
          onPress={() => navigation.navigate('Login')} 
        >
          <Text style={styles.activeButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.defaultButton}>
          <Text style={styles.defaultButtonText}
           onPress={() => navigation.navigate('Register')}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundCircle: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#f1f4ff',
  },
  circle1: {
    width: 372,
    height: 372,
    borderRadius: 186,
    top: 625,
    left: -323,
    transform: [{ rotate: '-27.09deg' }],
  },
  circle2: {
    width: 372,
    height: 372,
    borderRadius: 186,
    top: 684,
    left: -265,
  },
  largeCircle: {
    position: 'absolute',
    width: 496,
    height: 496,
    borderRadius: 248,
  },
  circle3: {
    top: -142,
    left: 57,
    borderWidth: 3,
    borderColor: '#f8f9ff',
  },
  circle4: {
    top: -327,
    left: 148,
    backgroundColor: '#f8f9ff',
  },
  imageContainer: {
    width: 463,
    height: 470,
    marginTop: 50,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: 343,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#0244d4',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    width: 343,
  },
  activeButton: {
    width: 160,
    backgroundColor: '#1f41bb',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
  defaultButton: {
    width: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  defaultButtonText: {
    color: '#0a0a0a',
    fontSize: 20,
    textAlign: 'center',
  },
});