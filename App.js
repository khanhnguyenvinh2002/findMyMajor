import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/components/HomePage'
import ValueProvider from './src/components/ValueContext';
export default function App() {
  return (
    <ValueProvider>
       <HomePage/>
       </ValueProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
