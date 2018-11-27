import currenciesFormatter from '../misc/currencyFormatter'

describe('test currencies formatter', () => {
    it('converting short currencies to long currencies name ...', () => {
        expect(currenciesFormatter(11.0022)).toEqual('11.002')
        expect(currenciesFormatter()).toEqual('NA')
        expect(currenciesFormatter(2211.2289)).toEqual('2,211.229')
    })
})