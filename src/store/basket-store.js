const initialStateCurrency = {
    items: [],
    amountOfProducts: 0,
}

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

            newBag[objectId].amount -= 1

            if(newBag[objectId].amount === 0) {
                newBag.splice(objectId, 1)
                return { ...state,
                    items: newBag,
                }
            }

            return { ...state,
                items: newBag }

        default:
            return state
    }
}

export default reducer