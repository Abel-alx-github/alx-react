import Header from './Header';
import React from 'react';
import { render, shallow } from '@testing-library/react';

it("shallo render the Header componet", () => {
    shallow (< Header />)
});

it('does it render h1 and img', () => {
    const { getByAltText, getByText } = render(< Header />);
    expect(getByAltText(/logo/i)).toBeInTheDocument();
    expect(getByText('School dashboard')).toBeInTheDocument();
});