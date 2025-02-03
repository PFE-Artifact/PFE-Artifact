import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Tabs = () => {
  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity style={[styles.tab, styles.activeTab]}>
        <Text style={styles.tabText}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Geography</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Science</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Economy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingTop: 67,
    paddingBottom: 11.75,
  },
  tab: {
    width: 98,
    height: 34,
    borderRadius: 20.56,
    backgroundColor: 'rgba(0, 58, 221, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#003ADD',
  },
  tabText: {
    color: '#FFFFFF',
    fontSize: 13.31,
  },
});

export default Tabs;