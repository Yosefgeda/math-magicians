import { render } from '@testing-library/react';
import Buttons from '../components/Buttons';

describe('App', () => {
  it('renders App component', () => {
    render(<Buttons />);
  });
});
