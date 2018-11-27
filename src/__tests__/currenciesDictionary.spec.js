import currenciesDictionary from '../misc/currenciesDictionary'

describe('test currencies dictionary', () => {
    it('converting short currencies to long currencies name ...', () => {
        expect(currenciesDictionary('JJM')).toEqual('JJM')
        expect(currenciesDictionary()).toEqual('Currency not found')
        expect(currenciesDictionary('IDR')).toEqual('Indonesian Rupiah')
    })
})