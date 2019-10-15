import React from 'react';
import axios from 'axios';
import {render, fireEvent, waitForElement} from '@testing-library/react-native';

import Fetch from '../../Components/Fetch';

jest.mock('axios', () => ({
  get: jest.fn(() => ({data: {greeting: 'hello there'}})),
}));

test('Fetch makes an API call and displays the greeting', async () => {
  const url = 'https://example.com/get-hello-there';
  const {getByText, getByTestId} = render(<Fetch url={url} />);
  const button = getByText('Fetch');
  fireEvent.press(button);

  const greetingNode = await waitForElement(() => getByTestId('greeting'));

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(url);
  expect(greetingNode.props.children).toBe('hello there');
});
