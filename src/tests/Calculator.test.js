import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders Calculator component', () => {
    render(<Calculator />);
  });

  it('displays 6 in document', () => {
    render(<Calculator />);
    expect(screen.getByText('6')).toBeInTheDocument();
  });
});
