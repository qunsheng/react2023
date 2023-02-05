import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rick and Morty/i);
  expect(linkElement).toBeInTheDocument();
});
