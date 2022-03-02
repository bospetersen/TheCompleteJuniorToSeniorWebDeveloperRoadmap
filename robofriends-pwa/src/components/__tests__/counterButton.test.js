import Enzyme, { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterButton from '../CounterButton';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

it('Takes snapshot of CounterButton component', () => {
  const color = "red";
  expect(shallow(<CounterButton color={color} />)).toMatchSnapshot();
})

it('correctly increments counter', () => {

  const color = "red";
  const wrapper = shallow(<CounterButton color={color} />);

  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({ count: 1 })

})