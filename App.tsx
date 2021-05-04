import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { storeIntoDb } from './dbQuery';

const sampleData = require('./sampleDataSet.json');

const App = () => {
  const [message, setMessage] = useState('');

  const storeItems = () => {
    setMessage('');
    storeIntoDb(sampleData);
  };

  const showMessage = () => {
    setMessage('Dummy button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.storeButton} onPress={storeItems}>
        <Text style={styles.label}>Store objects into DB</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dummyButton} onPress={showMessage}>
        <Text style={styles.label}>Dummy</Text>
      </TouchableOpacity>
      <Text style={styles.label}>{message}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  storeButton: {
    backgroundColor: '#4dd0e1',
    padding: 20,
    alignItems: 'center',
  },
  label: { fontSize: 20, fontWeight: '500' },
  dummyButton: {
    marginTop: 20,
    backgroundColor: '#aed581',
    padding: 20,
    alignItems: 'center',
  },
});

export default App;
