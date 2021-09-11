import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1C1C1C;
  padding: 20px;
`;

export const List = styled.FlatList`
`;

export const ListContainer = styled.View`
  background-color: #FFF;
  padding-horizontal: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: 30px;
  padding-top: 20px;
`;

export const Name = styled.Text`
  width: 60%;
  background-color: #FFF;
  color: #1C1C1C;
  font-family: LemonMilk-Bold;
  font-size: 20px;
  text-align-vertical: center;
  padding-horizontal: 10px;
  padding-vertical: 10px;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  padding-horizontal: 20px;
`;

export const Description = styled.Text`
  color: #FFF;
  font-family: LemonMilk-Light;
  font-size: 15px;
`;
