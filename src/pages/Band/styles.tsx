import styled from 'styled-components/native';

import { Image } from 'react-native-elements';

export const Container = styled.View`
  flex: 1;
  background-color: #1C1C1C;
`;

export const BackgroundImage = styled.ImageBackground`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Divider = styled.View`
  width: 70%;
  height: 1px;
  background-color: #C4EF50;
  align-self: flex-end;
`;

export const Row = styled.View`
  align-items: flex-end;
  padding: 20px;
`;

export const Name = styled.Text`
  background-color: #FFF;
  color: #1C1C1C;
  font-family: LemonMilk-Bold;
  font-size: 20px;
  text-align-vertical: center;
  padding-horizontal: 20px;
  padding-vertical: 10px;
`;

export const Genre = styled.Text`
  font-family: LemonMilk-Light;
  font-size: 15px;
  color: #FFF;
  margin-top: 10px;
`;

export const Description = styled.View`
  padding: 20px;
  margin-horizontal: 20px;
  background-color: #C4EF50;
`;

export const Text = styled.Text`
  font-family: LemonMilk-Light;
  font-size: 10px;
  color: #1C1C1C;
`;

export const Plays = styled.Text`
  font-family: LemonMilk-Light;
  font-size: 15px;
  color: #FFF;
  margin-vertical: 10px;
  margin-horizontal: 20px;
`;