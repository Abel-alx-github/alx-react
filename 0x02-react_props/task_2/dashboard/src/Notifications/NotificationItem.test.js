import NotificationItem from "./NotificationItem";
import React from 'react';
import {shallow, render} from '@testing-library/react';

it('does it render without crashing', () => {
    shallow(<NotificationItem />)
})

it('does it render with props', () => {
    const { getByText } = render(<NotificationItem value="test" type="default"/>);

    expect(getByText(/test/i)).toBeInTheDocumentation();
})

it('does it render with html props', () => {
    const { getByText } = render(<NotificationItem html={{__html: '<ul>test</ul>'}}/>);
    expect(getByText(/test/i)).toBeInTheDocumentation();
})