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
        //changeCurrency({label: 'EUR', symbol: 'Э'})
    })
}