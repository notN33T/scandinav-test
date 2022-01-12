const initialStateCurrency = {
    items: [],
    amountOfProducts: 0,
}
// {id:id, amount:amount, size: size, product:product, price:price}
const reducer = (state = initialStateCurrency, action) => {
    let newBag, objectId

    switch (action.type) {
        case 'ADD ITEM':
            return { ...state,
                items: state.items.concat(action.payload),
                amountOfProducts: state.amountOfProducts + 1,
            }
        case 'AMOUTN ADD':
            objectId = state.items.findIndex(obj => obj.id === action.payload.id)
            newBag = state.items
            newBag[objectId].amount += 1

            return { ...state,
                items: newBag }

        case 'AMOUTN TAKE':
            objectId = state.items.findIndex(obj => obj.id === action.payload.id)
            newBag = state.items

            if(newBag[objectId].amount === 0) {
                newBag.splice(objectId, 1)
                return { ...state,
                    items: newBag,
                    amountOfProducts: state.amountOfProducts--
                }
            }

            newBag[objectId].amount -= 1

            return { ...state,
                totalPrice: state.totalPrice + action.payload.price,
                items: newBag }

        default:
            return state
    }
}

export default reducer