import { render, screen } from '@testing-library/react';
import Status from './Status';

test('renders the greeter correctly without a name', () => {
  render(<Status />);
  const pElement = screen.getByText(/stranger/i);
  expect(pElement).toBeInTheDocument();
});