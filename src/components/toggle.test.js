import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Toggle from './toggle';

Enzyme.configure({ adapter: new Adapter() });

describe("Toggle", () => {
    const wrapper = shallow(<Toggle />);
    it("should show text", () => {
        const text = (wrapper.find('div p')).text();
        expect(text).toBe('some text');
    });
    it("should show h1 text", () => {
        const text = (wrapper.find('div h1')).text();
        expect(text).toContain('This is toggle app');
    });
    it("text should hide on button click", () => {
        const btn = wrapper.find('div button');
        btn.simulate('click');
        const textLength = (wrapper.find('div p')).length;
        expect(textLength).toBe(0);
    });
});