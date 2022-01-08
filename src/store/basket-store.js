const initialStateCurrency = {
    bag: [],
    totalPrice: 0,
    amountOfProducts: 0,
}
// {id:id, amount:amount, size: size, product:product, price:price}
const reducer = (state = initialStateCurrency, action) => {
    let newBag, objectId

    switch (action.type) {
        case 'NEW ITEM':
            return { ...state,
                totalPrice: state.totalPrice + action.payload.price,
                bag: state.bag.push(action.payload),
                amountOfProducts: state.amountOfProducts++
            }

        case 'AMOUTN ADD':
            objectId = state.bag.findIndex(obj => obj.id === action.payload.id)
            newBag = state.bag
            newBag[objectId].amount += 1

            return { ...state,
                totalPrice: state.totalPrice + action.payload.price,
                bag: newBag }

        case 'AMOUTN TAKE':
            objectId = state.bag.findIndex(obj => obj.id === action.payload.id)
            newBag = state.bag

            if(newBag[objectId].amount === 0) {
                newBag.splice(objectId, 1)
                return { ...state,
                    totalPrice: state.totalPrice + action.payload.price,
                    bag: newBag,
                    amountOfProducts: state.amountOfProducts--
                }
            }

            newBag[objectId].amount -= 1

            return { ...state,
                totalPrice: state.totalPrice + action.payload.price,
                bag: newBag }

        default:
            return state
    }
}

export default reducer