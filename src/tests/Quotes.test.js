import { render, renderer } from '@testing-library/react';
import Quotes from '../components/Quotes';

describe('Quotes', () => {
  it('renders Quotes component', () => {
    render(<Quotes />);
  });

  it('renders Quotes component', () => {
    const tree = renderer.create(<Quotes />).toJson();
    expect(tree).toMatchSnapshot();
  });
});
