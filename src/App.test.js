import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { TabComponent } from './Tab';

test('contains TabComponent element', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(TabComponent)).toHaveLength(1);
});
