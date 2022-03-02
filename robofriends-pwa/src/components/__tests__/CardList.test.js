import Enzyme, { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from '../CardList';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

// it('Expect to render CardList component 1 time', () => {
//   expect(shallow(<CardList />).length).toEqual(1)
// });

const mockRobots = [{
  id: 1,
  name: 'John Snow',
  username: 'JohnSnow',
  email: 'johndoe@gmail.com'
}]

it('Takes snapshot of CardList component', () => {
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})