import Enzyme from 'enzyme';

import Jest from "jest-extended"

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });