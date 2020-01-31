import * as React from 'react';
import { shallow } from 'enzyme';
import RegistrationForm from '../RegistrationForm';

describe('RegistrationForm', () => {
    const wrapper = shallow(<RegistrationForm />);
    const inputs = wrapper.find('input');
    it('Should contain 4 inputs', () => {
        expect(inputs).toHaveLength(4);
    });

    it('should have a input type submit', ()=> {
        const submitButtons = wrapper.find('input[type="submit"]');
        //There should be only one submit input
        expect(submitButtons).toHaveLength(1);
        // Check submit input text
        expect(submitButtons.props().value).toEqual('Register !');
    });

});