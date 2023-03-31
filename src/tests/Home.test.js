import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('App', () => {
  it('renders App component', () => {
    render(<Home />);
  });
});
