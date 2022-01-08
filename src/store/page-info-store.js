const initialStateCurrency = {
    category: 'all',
}

const reducer = (state = initialStateCurrency, action) => {
    switch (action.type) {
        case 'CHANGE CATEGORY':
            return {...state, category: action.payload.category }
        default:
            return state
    }
}

export default reducer