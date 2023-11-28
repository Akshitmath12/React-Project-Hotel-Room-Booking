// Test generated by RoostGPT for test ReactTest1 using AI Type Open AI and AI Model gpt-4-1106-preview

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Error from './Error'; // assuming the test file is adjacent to the Error.jsx component

describe('Error Component', () => {
  // Basic rendering test case
  test('renders without crashing', () => {
    render(
      <Router>
        <Error />
      </Router>
    );
  });

  // Test for presence of Hero component
  test('includes the Hero component', () => {
    render(
      <Router>
        <Error />
      </Router>
    );
    const heroElement = screen.getByTestId('hero'); // You need to add data-testid="hero" to your Hero component
    expect(heroElement).toBeInTheDocument();
  });

  // Test for correct message display
  test('displays correct 404 title and subtitle', () => {
    render(
      <Router>
        <Error />
      </Router>
    );
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('page not found')).toBeInTheDocument();
  });

  // Test for presence and functionality of the link
  test('includes a link to return home', () => {
    render(
      <Router>
        <Error />
      </Router>
    );
    const homeLink = screen.getByRole('link');
    expect(homeLink).toHaveAttribute('href', '/');
  });
});

