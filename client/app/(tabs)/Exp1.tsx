import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions , TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // If you're using React Navigation

import Tabs from './Tabs';

const { width } = Dimensions.get('window');

const Exp1 = () => {
  const navigation = useNavigation(); // Hook to access navigation
  const handleNavigation = (path) => {
    // Example: navigate to the given path
    navigation.navigate('Levels');
  };
  return (
    <View style={styles.container}>
      {/* Tabs Component */}
      <Tabs />

      {/* Scrollable Content */}
      <ScrollView style={styles.content}>
        <TouchableOpacity onPress={() => handleNavigation('MedievalHistory')}>
          <ThemeItem
            image={require('../assets/images/MedievalHistory.jpg')}
            title="Medieval History"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigation('HeritageTourism')}>
          <ThemeItem
            image={require('../assets/images/HeritageTourism.jpg')}
            title="Heritage Tourism"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigation('Constitution')}>
          <ThemeItem
            image={require('../assets/images/Constitution.jpg')}
            title="Constitution"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigation('IndependenceMovement')}>
          <ThemeItem
            image={require('../assets/images/IndependenceMovement.jpg')}
            title="Independence Movement"
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

// ThemeItem Component
const ThemeItem = ({ image, title }) => {
  return (
    <View style={styles.themeItem}>
      <Image source={image} style={styles.themeImage} />
      <Text style={styles.themeTitle}>{title}</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  themeItem: {
    width: '100%',
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover', 
  },
  themeTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    left: 10,
    zIndex: 1, 
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default Exp1;