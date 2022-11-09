import { render } from '@testing-library/react-native';
import React from 'react';

import { App } from './_app';

describe.skip('<App />', () => {
  it('exists', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
