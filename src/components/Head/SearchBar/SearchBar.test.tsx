import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './SearchBar';
const app = render(<Search text="" setText={() => {}} onSubmit={()=>{}} />);
describe('it should be used to test snapshots', () => {
  it('should mach the snapshot', () => {
    expect(app).toMatchSnapshot();
  });
});

describe('Search component works', () => {
  it('should have a placeholder', () => {
  render(<Search text="" setText={() => {}} onSubmit={()=>{}} />);
    expect(screen.queryByPlaceholderText('What book do you need?')).toBeInTheDocument();
  });
  it('should handle search', () => {
    const onChange = jest.fn();
    render(<Search  text=""  setText={onChange} onSubmit={()=>{}} />);
    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(onChange).toHaveBeenCalledTimes(5);
  });
});
