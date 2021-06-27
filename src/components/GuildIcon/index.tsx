import React from 'react';
import {Image} from 'react-native';

import {styles} from './style';

const uri = 'https://i.redd.it/y3wduhwn4gd61.jpg';

export function GuildIcon() {
  return <Image style={styles.image} source={{uri}} resizeMode="cover" />;
}
