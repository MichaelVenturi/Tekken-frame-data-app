import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const CharacterCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text>hey</Text>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
          style={styles.img}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  img: {
    width: 120,
    height: 120,
  },
});

export default CharacterCard;
