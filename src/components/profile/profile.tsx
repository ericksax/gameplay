import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from '../avatar/avatar';
import {styles} from './style';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/ericksax.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Ola,</Text>
          <Text style={styles.username}>Erick</Text>
        </View>
        <Text style={styles.message}>Hoje e dia de Vitoria!</Text>
      </View>
    </View>
  );
}
