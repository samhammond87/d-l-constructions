import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Timesheet Library', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/timesheet library/i);
  expect(linkElement).toBeInTheDocument();
});
