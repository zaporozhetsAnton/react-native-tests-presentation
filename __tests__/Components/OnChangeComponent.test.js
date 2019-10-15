import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {render, fireEvent} from '@testing-library/react-native';

import OnChangeComponent from '../../Components/OnChangeComponent';

test('sets the value to the input', () => {
  const {getByTestId} = render(<OnChangeComponent />);
  const input = getByTestId('input');
  const wrapper = getByTestId('wrapper');
  const newValue = 'new text';

  expect(wrapper).toHaveTextContent('Useless Placeholder');
  fireEvent.changeText(input, newValue);
  expect(wrapper).not.toHaveTextContent('Useless Placeholder');
  expect(wrapper).toHaveTextContent('new text');
});
