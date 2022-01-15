export const changeCategoryAction = (value, dispatcher) => {
    dispatcher.dispatch({
        type: 'CHANGE CATEGORY',
        payload: {category: value},
    })
}
export const changeCurrencyAction = (value, dispatcher) => {
    dispatcher.dispatch({
        type: 'CHANGE CURRENCY',
        payload: value,
    })
}

export const addProductAction = (value, dispatcher) => {
    dispatcher.dispatch({
        type: 'ADD ITEM',
        payload: value,
    })
}

export const addAmountAction = (value, dispatcher) => {
    dispatcher.dispatch({
        type: 'AMOUNT ADD',
        payload: value,
    })
}

export const takeAmountAction = (value, dispatcher) => {
    dispatcher.dispatch({
        type: 'AMOUNT TAKE',
        payload: value,
    })
}