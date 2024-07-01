import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notification />', () => {
  it('renders without crashing', () => {
    const container = shallow(<Notifications />);
    shallow(<Notifications />);
  });

  it('Notification Item with html', () => {
    const container = shallow(<Notifications displayDrawer />);
    const nItem = container.find('NotificationItem');
    expect(nItem).toBeDefined();
    expect(nItem.first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it('menuItem with displayDrawer false', () => {
    const container = shallow(<Notifications />);
    const mItem = container.find('div.menuItem');
    expect(mItem).toHaveLength(1);
  });

  it('Notification with displayDrawer false', () => {
    const container = shallow(<Notifications />);
    const dNoti = container.find('div.Notifications');
    expect(dNoti).toHaveLength(0);
  });

  it('menuItem with displayDrawer true', () => {
    const container = shallow(<Notifications displayDrawer />);
    const mItem = container.find('div.menuItem');
    expect(mItem).toHaveLength(1);
  });

  it('displayDrawer is true', () => {
    const container = shallow(<Notifications displayDrawer />);
    const dNoti = container.find('div.Notifications');
    expect(dNoti).toHaveLength(1);
  });
});