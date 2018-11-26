import React from 'react'

import {StyledApp} from './App.style'

import Header from './components/Header'
import Card from './components/Card'
import Button from './components/Button'
import Select from './components/Select'
import {getCurrenciesUrl} from './api/url'
import listCurrencies from './misc/listCurrencies'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollY: 0,
            showSelectCurr: false,
            showAddCurrButton: true,
            data: {},
            defaultCurrency: 'USD',
            defaultCurrencyAmount: '10.0000',
            cardDefaultCurrencies: ['IDR', 'EUR', 'GBP', 'SGD']
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.addCurrency = this.addCurrency.bind(this)
        this.fetchCurrencies = this.fetchCurrencies.bind(this)
        this.onSelectCurrency = this.onSelectCurrency.bind(this)
    }
    
    componentDidMount() {
        this.div.addEventListener("scroll", this.handleScroll)
        this.fetchCurrencies()
    }

    fetchCurrencies() {
        fetch(getCurrenciesUrl)
            .then(response => response.json())
            .then(data => this.setState({data}))
    }

    handleScroll(event) {
        this.setState({scrollY: event.currentTarget.scrollTop})
    }

    addCurrency() {
        this.setState({
            showAddCurrButton: false,
            showSelectCurr: true
        })
    }

    onSelectCurrency(curr) {
        this.setState({
            cardDefaultCurrencies: [
                ...this.state.cardDefaultCurrencies,
                curr
            ]
        })
    }

    onRemoveCurrency = curr => {
        const {cardDefaultCurrencies} = this.state
        const index = cardDefaultCurrencies.indexOf(curr)
        cardDefaultCurrencies.splice(index, 1)
        this.setState({cardDefaultCurrencies})
    }

    render () {
        const {
            scrollY, 
            showSelectCurr, 
            showAddCurrButton, 
            data,
            defaultCurrency,
            defaultCurrencyAmount,
            cardDefaultCurrencies
        } = this.state

        let currencies = []
        for(let key in data.rates) {
            cardDefaultCurrencies.map(val => {
                if (key === val) {
                    currencies = [...currencies, {[key]: data.rates[key]}]
                } 
            })
        }
        let leftCurrencies = listCurrencies().filter(obj => cardDefaultCurrencies.indexOf(obj) === -1)
        return (
            <StyledApp ref={div => (this.div = div)}>
                <Header 
                    scrollY={scrollY}
                    defaultCurrency={defaultCurrency}
                    defaultCurrencyAmount={defaultCurrencyAmount}
                />
                <div className='body'>
                    {
                        Object.values(data).length < 1 ? <div>Loading ...</div> : (
                            <Card 
                                currencies={currencies}
                                defaultCurrency={defaultCurrency}
                                removeCurrency={this.onRemoveCurrency}
                            />
                        )
                    }
                    <Button 
                        style={{display: !showAddCurrButton && 'none'}}
                        width='100%'
                        onClick={this.addCurrency}
                    >(+) Add More Currencies</Button>
                    <Select 
                        leftCurrencies={leftCurrencies}
                        isDisplay={showSelectCurr}
                        onSelectCurrency={this.onSelectCurrency}
                    />
                </div>
            </StyledApp>
        )
    }
}

export default App
