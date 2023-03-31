import { render, screen, fireEvent } from '@testing-library/react';
import Buttons from '../components/Buttons';


describe('Buttons', () => {
  it('renders all buttons', () => {
    render(<Buttons />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(19);
  });

  it('clicking the "7" button should display "7" in the output', () => {
    const { getByText } = render(<Buttons />);
    const button = getByText('7');
    fireEvent.click(button);
    setTimeout(() => {
      expect(screen.getByText('7')).toBeInTheDocument();
    }, 1000);
  });
});