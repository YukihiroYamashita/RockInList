import React from 'react';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import bg from '../../assets/bg.png';
import back from '../../assets/back.png';

import { Container, BackgroundImage, Row, Name, Genre, Description, Text, Plays, Divider, Logo } from './styles';

interface IParams { 
  name: string;
  genre: string;
  image: string;
  numPlays: number;
}

const Band: React.FC = () => {
  const { name, genre, image, numPlays, biography } = useRoute().params;

  console.log(image)

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: 'red' }}
      showsVerticalScrollIndicator={false}
    >
      <BackgroundImage source={bg}>
        <Logo
          source={{ uri: image }}
        />
      </BackgroundImage>
      <Container>
        <Divider/>
        <Row>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </Row>
        <Description>
          <Text>{biography}</Text>
        </Description>
        <Plays>PLAYS: {numPlays}</Plays>
      </Container>
    </ScrollView>
  );
}

export default Band;