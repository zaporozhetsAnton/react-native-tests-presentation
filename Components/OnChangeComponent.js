import React from 'react';
import {TextInput, View, Text} from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View testID="wrapper">
      <Text>{value}</Text>
      <TextInput
        testID="input"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}
