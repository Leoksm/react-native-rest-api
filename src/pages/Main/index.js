import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Form, Input, SubmitButton} from './styles';

export default function Main() {
  const navigation = useNavigation();
  navigation.setOptions({
    title: 'Users',
  });

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Add User"
        />
        <SubmitButton>
          <Icon name="add" size={20} color="#FFF" />
        </SubmitButton>
      </Form>
    </Container>
  );
}
