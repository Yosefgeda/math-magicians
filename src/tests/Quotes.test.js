import React from 'react';
import { render, screen } from '@testing-library/react';
import Quotes from '../components/Quotes';

describe('Quotes', () => {
  test('renders loading state initially', () => {
    render(<Quotes />);
    const loadingState = screen.getByText('Loading Quote...');
    expect(loadingState).toBeInTheDocument();
  });
});