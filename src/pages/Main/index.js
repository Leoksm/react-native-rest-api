import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Main() {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="User"
        onPress={() => {
          navigation.navigate('User');
        }}
      />
    </View>
  );
}
