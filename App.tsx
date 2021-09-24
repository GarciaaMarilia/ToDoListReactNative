import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ToDo } from './src/pages/ToDo';

export default function App() {
  return (
    <>
      <ToDo/>
      <StatusBar style="auto" />
    </>
  );
}
