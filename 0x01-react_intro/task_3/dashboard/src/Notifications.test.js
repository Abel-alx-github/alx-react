import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("test Notification component", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("test renders ul", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("test renders 3 list items", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("li")).toHaveLength(3);
  });

  it("test renders correct text", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("p").text()).toBe("Here is the list of notifications");
  });
});