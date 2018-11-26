import React from 'react'
import {StyledHeader} from './header.style'

import CurrDictionary from '../../misc/currenciesDictionary'

export default ({scrollY, defaultCurrency, defaultCurrencyAmount}) => {
    return (
        <StyledHeader 
            scrollY={scrollY} 
            currentCurr={defaultCurrency}
            currentCurrValue={defaultCurrencyAmount}
        >
            <div className='title-currency'>
                <h3>{defaultCurrency} - {CurrDictionary(defaultCurrency)}</h3>
                <div className='usd-container-info'>
                    <p>{defaultCurrency}</p>
                    <p>{defaultCurrencyAmount}</p>
                </div>
            </div>
        </StyledHeader>
    )
}