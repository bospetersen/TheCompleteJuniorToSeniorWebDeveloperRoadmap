import Enzyme, { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from '../Card';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

// it('Expect to render Card component 1 time', () => {
//   expect(shallow(<Card />).length).toEqual(1)
// });

it('Takes snapshot of Card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
})