import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders Calculator component', () => {
    render(<Calculator />);
  });
});
