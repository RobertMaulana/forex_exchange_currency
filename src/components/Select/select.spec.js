import React from 'react'
import {shallow} from 'enzyme'
import Select from './index'

it('expect to render Select component', () => {
    expect(shallow(<Select leftCurrencies={[1, 2]}/>).length).toEqual(1)
})
