import React from 'react'
import {shallow} from 'enzyme'
import Header from './index'

it('expect to render Header component', () => {
    expect(shallow(<Header />).length).toEqual(1)
})
