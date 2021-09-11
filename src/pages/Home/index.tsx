import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { bandList } from '../../data/bands';
import { api } from '../../util/api';

import Card from './Card';

import { Container, List, Name, Header, Description, ListContainer } from './styles';

interface IBandList { 
  item: { 
    name: string;
    id: string;
  }
}

interface IResponse {  
  name: string;
  genre: string;
  image: string;
  numPlays: number;
  biography: string;
}

const Home: React.FC = () => {
  const { navigate } = useNavigation();
    
  async function getBandById(id:string) { 
    const { data } = await api.get<IResponse>(`/${id}`);

    navigate('Band', { name: data.name, genre: data.genre, image: data.image, numPlays: data.numPlays, biography: data.biography });
  }

  function redirectToBandPage() { 
    // navigate('Band');
  }

  function handleCardPress(id : string) { 
    getBandById(id);
  };

  function renderItem({ item } : any) {
    return (
      <Card
        key={item.id}
        name={item.name}
        onPress={() => handleCardPress(item.id)}
      />
    )
  }

  return (
    <Container>
      <Header>
        <Name>ROCK IN' LIST</Name>
        <Description>CHOOSE THE BAND</Description>
        <Description>TO SEE MORE...</Description>
      </Header>
      <ListContainer>
        <List
          data={bandList}
          renderItem={item => renderItem(item)}
          showsVerticalScrollIndicator={false}
        />
      </ListContainer>
    </Container>
  );
}

export default Home;