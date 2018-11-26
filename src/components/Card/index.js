import React from 'react'

import {StyledCard} from './card.style'

import Button from '../Button'
import CurrDictionary from '../../misc/currenciesDictionary'
import currencyFormatter from '../../misc/currencyFormatter'

class Card extends React.Component {
    removeCurrency(curr) {
        const response = window.confirm("Are you sure want tot delete this currency?")
        if (!response) {
            return
        }
        this.props.removeCurrency(curr)
    }
    render() {
        const {currencies, defaultCurrency} = this.props
        if (currencies.length > 0) {
            return currencies.map((val, index) => {
                for(let key in val) {
                    const multiBy10 = val[key] * 10
                    const curr = currencyFormatter(multiBy10)
                    return (
                        <StyledCard key={index}>
                            <div className='card-container'>
                                <div className='card-total-curr'>
                                    <p>{key}</p>
                                    <p>{curr}</p>
                                </div>
                                <div>
                                    <p>{key} - {CurrDictionary(key)}</p>
                                </div>
                                <div>
                                    <p>1 {defaultCurrency} = {key} {currencyFormatter(val[key])}</p>
                                </div>
                            </div>
                            <div className='button-container'>
                                <Button onClick={() => this.removeCurrency(key)}>(-)</Button>
                            </div>
                        </StyledCard>
                    )
                }
            })
        } else {
            return <div>No data.</div>
        }
    }
}

export default Card
