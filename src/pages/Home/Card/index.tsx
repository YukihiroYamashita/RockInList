import React from 'react';
import { View } from 'react-native';

import { Container, Title, TitleContainer } from './styles';

interface IProps { 
  name: string;
  onPress: () => void;
}

const Card: React.FC<IProps> = ({ name, onPress }) => {
  return (
    <Container onPress={onPress}>
      <TitleContainer>
        <Title>{name}</Title>
      </TitleContainer>
    </Container>
  );
}

export default Card;