import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('App', () => {

  it('renders App component', () => {
    render(<Home />);
  });

  it('displays text in document', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our Page!')).toBeInTheDocument();
  });
});
