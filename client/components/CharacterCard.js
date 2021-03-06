import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const CharacterCard = props => {
  const onClick = () => {
    props.nav(props.data);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <View style={styles.align_center}>
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
  align_center: {
    alignItems: 'center',
  },
});

export default CharacterCard;
