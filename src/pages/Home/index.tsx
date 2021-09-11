import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Network from 'expo-network';

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
    
  const handleIfBandExists = async(id : string) => {
    try {
      const findBandById = await AsyncStorage.getItem(id);

      if(findBandById === null) { 
        const { isInternetReachable } = await Network.getNetworkStateAsync();

        if(isInternetReachable) { 
          const { data } = await api.get<IResponse>(`/${id}`);
        
          const newBand = { 'biography': data.biography, 'genre': data.genre, 'id': id, 'image': data.image, 'name': data.name, 'numPlays': data.numPlays };
  
          await AsyncStorage.setItem(id, JSON.stringify(newBand));
          navigate('Band', {name: data.name, genre: data.genre, image: data.image, numPlays: data.numPlays, biography: data.biography });
        } else { 
          alert('Você está sem internet!');
        }

      } else {
        const band : any = await AsyncStorage.getItem(id);
        const { name, genre, image, numPlays, biography } = JSON.parse(band);

        navigate('Band', {name, genre, image, numPlays, biography });
      }

    } catch(e) {
      // error reading value
    }
  }

  async function getBandById(id:string) { 
    const { data } = await api.get<IResponse>(`/${id}`);

    setBand(data);

    // navigate('Band', { name: data.name, genre: data.genre, image: data.image, numPlays: data.numPlays, biography: data.biography });
  }

  function redirectToBandPage() { 
    // navigate('Band');
  }

  function handleCardPress(id : string) { 
    handleIfBandExists(id);
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
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
        />
      </ListContainer>
    </Container>
  );
}

export default Home;