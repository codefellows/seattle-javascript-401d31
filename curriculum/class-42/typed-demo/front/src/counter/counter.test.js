import React from 'react';
import { mount } from 'enzyme';

import Counter from './counter';

describe('Testing Counter', () => {
  jest.spyOn(Counter.prototype, 'handleRequest');
  const counter = mount(<Counter />);

  it('should render counter', () => {
    expect(counter.find('.count').exists()).toBeTruthy();
    expect(counter.state('count')).toBe(0);
    expect(Counter.prototype.handleRequest).toHaveBeenCalled();
  });
})
