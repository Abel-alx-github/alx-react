import Notifications from "./Notifications";
import React from "react";
import { render, shallow } from '@testing-library/react';

it('does it render NotificationItem component', () => {
    const {getByAttribute } = render(<Notifications />)
    expect(getByAttribute('data-notification-type')).toBeInTheDocument();
});


it('does it renders the right html from NotificationItem', () => {
    const { getByRoll } = render(<Notifications />);                                                                      

    expect(getByRoll('list')).toBeInTheDocument();
})