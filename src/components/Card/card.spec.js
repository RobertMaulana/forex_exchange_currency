import React from 'react'
import {shallow} from 'enzyme'
import Card from './index'

it('expect to render Card component', () => {
    expect(shallow(<Card currencies={[1, 2]}/>).length).toEqual(2)
})
