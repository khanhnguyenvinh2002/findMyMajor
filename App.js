import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BBViewer from './src/components/BBViewer'
import ValueProvider from './src/components/ValueContext';
export default function App() {
  return (
    <ValueProvider>
       <BBViewer/>
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
