import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container} from './styles';

export default function Main() {
  const navigation = useNavigation();

  return (
    <Container>
      <Button
        title="User"
        onPress={() => {
          navigation.navigate('User');
        }}
      />
    </Container>
  );
}
