import React from 'react';

import {Header} from '../../components/Header';
import {Background} from '../../components/background/background';
import {BorderlessButton} from 'react-native-gesture-handler';
import {Fontisto} from '@expo/vector-icons';
import {theme} from '../../global/styles/theme';
import BannerImg from '../../../assets/banner.png';
import {styles} from './style';
import {ImageBackground, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Member} from '../../components/member';
import {ListHeader} from '../../components/listHeader';
import {ListDivider} from '../../components/listDivider';
import {ButtonIcon} from '../../components/buttonicon/button';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Erick',
      avatar_url: 'https://github.com/ericksax.png',
    },
    {
      id: '2',
      username: 'Erick',
      avatar_url: 'https://github.com/ericksax.png',
    },
  ];
  return (
    <Background>
      <Header
        title="detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.banerContent}>
          <Text style={styles.title}>Lendarios</Text>
          <Text style={styles.subtitle}>
            e hoje que vamos chegar ao challenger sem perder uma partida md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
