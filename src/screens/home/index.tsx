import React from 'react';
import {View, FlatList} from 'react-native';
import {Profile} from '../../components/profile/profile';
import {styles} from './style';
import {ButtonAdd} from '../../components/buttonAdd';
import {CategorySelect} from '../../components/categorySelect';
import {useState} from 'react';
import {ListHeader} from '../../components/listHeader';
import {Appointment} from '../../components/Appointment/appointment';
import {ListDivider} from '../../components/listDivider';
import {useNavigation} from '@react-navigation/native';

export function Home() {
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const apponintments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  function handleApponintmentDetail() {
    navigation.navigate('AppointmentDetails');
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category} // categorySelected e uma variavel para relacionar o categoryId com o category.
        setCategory={handleCategorySelect}
      />
      <ListHeader title="Partidas agendadas" subtitle="total 6" />
      <FlatList
        data={apponintments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Appointment data={item} onPress={handleApponintmentDetail} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.matches}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
