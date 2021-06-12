import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CharacterScreen = ({route, navigation}) => {
  return (
    <View style={styles.flex_1}>
      <Text>{JSON.stringify(route.params)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CharacterScreen;
