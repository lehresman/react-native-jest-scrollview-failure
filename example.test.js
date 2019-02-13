/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { ScrollView, View, Text } from 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Example test', () => {
  it('should find text', () => {
    const wrapper = mount(<View><Text>lorem ipsum dolor sit</Text></View>);
    expect(wrapper.find('Text').length).toEqual(1);
  });

  it('should find text in ScrollView', () => {
    const wrapper = mount(<ScrollView><Text>lorem ipsum dolor sit</Text></ScrollView>);
    expect(wrapper.find('Text').length).toEqual(1);
  });
});
