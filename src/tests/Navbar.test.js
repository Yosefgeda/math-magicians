import { screen } from '@testing-library/react';
// import Navbar from '../components/Navbar.js';

describe('Navbar', () => {
  it('renders Navbar component', () => {
    const logoElement = screen.getByText('Math Magicians');
    const homeLink = screen.getByText('Home');
    const calculatorLink = screen.getByText('Calculator');
    const quoteLink = screen.getByText('Quote');
    expect(logoElement).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(calculatorLink).toBeInTheDocument();
    expect(quoteLink).toBeInTheDocument();
  });
});
