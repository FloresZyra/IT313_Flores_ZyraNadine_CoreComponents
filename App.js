import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StudentDirectory from './components/StudentDirectory';

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <StudentDirectory />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
