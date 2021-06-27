import React from 'react';
import {View} from 'react-native';
import {styles} from './style';

type Props = {
  title: string;
  subtitle: string;
};

export function ListDivider() {
  return <View style={styles.container} />;
}
