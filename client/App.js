import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './components/Header';
import CharacterCard from './components/CharacterCard';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header title="Tekken 7" />
      <View style={styles.container}>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 10,
    flexDirection: 'row',
    //  width: 300,
    // height: 300,
    //maxWidth: 300,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default App;
