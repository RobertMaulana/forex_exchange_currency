const CurrDictionary = (curr = '') => {
    if (curr === '' || curr === null || curr === undefined) {
        return 'Currency not found'
    }
    const data = {
        "BGN": "Bulgarian Lev",
        "CAD": "Canadian Dollar",
        "BRL": "Brazilian Real",
        "HUF": "Hungarian Forint",
        "DKK": "Danish Krone",
        "JPY": "Japanese Yen",
        "ILS": "Israeli Shekel",
        "TRY": "Turkish Lira",
        "RON": "Romanian Leu",
        "GBP": "British Pound",
        "PHP": "Philippine Peso",
        "HRK": "Croatian Kuna",
        "NOK": "Norwegian Krone",
        "ZAR": "South African Rand",
        "MXN": "Mexican Peso",
        "AUD": "Australian Dollar",
        "USD": "United States Dollar",
        "KRW": "South Korean Won",
        "HKD": "Hong Kong Dollar",
        "EUR": "Euro",
        "ISK": "Icelandic Krona",
        "CZK": "Czech Koruna",
        "THB": "Thai Baht",
        "MYR": "Malaysian Ringgit",
        "NZD": "New Zealand Dollar",
        "PLN": "Polish Zloty",
        "CHF": "Swiss Franc",
        "SEK": "Swedish Krona",
        "CNY": "Chinese Yuan",
        "SGD": "Singapore Dollar",
        "INR": "Indian Rupe",
        "IDR": "Indonesian Rupiah",
        "RUB": "Russian Ruble"
    }
    if (data.hasOwnProperty(curr)) {
        return data[curr]
    } else {
        return curr
    }
}

export default CurrDictionary