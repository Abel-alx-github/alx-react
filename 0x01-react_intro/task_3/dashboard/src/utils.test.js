import React from 'react';
import {getFullYear, getFooterCopy, getLatestNotification} from './utils';

jest.spyOn(global.Date, 'now').mockReturnValue(new Date(2024, 5, 28).getTime());
test("test getFullYear component", () => {
 expect(getFullYear()).toBe(2024);
})

test("test getFooterCopy component when isIndex=false", () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
   })

test("test getFooterCopy component when isIndex=true", () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
   });

test("test getLatestNotification function", () => {
const notifications = getLatestNotification();
expect(notifications).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});