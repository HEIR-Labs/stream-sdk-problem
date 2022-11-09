import { render } from '@testing-library/react-native';
import React from 'react';

import { PostCard } from './home';

describe.skip('<HomeScreen />', () => {
  it('<PostCard /> exists', () => {
    const { container } = render(
      <PostCard post={{ id: '1234', title: 'yes', content: 'woo' }} />
    );
    expect(container).toBeTruthy();
  });
});
