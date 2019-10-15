import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {render} from '@testing-library/react-native';

import UpdatePropsComponent from '../../Components/UpdatePropsComponent';

test('calling render with the same component on the same container does not remount', () => {
  const {getByTestId, rerender} = render(<UpdatePropsComponent number={2} />);
  expect(getByTestId('number-display')).toHaveTextContent('2');

  rerender(<UpdatePropsComponent number={4} />);
  expect(getByTestId('number-display')).not.toHaveTextContent('2');
  expect(getByTestId('number-display')).toHaveTextContent('4');
});
