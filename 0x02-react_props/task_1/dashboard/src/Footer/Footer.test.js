import Footer from "./Footer";
import React from 'react';
import { render, shallow } from '@testing-library/react';

it('does it renders without crashing', () => {
    shallow(< Footer />);
})

it('does it renders text "copyright" at the end', () => {
    const { getByText } = render(<Footer/>);
    expect(getByText(/Copyright/i)).toBeInTheDocument();
})