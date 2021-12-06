import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductCategoryPage from './src/screens/ProductCategoryPage';

export default function App() {
  return (
    <View>
      <ProductCategoryPage />
      <StatusBar style="auto" />
    </View>
  );
}

