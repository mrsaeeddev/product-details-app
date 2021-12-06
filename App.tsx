import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductCategoryPage from './src/screens/ProductCategoryPage';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>    <View>
      <ProductCategoryPage />
      <StatusBar style="auto" />
    </View>
    </QueryClientProvider>

  );
}

