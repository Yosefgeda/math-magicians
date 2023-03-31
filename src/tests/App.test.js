import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('renders Navbar and the correct page content based on the URL', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    const navbarElement = screen.getByRole('navigation');
    const homePageElement = screen.getByText('Welcome to our Page!');
    expect(navbarElement).toBeInTheDocument();
    expect(homePageElement).toBeInTheDocument();
  });
});
