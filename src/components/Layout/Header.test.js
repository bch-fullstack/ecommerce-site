import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'

it('', () => {
    // const wrapper = shallow(<Header/>);
    // console.log(wrapper.debug())

    const tree = renderer
        .create(<BrowserRouter><Header/></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})