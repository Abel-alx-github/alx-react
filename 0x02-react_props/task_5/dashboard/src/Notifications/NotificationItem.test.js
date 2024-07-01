import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const container = shallow(<NotificationItem />);
    shallow(<NotificationItem />);
  });

  it('renders type and value props', () => {
    const container = shallow(<NotificationItem type='default' value='test' />);
    const li = container.find('li');
    expect(li).toHaveLength(1);
    expect(li.text()).toEqual('test');
    expect(li.prop('data-notification-type')).toEqual('default');
  });

  it('renders html prop', () => {
    const text = 'Here is the list of notifications';
    const container = shallow(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    const li = container.find('li');
    expect(li.html()).toEqual('<li><u>test</u></li>');
  });
});