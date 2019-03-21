import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';

describe('PasswordInput', () => {
    test('hides password quality by default', () => {
        const tree = renderer.create(<PasswordInput htmlId="test" name="test" onChange={() => {}} value="Uds2$$1f.0" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});