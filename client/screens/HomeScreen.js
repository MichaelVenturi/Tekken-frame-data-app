import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Header from '../components/Header';
import CharacterCard from '../components/CharacterCard';

const HomeScreen = ({navigation}) => {
  const nav = details => {
    navigation.navigate('Details', details);
  };

  return (
    <View style={styles.flex_1}>
      <Header title="Tekken 7" />
      <View style={styles.container}>
        <CharacterCard nav={nav} data={{test: '22', test2: '66'}} />
        <CharacterCard nav={nav} data={{test: '33', test2: '44'}} />
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flex_1: {
    flex: 1,
  },
});

export default HomeScreen;
