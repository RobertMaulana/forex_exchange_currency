import React from 'react'
import {StyledSelect} from './select.style'
import Button from '../Button'

class Select extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    onChangeValue = curr => {
        this.setState({value: curr.target.value})
    }
    submitValue = () => {
        const {value} = this.state
        if (value === '') {
            alert('You should select currency!')
            return
        }
        this.props.onSelectCurrency(value)
    }
    render() {
        const {value} = this.state
        const {isDisplay, leftCurrencies} = this.props
        return (
            <StyledSelect isDisplay={isDisplay}>
                <select 
                    className='select' 
                    onChange={this.onChangeValue}
                    value={value}
                >
                    <option value="">Select Currency ...</option>
                    {
                        leftCurrencies.length > 0 ? (
                            leftCurrencies.map((val, index) => {
                                return (
                                    <option key={index} value={val}>{val}</option>
                                )
                            })
                        ) : <option value="">No Data</option>
                    }
                </select>
                <Button width='20%' onClick={this.submitValue}>Submit</Button>
            </StyledSelect>
        )
    }
}
export default Select