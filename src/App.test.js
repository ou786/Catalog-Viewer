import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the app with initial image and details', () => {
  render(<App />);
  const initialImageDetails = screen.getByText(/Lorem ipsum dolor/i);
  expect(initialImageDetails).toBeInTheDocument();
});

test('clicking previous button displays the previous image and details', () => {
  render(<App />);
  const previousButton = screen.getByText(/previous/i);
  fireEvent.click(previousButton);
  const previousImageDetails = screen.getByText(/Ut enim ad minim veniam/i);
  expect(previousImageDetails).toBeInTheDocument();
});

// Add more tests as needed
  