import React from 'react';
import {View, Text} from 'react-native';

class NumberDisplay extends React.Component {
  render() {
    return (
      <View>
        <Text testID="number-display">{this.props.number}</Text>
      </View>
    );
  }
}

export default NumberDisplay;
