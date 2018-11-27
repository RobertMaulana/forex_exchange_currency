import React from 'react'
import {mount} from 'enzyme'
import App from '../App'

it('expect to render App component', () => {
    expect(mount(<App />).length).toEqual(1)
})
