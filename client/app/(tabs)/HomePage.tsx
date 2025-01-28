import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer ,useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const { width, height } = Dimensions.get('window');

const Homepage = () => {
   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {/* Your existing content */}
        <View style={[styles.textContainer, { top: 462, left: 23 }]}>
          <Text style={styles.text}>Our latest work</Text>
        </View>
        <Image style={[styles.image, { top: 803, left: 11 }]} />
        <Image style={[styles.image, { top: 448, left: 21 }]} />
        <View style={[styles.bottomBox, { top: 803 }]} />
        <Image style={[styles.line, { top: 802.5 }]} />
        <View style={[styles.scanBox, { top: 95, left: 19 }]}>
          <View style={styles.scanBackground} />
          <View style={styles.scanTextContainer}>
            <Text style={styles.scanText}>Scan and identify the artifact</Text>
            <Image style={styles.scanIcon} />
          </View>
        </View>
        <View style={[styles.myArtifacts, { top: 36, left: 20 }]}>
          <Text style={styles.myArtifactsText}>My Artifacts</Text>
          <Image style={styles.searchIcon} />
        </View>
        <View style={[styles.games, { top: 180, left: 19 }]}>
          <Text style={styles.gamesText}>Games</Text>
          <View style={[styles.gameBox, { top: 63, left: 5 }]} />
          <View style={[styles.gameBox, { top: 99, left: 219 }]} />
          <Image source={require('../assets/images/puzzle.png')} style={[styles.gameIcon, { top: 111, left: 236 }]} />
          <View style={[styles.gameTextContainer, { top: 108, left: 292 }]}>
            <Text style={styles.gameText}>Game 3</Text>
            <Text style={styles.gameSubText}>Puzzle</Text>
          </View>
          <Image source={require('../assets/images/cross.png')} style={[styles.gameIcon, { top: 70, left: 25 }]} />
          <View style={[styles.gameTextContainer, { top: 70, left: 87 }]}>
            <Text style={styles.gameText}>Game 1</Text>
            <Text style={styles.gameSubText}>Quizz</Text>
          </View>
          <Image style={[styles.gameVector, { top: 70, left: 4 }]} />
          <Image style={[styles.gameVector, { top: 111, left: 219 }]} />
          <View style={[styles.gameBox, { top: 155, left: 5 }]} />
          <Image source={require('../assets/images/direction.png')} style={[styles.iconHunt, { top: 171, left: 25 }]} />
          <View style={[styles.gameTextContainer, { top: 162, left: 81 }]}>
            <Text style={styles.gameText}>Game 2</Text>
            <Text style={styles.gameSubText}>Treasure hunt</Text>
          </View>
          <Image style={[styles.gameVector, { top: 165.5, left: 4 }]} />
        </View>
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabItem}>
          <Image source={require('../assets/images/home.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image source={require('../assets/images/like.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}
        onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../assets/images/user.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 430,
    height: 896,
    backgroundColor: '#fff',
    
  },
  box: {
    flex: 1,
  },
  textContainer: {
    width: 129,
    height: 23,
    position: 'absolute',
  },
  text: {
    color: '#333',
    fontSize: 18,
    fontWeight: '500',
  },
  image: {
    width: 374,
    height: 0.5,
    borderWidth: 0.5,
    borderColor: '#d9d9d9',
    position: 'absolute',
  },
  bottomBox: {
    width: 414,
    height: 93,
    backgroundColor: '#fff',
    position: 'absolute',
  },
  line: {
    width: 414,
    height: 0,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    position: 'absolute',
  },
  scanBox: {
    width: 374,
    height: 48,
    position: 'absolute',
  },
  scanBackground: {
    width: 374,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#d4eff5',
  },
  scanTextContainer: {
    width: 247,
    height: 24,
    position: 'absolute',
    top: 12,
    left: 73,
  },
  scanText: {
    color: '#2b8caf',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  scanIcon: {
    width: 24,
    height: 24,
  },
  myArtifacts: {
    width: 355,
    height: 31,
    position: 'absolute',
  },
  myArtifactsText: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 7,
    left: 331,
  },
  games: {
    width: 339,
    height: 214,
    position: 'absolute',
  },
  gamesText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '500',
  },
  gameBox: {
    width: 64,
    height: 59,
    borderRadius: 12,
    position: 'absolute',
  },
  gameIcon: {
    width: 31,
    height: 31,
    position: 'absolute',
  },
  iconHunt: {
    width:41,
    height: 31,
    position: 'absolute',
  },
  gameTextContainer: {
    width: 47,
    height: 41,
    position: 'absolute',
  },
  gameText: {
    color: '#628093',
    fontSize: 12,
    lineHeight: 18,
  },
  gameSubText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },
  gameVector: {
    height: 40,
    borderWidth: 1.5,
    borderColor: '#a559d9',
    position: 'absolute',
  },

  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#e9e9e9',
    borderTopWidth: 1,
    borderTopColor: '#e9e9e9',
    position: 'absolute',
    bottom: 55,
    left: 0,
    right: 0,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabText: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
  },
});

export default Homepage;