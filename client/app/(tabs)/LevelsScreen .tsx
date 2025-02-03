import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LevelsScreen= () => {
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <View style={styles.headerBackground} />
        <View style={styles.spacer} />
        <Text style={styles.headerText}>Levels</Text>
      </View>

      {/* Achievement Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardBackground} />
          <View style={styles.cardOverlay} />
          <Text style={styles.cardTitle}>Beginner</Text>
          <Text style={styles.cardSubtitle}>Unlock your first card!</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%' ,
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#ffff',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: -18,
    width: '100%',
    height: 69,
  },
  headerBackground: {
    width: 500,
    height: 69,
    backgroundColor: '#003add',
  },
  spacer: {
    position: 'absolute',
    top: 16,
    left: 37,
    width: 37,
    height: 37,
  },
  headerText: {
    position: 'absolute',
    top: 29,
    left: (width - 425) / 2 - 50, // Adjust based on screen width
    color: 'white',
    fontSize: 17,
    lineHeight: 17 * 0.81,
  },
  cardContainer: {
    position: 'absolute',
    top: 120,
    left: 32,
    width: 350,
    height: 147,
  },
  card: {
    width: 325,
    height: 117,
    borderRadius: 15,
    backgroundColor: 'rgba(163, 185, 246, 0.58)',
    borderWidth: 1,
    borderColor: '#7a1fa0',
    overflow: 'hidden',
  },
  cardBackground: {
    width: 325,
    height: 117,
    borderRadius: 15,
    backgroundColor: 'rgba(20, 83, 255, 0.07)',
    borderWidth: 1,
    borderColor: '#7a1fa0',
  },
  cardOverlay: {
    position: 'absolute',
    top: 16,
    left: 13,
    width: 91,
    height: 85,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.91)',
  },
  cardTitle: {
    position: 'absolute',
    top: 20,
    left: (325 - 100) / 2 - 6 ,
    color: '#fff',
    fontSize: 17,
    lineHeight: 17 * 0.81,
  },
  cardSubtitle: {
    position: 'absolute',
    top: 44,
    left: (325 - 150) / 2 + 20.5, // Adjust based on card width
    color: '#ffff',
    fontSize: 12,
    lineHeight: 12 * 1.14,
  },
});

export default LevelsScreen