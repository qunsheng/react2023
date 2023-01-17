import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1', () => {
  render(<App />);
  const linkElement = screen.getByText(/I am child/i);
  expect(linkElement).toBeInTheDocument();
});
