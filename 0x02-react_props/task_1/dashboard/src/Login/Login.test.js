import Login from "./Login";
import React from 'react';
import { render, shallow } from '@testing-library/react';

it('does it render withour crashing', () => {
    shallow(< Login />);
})

it("does it renders two input tags and 2 labels", () =>
{
    const { getById, getByLabelText, toHaveAttribute} = render( < Login />);
    
    expect(getById('email')).toBeInTheDocument();
    expect(getById('passwd')).toBeInTheDocument();
    expect(getByLabelText(/Email:/i)).toHaveAttribute("type": "email");
    expect(getByLabelText(/Password:/i)).toHaveAttribute("type": 'password');
});