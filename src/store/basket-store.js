const initialStateCurrency = {
    bag: [],
    totalPrice: 0,
    amountOfProducts: this.bag.length,
}
// {id:id, amount:amount, size: size, product:product, price:price}
const reducer = (state = initialStateCurrency, action) => {
    switch (action.type) {

        case 'NEW ITEM':
            return { ...state,
                totalPrice: state.totalPrice + action.payload.price,
                bag: state.bag.push(action.payload) }

        case 'AMOUTN ADD':
            let objectId = state.bag.findIndex(obj => obj.id === action.payload.id)
            let newBag = state.bag
            newBag[objectId].amount -= 1
            return { ...state,
                totalPrice: state.totalPrice + action.payload.price,
                bag: newBag }

        case 'AMOUTN TAKE':
            objectId = state.bag.findIndex(obj => obj.id === action.payload.id)
            newBag = state.bag
            newBag[objectId].amount += 1
            return { ...state,
                totalPrice: state.totalPrice + action.payload.price,
                bag: newBag }

        default:
            return state
    }
}

export default reducer