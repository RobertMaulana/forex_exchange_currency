import {getCurrenciesUrl} from '../api/url'

describe('get currencies data', () => {
    it('data length should be greater than 1', () => {
        // always use assertions for async / promise test
        expect.assertions(1)
        return fetch(getCurrenciesUrl)
                .then(response => response.json())
                .then(data => {
                    expect(Object.values(data).length).toBeGreaterThan(1)
                })
    })
})