import React from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';

class Fetch extends React.Component {
  state = {};
  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.fetch();
    }
  }
  fetch = async () => {
    const response = await axios.get(this.props.url);
    this.setState({data: response.data});
  };
  render() {
    const {data} = this.state;
    return (
      <View>
        <Button title="Fetch" onPress={this.fetch} />
        {data ? <Text testID="greeting">{data.greeting}</Text> : null}
      </View>
    );
  }
}

export default Fetch;
