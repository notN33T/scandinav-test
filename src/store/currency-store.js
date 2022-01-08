const initialStateCurrency = {
    label: 'USD',
    symbol: '$'
}

const reducer = (state = initialStateCurrency, action) => {
    switch (action.type) {
        case 'CHANGE CURRENCY':
            return {...state, label: action.payload.label, symbol: action.payload.symbol}
        default:
            return state
    }
}

export default reducer