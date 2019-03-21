import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';
import {shallow} from 'enzyme';

describe('PasswordInput', () => {
    test('toggles input type when show/hide password is clicked', () => {
        const wrapper = shallow(<PasswordInput htmlId="test" name="test" value="test" onChange={() => {}} value="Uds2$$1f.0" showVisibilityToggle />);

        // Password input should have a type of password initially
        expect(wrapper.find({ type: 'password' })).toHaveLength(1);
        expect(wrapper.find({ type: 'text' })).toHaveLength(0);

        wrapper.find('button').simulate('click');

        expect(wrapper.find({ type: 'password' })).toHaveLength(0);
        expect(wrapper.find({ type: 'text' })).toHaveLength(1);
    });

    test('hides password quality by default', () => {
        const tree = renderer.create(<PasswordInput htmlId="test" name="test" onChange={() => {}} value="Uds2$$1f.0" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});