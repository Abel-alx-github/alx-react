import React from "react";
import App from './App'
import { shallow, render } from  '@testing-library/react'

it('does render without crashing', () => {
    shallow(
        < App />
    )
})

it('does it render "Notification" component', () => {
    const { getByText } = render(<App/>);

    expect(getByText(/notifications/i)).toBeInTheDocument();
});

it('does it render header component', () => {
    const { getByRoll } = render(< App/>);

    expect(getByRoll('heading')).toBeInTheDocument();
});

it('does it render Login component', () => {
    const { getByText } = render(< App />);

    expect(getByText(/Login to/i)).toBeInTheDocument();
});

it('does it render Footer component', () => {
    const { getByRoll } = render(<App/>);

    expect(getByRoll('contentinf')).toBeInTheDocument();
});