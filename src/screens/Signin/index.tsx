import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';
import {ButtonIcon} from '../../components/buttonicon/button';
import IllustrationImg from '../../assets/illustration.png';
import {useNavigation} from '@react-navigation/native';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={IllustrationImg}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Canecte-se{'\n'}e organize suas{'\n'}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entre com Discord" onPress={handleSignIn} />
      </View>
    </View>
  );
}
